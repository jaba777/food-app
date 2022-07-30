import React,{useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";


function App() {

  const [cartIsShown,setCartIsShown]=useState(false);

  const [qty,setQty]=useState('1');

  const [express,setExpress]=useState([]);

  const addChangeHandler=(item)=>{
      const finder = express.find((x)=>x.id === item.id);
      if(finder){
        setExpress((x)=>x.id === item.id ? {...finder} : x );
      } else{
        setExpress([...express,{...item}])
      }
      console.log(express);
  }
  const removeChangeHandler=(item)=>{
    setExpress(express.filter((x)=>x.id!==item.id));
  }

  const showCartHandler=()=>{
    setCartIsShown(true);
  }

  const hideCartHandler=()=>{
    setCartIsShown(false);
  }

  return (
    <>
    {cartIsShown && <Cart onClose={hideCartHandler} onExpress={express} qty={qty} onRemove={removeChangeHandler} />}
    <Header onShowCart={showCartHandler} onExpress={express} />
    <main>
    <Meals addChange={addChangeHandler} setQty={setQty} />
    </main>
    </>
  );
}

export default App;

