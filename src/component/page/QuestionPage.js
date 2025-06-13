'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';
import { usePsyStore, useQuestionStore } from '@/app/store/store';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export default function QuestionPage({ questionIndex, nextStep, prevStep }) {
  const psy = usePsyStore((state) => state);
  const questions = useQuestionStore((state) => state.questions);
  const currentQuestion = questions[String(questionIndex + 1)];
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(1); // 1: 下一題滑入, -1: 上一題滑出

  const clickAnswer = (option) => {
    psy.updateScore(option.cat, option.value);
    nextStep();
    console.log(`[Q${questionIndex + 1}] ${option.title} → ${option.cat} +${option.value}`);
  };

  const handleAnswer = (option) => {
    setDirection(1); // 向右滑入
    setIsAnimating(true);
    setTimeout(() => {
      psy.updateScore(option.cat, option.value);
      nextStep();
      setIsAnimating(false);
    }, 300);
  };

  const handlePrev = () => {
    setDirection(-1); // 向左滑入
    setIsAnimating(true);
    setTimeout(() => {
      prevStep();
      setIsAnimating(false);
    }, 300);
  };

  const imageSrc = `/1.question/cat-q${questionIndex + 1}.png`;

  return (
    <MobileFrame questionIndex={questionIndex} innerBg="/1.question/BgQues.png">
      {questionIndex > 0 && (
        <button
          onClick={handlePrev}
          className="absolute top-10 left-10 w-[70px] h-[30px] bg-[#ffc0522e] text-[#F0A224] text-sm font-medium rounded-full \
          border-2 border-[#f0a22483] flex items-center justify-center z-10 transition transform hover:scale-105 active:scale-95 duration-200"
        >
          上一題
        </button>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={questionIndex}
          initial={{ x: direction > 0 ? 200 : -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? -200 : 200, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center justify-start text-center w-full h-full px-4 pt-12 gap-2 relative"
        >
          <div className="text-lg font-bold text-[#C44C18]">
            第 {questionIndex + 1} 題
          </div>
          <h2 className="text-xl font-bold text-[#562915] leading-snug">
            {currentQuestion.title}
          </h2>

          {/* 選項 */}
          <div className="flex flex-col gap-3 w-full max-w-[300px] mt-4">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => clickAnswer(option)}
                className="w-full h-[45px] bg-white/50 text-[#C44C18] font-lg font-semibold rounded-2xl border-3 border-[#C44C18] \
                flex justify-center items-center transition transform hover:scale-105 active:scale-95 duration-200"
              >
                {option.title}
              </button>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 w-full px-0">
            <img
              src={`/1.question/cat-q${questionIndex + 1}.png`}
              alt="測試圖"
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </MobileFrame>
  );
}
