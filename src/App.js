import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;

function App () {

  useEffect( ( )=> {

    tg.ready();

  })

const onclose = () => {
  tg.close();
}



  return (
    <div className="App">
     work
     <button onclick = {onclose}>Закрыть</button>
    </div>
  );

  }


export default App;
