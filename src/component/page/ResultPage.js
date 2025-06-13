'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import { usePsyStore } from '@/app/store/store';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useQuestionStore } from '@/app/store/store'; 


export default function ResultPage() {
  const psy = usePsyStore((state) => state);
  const playAgain = () => window.location.reload();
  const score = psy.score;
  const questions = useQuestionStore().questions;

  const catAppearCount = {};
  Object.values(questions).forEach((q) => {
    q.options.forEach(({ cat }) => {
      catAppearCount[cat] = (catAppearCount[cat] || 0) + 1;
    });
  });

  const normalizedScore = Object.entries(score).map(([cat, val]) => {
    const count = catAppearCount[cat] || 1; 
    return [cat, val / count];
  });
  
  const topCat = normalizedScore.reduce((a, b) => (a[1] > b[1] ? a : b))[0];
  

  const catDescriptions = {
    orange: {
      name: '橘貓',
      desc: '你是貪吃慵懶、親人黏人的橘貓系人格。總是一副沒睡飽的樣子，卻在喜歡的人面前撒嬌得不得了。你對生活有自己的一套步調，不追求效率，只在意舒適和幸福感。雖然常被說「廢」，但你知道真正懂得生活的人，是會為自己保留空白與鬆弛的。\n你對朋友很真誠，對戀人極度依賴，喜歡穩定而黏膩的關係。可能會不小心變成愛撒嬌的大寶寶，也期待被照顧與包容。',
      song: {
        title: 'Lover',
        artist: 'Taylor Swift',
        url: 'https://youtu.be/maKKagaClQk?si=S_E8RcIA5xY41Avz'
      },
      motto: '活著好累，先吃飽再說。'
    },
    calico: {
      name: '三花貓',
      desc: '你情緒多變又充滿魅力，是熱情外放的三花系人格。有點瘋但很好玩，是社交場合的驚喜製造機。你像萬花筒一樣，時而爆笑、時而迷人，和你相處總是閃閃發光又充滿混亂的快樂。\n你喜歡熱鬧，總能在團體中成為氣氛中心，對戀愛的態度也偏向直覺與衝動派。你愛得快、感受強烈，喜歡充滿刺激的感情互動，不怕曬恩愛，也不介意主動追愛。',
      song: {
        title: 'BOOMBAYAH',
        artist: 'BLACKPINK',
        url: 'https://youtu.be/9DwTR67aOo8?si=3z7SudDtS2loqiO-'
      },
      motto: '誰說任性不是一種品味'
    },
    white: {
      name: '白貓',
      desc: '你安靜敏感、觀察入微，不喜歡太喧囂的環境，更傾向獨處與內在消化情緒。也許話不多，但總能在關鍵時刻給出細膩的陪伴。你內心豐富，感知力強，選擇用柔軟的方式與世界相處。\n在戀愛中，你慢熟且謹慎，必須感到安心才會打開心房。你不喜歡表面的甜言蜜語，更在乎默契與理解。你像一塊需要時間發現的寶石，越了解你，就越容易被你吸引。',
      song: {
        title: 'Let Her Go',
        artist: 'Passenger',
        url: 'https://youtu.be/JsJFj_cTR58?si=v_-DMuRkFgkPBouK'
      },
      motto: '我習慣沉默，但每句話都有重量。'
    },
    black: {
      name: '黑貓',
      desc: '你是獨立神祕的黑貓系人格，不喜張揚但有自己的一套風格。你對外界不輕易敞開，但內心其實熱情如火。你有界線、也有原則，選擇不說太多，是因為你更習慣用行動證明一切。\n你的戀愛觀務實又堅定，不輕易投入，但一旦認定就會死心塌地。你討厭曖昧與試探，喜歡有距離感但深刻的關係。',
      song: {
        title: 'Kill This Love',
        artist: 'BLACKPINK',
        url: 'https://youtu.be/klVhtSR97YI?si=XwPlxEoO3f0NUbAk'
      },
      motto: '我走自己的路，也照自己的光。'
    },
    tabby: {
      name: '暹羅貓',
      desc: '你充滿探索精神，是有點酷有點怪的暹羅貓系人格。你對世界充滿好奇心，也經常做出讓人驚訝的選擇。你擁有強烈的風格意識與行動力，討厭一成不變，總在尋找不同的可能。\n在戀愛中，你喜歡有趣的靈魂，討厭被管束或過度依賴。你欣賞有主見的人，也願意陪對方一起冒險。',
      song: {
        title: 'Dynamite',
        artist: 'BTS',
        url: 'https://youtu.be/UkFURZ7SP1I?si=maMj2ruu_vP4eibT'
      },
      motto: '規則就是拿來跳過的！'
    }
  };
  

  const { name, desc, song, motto } = catDescriptions[topCat];

  return (
    <MobileFrame innerBg="/0.start/inBgAll.png">
      <div className="relative w-full max-w-sm mx-auto pt-20 pb-12 px-6 text-[#562915]">
        <div className="relative h-[150px] flex items-end justify-between">
          {/* 左側文字 */}
          <div className="flex flex-col justify-center -translate-y-4 text-left leading-tight max-w-[60%]">
            <div className="text-lg font-medium mb-2 px-1">你是…</div>
            <div className="text-4xl font-extrabold">{name}</div>
          </div>

          {/* 右側貓咪圖 */}
          <div className="absolute bottom-0 right-0">
            <Image
              src={`/3.result/cat/${topCat}.png`}
              alt={`${name}圖像`}
              width={150}
              height={150}
              className="drop-shadow-md"
            />
          </div>
        </div>

        {/* 個性描述 */}
        <div style={{ borderRadius: '30px 6px 30px 6px' }}
        className="bg-[#FFCC66] border-[5px] border-[#F0A224] px-5 py-4 mb-3 text-[#562915] text-sm font-medium leading-relaxed whitespace-pre-line">
          {desc}
        </div>

        <div
          style={{ borderRadius: '6px 30px 6px 30px' }}
          className="bg-[#FFCC66] border-[5px] border-[#F0A224] px-5 py-3 mb-3 "
        >
          <div className="text-sm font-semibold mb-1 text-left text-white">最符合你的喵界真言：</div>
          <div className="text-lg font-bold text-center text-[#562915]">{motto}</div>
        </div>

        <div
          style={{ borderRadius: '6px 30px 6px 30px' }}
          className="bg-[#FFCC66] border-[5px] border-[#F0A224] px-5 py-3 mb-3"
        >
          <div className="text-sm font-semibold mb-1 text-left text-white">推薦你一首喵喵的歌(點擊有驚喜）：</div>
          <a
            href={song.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-lg font-bold text-center text-[#562915] underline hover:text-orange-800 transition-colors"
          >
            {song.title} — {song.artist}
          </a>
        </div>


        {/* 按鈕列 */}
        <div className="flex justify-between gap-4">
          <button
            onClick={playAgain}
            className="h-[50px] flex-1 bg-[#FFCC66] border-5 border-[#F0A224] py-2 rounded-xl font-semibold text-[#562915] hover:brightness-110 active:scale-90 transition"
          >
            再玩一次
          </button>
        </div>
      </div>
    </MobileFrame>
  );
}