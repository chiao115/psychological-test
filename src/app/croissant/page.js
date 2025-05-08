'use client';
import StartPage from '@/component/page/StartPage';
import QuestionPage from '@/component/page/QuestionPage';
import DisplayResultPage from '@/component/page/DisplayresultPage';
import ResultPage from '@/component/page/ResultPage';
import { useState } from 'react';
import {usePsyStore, usePsyStore} from '@/app/store/store'

export default function Croissant() {

  const usePsyStore = usePsyStore((state) => state);

  const [psyState, setGameState] = useState({
    state: 0, //0:start, 1:question, 2:displayResult, 3: result
    questionState: 0,
    totalQuestions: 3,
    score: 0
  });
  
  const nextStep = function(){
    if(psyState.state >= 3) return;

    if(psyState.state == 1){
      //答題階段
      //要超過總題數才能結束答題階段

      if(psyState.questionState < psyState.totalQuestions-1){

        psyState.updatequestionState(psyState.questionState + 1)
 
      }else{
        setGameState({
          ...psyState,
          state: psyState.state + 1
        });
      }
      
    }else{
      console.log("next");
      setGameState({
        ...psyState,
        state: psyState.state + 1
      });
    }

  }

  const prevStep = function(){
    if(psyState.state <= 0) return;
    console.log("prev");
    setGameState({
      ...psyState,
      state: psyState.state - 1
    })
  }



  return (
    <>
      <div className='w-screen h-screen bg-amber-50 flex justify-center items-center'>
        { psyState.state ==0 && <StartPage nextStep={nextStep}/>}
        { psyState.state ==1 && <QuestionPage questionIndex={psyState.questionstate}/>}
        { psyState.state ==2 && <DisplayResultPage/>}
        { psyState.state ==3 && <ResultPage/>}

        {/* <div onClick={prevStep}>上一步</div> */}

        {/* <div onClick={nextStep}>下一步</div> */}
        
      </div>
      
    </>
  );
}