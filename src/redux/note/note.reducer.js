import NoteTypes from './note.types'
import { updateNote, createNote } from './note.utils'

const INITIAL_STATE = {
  viewMode: 'card',
  notes: [
    {
      id: '123',
      title:
        '一周大事：新北市警察局領先全臺獲ISO 27701證書。 Chrome 80將預設無法跨站存取Cookie',
      content:
        '今年8月新的隱私保護與個資管理ISO 27701標準出爐，新北市警察局導入這項最新標準，期望讓偵辦各項刑事案件的作業過程，能落實個資與隱私保護，避免民眾個資外洩情事。明年2月發布的Chrome 80，嚴格規定Cookie需要使用SameSite=None設定以及HTTPS連接，才能被外部服務存取，由於這項改變將影響不少網站運作，Google建議開發者儘早開始測試',
      date: '2019/11/02',
      tags: ['新聞', '娛樂'],
      files: ['2x.text']
    },
    {
      id: '456',
      title: 'DeepMind以多重代理增強學習策略，讓AI在星海爭霸 2天梯爬上大師等級',
      content:
        '在7月的時候，DeepMind宣布其《星海爭霸 2》（StarCraft II）人工智慧AlphaStar將上天梯與玩家對戰，而現在DeepMind公布最新的結果，AlphaStar的排名在天梯活躍玩家99.8％之上，而且人類、神族和蟲族三大種族都達到大師（Grandmaster）等級。自我對戰（Self-play）和學習系統是不少遊戲人工智慧系統的強化策略，像是圍棋與象棋的人工智慧AlphaGo和AlphaZero，還有遊戲《Dota 2》的人工智慧OpenAI Five，都以自我對戰方法達到一定程度的水準。但是DeepMind表示，自我對戰存在明顯的缺點，一個與自己競爭的人工智慧代理會不停的進步，但也可能會忘記與先前自己對戰的能力，而形成無盡的迴圈，導致結果無法收斂或是無法達到真正的進步，就以剪刀石頭布的遊戲為例，一開始代理可能喜歡使用石頭，隨著自我對戰，代理可能會轉為使用剪刀，但是後來又發現使用布可以提升勝率，而進入一個循環。',
      date: '2019/11/11',
      tags: ['體育', '娛樂'],
      files: []
    },
    {
      id: '789',
      title: '微軟：Windows開機變慢可能是持續性記憶體惹的禍',
      content:
        '微軟本周坦承，倘若Windows客戶端或伺服器端在配置系統時，使用持續記憶體（Persistent Memory，PMem）等大量的記憶體，那麼便可能需要更長的開機時間，不過，微軟將在未來的Windows版本進行最佳化，以改善其開機路徑      根據微軟的說明，持續性記憶體為一新型的記憶體技術，就算是經歷電源重啟程序仍能保留其內容，不管是使用者將系統重新開機，或者是遭遇電源突然中斷或系統當機等意外事件。另一方面，安裝在記憶體匯流排上的PMem，還能有接近DRAM的存取速度，因此也被稱為儲存級記憶體。     微軟表示，當使用者將Windows電腦配置成使用大量的記憶體，包括持續性記憶體在內，電腦的開機速度可能比平常來得久，此外，開機後因應用程式持續且快速釋放及重新分配大量的記憶體，也會造成CPU的使用率急速增加。',
      date: '2019/11/11',
      tags: ['新聞', '八卦'],
      files: []
    }
  ],
  selectedNote: {
    id: '123',
    title:
      '一周大事：新北市警察局領先全臺獲ISO 27701證書。 Chrome 80將預設無法跨站存取Cookie',
    content:
      '今年8月新的隱私保護與個資管理ISO 27701標準出爐，新北市警察局導入這項最新標準，期望讓偵辦各項刑事案件的作業過程，能落實個資與隱私保護，避免民眾個資外洩情事。明年2月發布的Chrome 80，嚴格規定Cookie需要使用SameSite=None設定以及HTTPS連接，才能被外部服務存取，由於這項改變將影響不少網站運作，Google建議開發者儘早開始測試',
    date: '2019/11/02',
    tags: ['新聞', '娛樂'],
    files: ['2x.text', '2x.text', '2x.text']
  }
}

const noteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NoteTypes.CHANGE_VIEW_MODE:
      return {
        ...state,
        viewMode: action.payload
      }
    case NoteTypes.SELECT_NOTE:
      return {
        ...state,
        selectedNote: state.notes.find(note => note.id === action.payload.id)
      }
    case NoteTypes.UPDATE_NOTE:
      return {
        ...state,
        notes: updateNote(state.notes, action.payload)
      }
    case NoteTypes.CREATE_NOTE:
      return {
        ...state,
        notes: createNote(state.notes)
      }
    default:
      return state
  }
}

export default noteReducer
