import './App.css';
import Portfolio from './components/Portfolio/Portfolio';
import Separator from './components/Separator/Separator';

function App() {
  return (
    <div className="App">
      <h1>Курс React. Домашнее задание по&nbsp;теме "События и&nbsp;состояния"</h1>
      <h2>Задание 1</h2>
      <div className='task-1'>
        <Portfolio/>
      </div>
      <Separator/>
      <div className='task-2'>
        <h2>Задание 2</h2>
      </div>
      <Separator/>
      <div className='task-3'>
        <h2>Задание 3</h2>
      </div>
    </div>
  );
}

export default App;
