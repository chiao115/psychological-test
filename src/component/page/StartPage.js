'use client';
import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';
import titleImg from '@/../public/0.start/StartTitle.png';
import StartBtn from '@/../public/0.start/StartBotton.png';

export default function StartPage({ nextStep }) {
  return (
    <MobileFrame innerBg="/0.start/inBgAll.png">
      <div className="flex flex-col items-center justify-center text-center px-4 md:px-6 gap-8 min-h-full">
        <div className="flex flex-col items-center">
          <Image
            src={titleImg}
            alt="今天也在當某種貓？"
            className="w-52 md:w-72 lg:w-80 h-auto animate-smooth-wiggle"
            priority
          />
          <p className="text-xs md:text-sm font-medium text-[#D13955] mt-1">
            這不是嚴肅的測驗，是一個很喵的遊戲！
          </p>
        </div>

        {/* 說明文字 */}
        <div className="text-[#562915] font-medium text-sm md:text-base leading-relaxed tracking-wide max-w-md md:max-w-lg">
          人可以裝，貓不會。<br />
          高興愛貼貼，不爽就離線<br />
          那隻住在你心裡的貓是什麼模樣的？<br />
          快來測測看你是哪種喵性格！<br />
        </div>

        <div className="mt-6">
          <button
            onClick={nextStep}
            className="w-[140px] h-[70px] bg-[#FCA6AF] text-white border-6 border-[#562915] rounded-4xl text-lg 
            md:text-xl font-bold hover:scale-105 transition-transform"
          >
            開始測驗
          </button>
        </div>



      </div>
    </MobileFrame>
  );
}
