import React from 'react';
import DieComp from './DieComp'
import './Tenzis.css'
import Confetti from 'react-confetti'


function Tenzis() {
  const [arrnum,setArr]=React.useState(()=>generatenum());
  const [count,setCount]=React.useState(0);
  const buttonfocus=React.useRef(null);

  let gamewon=arrnum.every(die=>die.isHeld) && arrnum.every(die=>die.value===arrnum[0].value) && count<=10


  function generatenum()
  {
    let arr=[];
    for(let i=0;i<10;i++)
    {
      let num=Math.floor(Math.random()*6)+1;
      arr[i]={
        id:i,
        value:num,
        isHeld:false
      };
    }
    return arr;
  }


  function generatenewdice()
  {
    setArr(prevArr=>{
      return prevArr.map(die=>{
        return die.isHeld?die:{...die,value:Math.floor(Math.random()*6)+1}
      });
    });
    setCount(count+1);
  }

  function hold(id)
  {
    setArr(prevarr=>{
      return prevarr.map(die=>{
        return die.id===id?{...die,isHeld:!die.isHeld}:die
      });
    });
  }

  function resetfun()
  {
    setArr(generatenum());
    setCount(0);
  }

  let dies=arrnum.map((obj)=>{
    return <DieComp key={obj.id} hold={hold} obj={obj}/>
  });

  React.useEffect(()=>{
    if(gamewon)
    {
      buttonfocus.current.focus();
    }
  },[gamewon]);

  return (
    <div className='Game-box'>
      {gamewon && <Confetti/>}
      <h2 className='heading'>TENZIES</h2>
      {count==0 ? <p className='instructions'>Pick a number and roll the dice. Click each die to freeze it at its current value between rolls. Roll until all dice are the same.You have 10 rolls to match all the dice to your number!</p>:(gamewon || count>10) ? <p className='Result'>{gamewon?"You win!":"You Lose!"}</p>:<p className='rolls-count'>No of Rolls = {count}</p>}
        <div className='die-container'>
            {dies}
        </div>
        <button ref={buttonfocus} onClick={!gamewon && count<=10?generatenewdice:resetfun} className='roll-button'>{gamewon || count>10?"New Game":"Roll"}</button>
    </div>
  )
}

export default Tenzis
