import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootType } from './redux/reducer';
import { questionTypes } from './redux/types';
import "./App.css";
function App() {
  const [rightAnswers, setRightAnswers] = useState<number>(0);
  const questions = useSelector<RootType, questionTypes[]>(state => state)
  const [number, setNumber] = useState<number>(0);
  const [showNext, setShowNext] = useState<boolean>(false)
  const [right, setRight] = useState<boolean>(false)

  function handleClickNext() {
    if (number + 1 < questions.length) {
      console.log(number, questions.length)
      setNumber(number => number + 1)
      setRight(false)
    } else {
      console.log("stop")
      setShowNext(false)
    }
  }
  function handleClickStart() {
    setRightAnswers(0)
    setNumber(0)
    setShowNext(true)
    setRight(false)
  }
  
  return (
    <div className="App">
      <div className="quiz container">
        ``
        <img className='quiz__img' src="http://testing-companies.com/wp-content/uploads/2017/05/%D0%B7%D0%B0%D0%B3%D1%80%D1%83%D0%B6%D0%B5%D0%BD%D0%BE-1.jpg" alt="" />
        <h1 className='quiz__title'>Проверьте, как хорошо вы знаете географию Кыргызстана</h1>
        <button onClick={handleClickStart} className='quiz__start'>Начать</button>
        {
          !showNext && <p className='quiz__score'>Баллы: {!showNext && rightAnswers}/{questions.length}</p>
        }

      </div>
    </div>
  );
}

export default App;
