'use client';

import MobileFrame from '@/component/layout/MobileFrame';

export default function DisplayResultPage({ nextStep }) {
  return (
    <MobileFrame innerBg="/0.start/inBgAll.png">
      <div className="flex flex-col items-center justify-center text-center gap-6 px-6">
        <div className="text-lg font-bold text-[#562915]">
          結算中... 你的貓系人格正在生成！
        </div>

        <button
          onClick={nextStep}
          className="w-[140px] h-[70px] bg-[#FCA6AF] text-white border-6 border-[#562915] rounded-4xl text-lg 
            md:text-xl font-bold hover:scale-105 transition-transform"
        >
          查看結果
        </button>
      </div>
    </MobileFrame>
  );
}
