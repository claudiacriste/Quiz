import './App.css';
import { useState } from 'react';
function App() {
  const intrebari=[
    {
      intrebare:"Care este capitala Romaniei?",
      variante:["Paris", "Londra", "Bucuresti", "Roma"],
      varc:"Bucuresti",
    },
    {
      intrebare:"Care este cel mai inalt munte din lume?",
      variante:["Munti Anzi", "Muntele Etna", "Munti Carpati", "Munti Hymalaia"],
      varc:"Munti Hymalaia",
    },
    {
      intrebare:"Cate zile are un an bisect?",
      variante:["366", "365", "364", "363"],
      varc:"366",
    },
    {
      intrebare:"Cine a scris Hamlet?",
      variante:["William Shakespeare", "George Bernard Shaw", "Anton Cehov", "Moliere"],
      varc:"William Shakespeare",
    },
    {
      intrebare:"Care este culoarea cerului in timpul zilei?",
      variante:["Verde", "Albastru", "Rosu", "Portocaliu"],
      varc:"Albastru",
    }
  ]
  const[index, setIndex]=useState(0)
  function esteadevarata(raspuns){
   if(raspuns===intrebari[index].varc){
    setIndex(index+1)
   }
   else{
    setIndex(index)
   }

  }
  return (
    <div className="App">
      <h3>{intrebari[index].intrebare}</h3>
      <div className="optiuni">
      {intrebari[index].variante.map((option, index) => (
  <button key={index} onClick={() => esteadevarata(option)}>{option}</button> 
))}

      </div>
    </div>
  );
}

export default App;
