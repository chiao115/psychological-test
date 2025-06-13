import { create } from 'zustand';


const usePsyStore = create((set) => ({
  state: 0, // 0: start, 1: question, 2: displayResult, 3: result
  questionState: 0,
  totalQuestions: 7,
  score: {
    orange: 0,
    calico: 0,
    white: 0,
    black: 0,
    tabby: 0
  },
  updateState: (newState) => set(() => ({ state: newState })),
  updateQuestionState: (newState) => set(() => ({ questionState: newState })),
  updateTotalQuestions: (newState) => set(() => ({ totalQuestions: newState })),
  updateScore: (cat, value) =>
    set((state) => ({
      score: {
        ...state.score,
        [cat]: state.score[cat] + value,
      },
    })),
  resetAll: () =>
    set({
      state: 0,
      questionState: 0,
      score: {
        orange: 0,
        calico: 0,
        white: 0,
        black: 0,
        tabby: 0
      },
    }),
}));

// 題庫
const useQuestionStore = create(() => ({
  questions: {
    "1": {
      title: "最近的生活步調是怎麼樣的？",
      options: [
        { title: "有點懶懶的，很常窩在家耍廢", cat: "orange", value: 3 },
        { title: "每天都差不多，沒什麼變化", cat: "white", value: 4 },
        { title: "到處跑來跑去，不太會待著家裡", cat: "tabby", value: 4 },
        { title: "自己待著最自在，社交掰掰", cat: "black", value: 3 }
      ]
    },
    "2": {
      title: "你對朋友的態度如何呢？",
      options: [
        { title: "喜歡有人陪，不喜歡自己一個人", cat: "orange", value: 3 },
        { title: "什麼都想分享，不講會憋壞", cat: "calico", value: 4 },
        { title: "熟了才會靠近，不熟我懶得開口", cat: "white", value: 3 },
        { title: "偶爾聚聚可以，但還是喜歡一個人", cat: "black", value: 4 }
      ]
    },
    "3": {
      title: "面對壓力，你的反應是？",
      options: [
        { title: "先吃點東西睡個覺再說", cat: "orange", value: 4 },
        { title: "直接開噴＋限動抱怨", cat: "calico", value: 3 },
        { title: "先消化一下，腦袋轉一轉", cat: "black", value: 4 },
        { title: "不多想，先把事情做完再說", cat: "tabby", value: 3 }
      ]
    },
    "4": {
      title: "你喜歡的生活風格是？",
      options: [
        { title: "舒服就好，不一定要完美", cat: "orange", value: 3 },
        { title: "喜歡家裡有聲音，有人在就安心", cat: "calico", value: 4 },
        { title: "東西要乾淨整齊，看到雜亂會很躁", cat: "white", value: 4 },
        { title: "有點特別、有點隨性才好玩", cat: "tabby", value: 3 }
      ]
    },
    "5": {
      title: "別人常說你是怎樣的人？",
      options: [
        { title: "感覺很親切，很好相處", cat: "orange", value: 3 },
        { title: "很有個性，但不會讓人不舒服", cat: "calico", value: 4 },
        { title: "不太說話，不過觀察力很強", cat: "black", value: 3 },
        { title: "看起來冷冷的，其實只是慢熟", cat: "white", value: 4 }
      ]
    },
    "6": {
      title: "你嚮往的生活方式是？",
      options: [
        { title: "隨性耍廢＋零壓力才是王道", cat: "orange", value: 4 },
        { title: "今天這邊、明天那邊，走到哪算哪", cat: "tabby", value: 4 },
        { title: "照著計劃走會比較安心", cat: "white", value: 3 },
        { title: "可以自由決定一切，不用配合誰", cat: "black", value: 3 }
      ]
    },
    "7": {
      title: "你最欣賞什麼樣的人？",
      options: [
        { title: "很會照顧人，讓人覺得安心", cat: "calico", value: 3 },
        { title: "行動派，想做什麼就衝", cat: "tabby", value: 4 },
        { title: "安靜不多話，但超級有想法", cat: "black", value: 4 },
        { title: "做事穩穩的，情緒也不會爆炸", cat: "white", value: 3 }
      ]
    }
  }
}));

export { usePsyStore, useQuestionStore };
