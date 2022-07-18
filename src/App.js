import './App.css';
import Separator from './components/Separator/Separator';
import Portfolio from './components/Portfolio/Portfolio';
import Store from './components/Store/Store';

function App() {
  return (
    <div className="App">
      <h1>Курс React. Домашнее задание по&nbsp;теме "События и&nbsp;состояния"</h1>
      <h2>Задание 1. "Портфолио с фильтрами" (Классовые компоненты)</h2>
      <div className='task-1'>
        <Portfolio/>
      </div>
      <Separator/>
      <div className='task-2'>
        <h2>Задание 2. "Расположение товаров" (Функциональные компоненты)</h2>
        <Store/>
      </div>
      {/* <Separator/>
      <div className='task-3'>
        <h2>Задание 3. "Выпадающий список"</h2>
      </div> */}
    </div>
  );
}


export default App;
