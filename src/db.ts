export interface IAuthor {
  /** 작가 id */
  id: number;
  /** 작가 이름 */
  name: string;
}

export interface IBook {
  /** 책 id */
  id: number;
  /** 작가 id */
  authorId: number;
  /** 제목 */
  title: string;
  /** 챕터 목록 */
  chapters: string[];
  /** 등장인물 목록 */
  characters: string[];
}

export const authors: IAuthor[] = [
  {
    id: 1,
    name: "정세랑"
  },
  {
    id: 2,
    name: "김영하"
  }
];

export const books: IBook[] = [
  {
    id: 100,
    authorId: 1,
    title: "시선으로부터",
    chapters: ["시선으로부터", "작가의 말"],
    characters: [
      "명혜",
      "태호",
      "화수",
      "상헌",
      "지수",
      "명은",
      "명준",
      "난정",
      "우윤",
      "경아",
      "규림",
      "해림"
    ]
  },
  {
    id: 101,
    authorId: 1,
    title: "보건교사 안은영",
    chapters: [
      "사랑해 젤리피시",
      "토요일의 데이트메이트",
      "럭키, 혼란",
      "원어민 교사 메켄지",
      "오리 선생 한아름",
      "레이디버그 레이디",
      "가로등 아래 김강선",
      "전학생 옴",
      "온건 교사 박대흥",
      "돌풍 속에 우리 둘이 안고 있었지",
      "작가의 말"
    ],
    characters: [
      "안은영",
      "홍인표",
      "성혜현",
      "조승권",
      "박민우",
      "구지형",
      "메켄지",
      "한아름"
    ]
  },
  {
    id: 102,
    authorId: 2,
    title: "작별인사",
    chapters: [
      "직박구리를 _묻어주던 _날",
      "당신은 _우리와 _함께 _가야 _합니다",
      "바깥이 _있었다",
      "사람으로 _산다는 _것",
      "사용감",
      "실패한 _쇼핑의 _증거",
      "탈출",
      "꿈에서 _본 _풍경",
      "겨울 _호수와 _물수리",
      "달마",
      "재판",
      "끝이 _오면 _알 _수 _있어",
      "몸속의 _스위치",
      "기계의 _시간",
      "고양이가 _되다",
      "순수한 _의식",
      "아빠의 _마음에 _찾아온 _평화",
      "신선",
      "마지막 _인간",
      "작가의 말"
    ],
    characters: ["철이", "최진수 박사", "민이", "선이"]
  },
  {
    id: 103,
    authorId: 2,
    title: "살인자의 기억법",
    chapters: ["살인자의 기억법", "작가의 말"],
    characters: ["나(김병수)", "은희", "박주태"]
  }
];
