'use client';
import StartPage from '../component/page/StartPage';
import QuestionPage from '../component/page/QuestionPage';
import DisplayResultPage from '../component/page/DisplayResultPage'; 
import ResultPage from '../component/page/ResultPage';
import { usePsyStore } from './store/store';

export default function HomePage() {
  const psyState = usePsyStore((state) => state);

  const nextStep = () => {
    if (psyState.state >= 3) return;

    if (psyState.state === 1) {
      // 答題階段
      if (psyState.questionState < psyState.totalQuestions - 1) {
        psyState.updateQuestionState(psyState.questionState + 1);
      } else {
        psyState.updateState(psyState.state + 1);
      }
    } else {
      psyState.updateState(psyState.state + 1);
    }
  };

  const prevStep = () => {
    if (psyState.questionState <= 0) return;
    psyState.updateQuestionState(psyState.questionState - 1);
  };
  
  return (
    <div
      className="w-screen h-screen flex justify-center items-center"
      style={{
        backgroundImage: 'url("/0.start/AllBG.png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover', 
      }}
    >
      {psyState.state === 0 && <StartPage nextStep={nextStep} />}
      {psyState.state === 1 && (
        <QuestionPage
          nextStep={nextStep}
          prevStep={prevStep}
          questionIndex={psyState.questionState}
        />
      )}
      {psyState.state === 2 && <DisplayResultPage nextStep={nextStep} />}
      {psyState.state === 3 && <ResultPage />}
    </div>
  );
}
