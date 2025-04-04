// 네비게이션 메뉴
export const navMenus = [
  {
    title: "Product",
    subItems: ["전체메뉴", "여성용", "남성용"],
  },
  {
    title: "Info",
    subItems: ["Notice", "Review"],
  },
  {
    title: "Brand",
    subItems: ["Brand"],
  },
];

// 메인 슬라이드
import mainImg01 from "@/src/assets/home/slideSection/slide01.jpg";
import mainImg02 from "@/src/assets/home/slideSection/slide02.jpg";
import mainImg03 from "@/src/assets/home/slideSection/slide03.jpg";
export const mainSlides = [
  {
    type: "image",
    id: 1,
    src: `${mainImg01.src}`,
    text: "Welcome to NoMorePizza",
  },
  {
    type: "image",
    id: 2,
    src: `${mainImg02.src}`,
    text: "Best Place for No Pizza",
  },
  {
    type: "image",
    id: 3,
    src: `${mainImg03.src}`,
    text: "Enjoy Something Different",
  },
];

// BestSellers Section
import bestSellerImg01 from "@/src/assets/home/bestSellerSection/bestSeller01.jpg";
import bestSellerImg02 from "@/src/assets/home/bestSellerSection/bestSeller02.jpg";
import bestSellerImg03 from "@/src/assets/home/bestSellerSection/bestSeller03.jpg";
export const bestSellers = [
  {
    title: "향수 프로그램 맞춤 스킨케어 세트",
    price: "44,900",
    img: `${bestSellerImg01.src}`,
    src: "#",
    discount: "10",
  },
  {
    title: "스킨핏프로그램 단품-펌프형",
    price: "44,900",
    img: `${bestSellerImg02.src}`,
    src: "#",
    discount: "20",
  },
  {
    title: "스킨핏프로그램 단품-파우치형",
    price: "44,900",
    img: `${bestSellerImg03.src}`,
    src: "#",
    discount: "15",
  },
];

// Review Section
import reviewImg01 from "@/src/assets/review/굿걸 곤 배드 오 드 퍼퓸 리뷰_files.jpg";
import reviewImg02 from "@/src/assets/review/라 튤립 오 드 퍼퓸 리뷰_files.jpg";
import reviewImg03 from "@/src/assets/review/리스 41 오 드 퍼퓸 리뷰_files.jpg";
import reviewImg04 from "@/src/assets/review/베이 19 오 드 퍼퓸 리뷰_files.jpg";
import reviewImg05 from "@/src/assets/review/불레이 부쿠셔 아베끄 모아 오 드 퍼퓸 리뷰_files.jpg";
import reviewImg06 from "@/src/assets/review/실버 마운틴 워터 오 드 퍼퓸 리뷰_files.jpg";
import reviewImg07 from "@/src/assets/review/어나더 13 오 드 퍼퓸 리뷰_files.jpg";
import reviewImg08 from "@/src/assets/review/코코 마드모아젤 오 드 퍼퓸 엥땅스 리뷰_files.jpg";
import reviewImg09 from "@/src/assets/review/피코 디 아말피 오 드 뚜왈렛 리뷰_files.jpg";
export const reviews = [
  {
    title: "굿걸 곤 베드 오 드 퍼퓸",
    rating: "5",
    img: `${reviewImg01.src}`,
    src: "#",
    user: "김*연",
    desc: "이번달에만 벌써 3번째입니다. 아니 여기서 싸는 게 훨씬 더 저렴한데 도대체 어디서들 사시는거죠? 다들 여기서 사세요!!",
    date: "25.04.03",
  },
  {
    title: "라 튤립 오 드 퍼퓸",
    rating: "5",
    img: `${reviewImg02.src}`,
    src: "#",
    user: "박*수",
    desc: "향이 오래 지속되고 깔끔합니다. 가격 대비 만족도가 높아 추천합니다.",
    date: "25.03.15",
  },
  {
    title: "리스 41 오 드 퍼퓸",
    rating: "5",
    img: `${reviewImg03.src}`,
    src: "#",
    user: "최*현",
    desc: "특유의 은은한 향이 매력적입니다. 매번 사용할 때마다 기분이 좋아집니다.",
    date: "25.02.28",
  },
  {
    title: "베이 19 오 드 퍼퓸",
    rating: "5",
    img: `${reviewImg04.src}`,
    src: "#",
    user: "정*은",
    desc: "디자인도 예쁘고, 향도 부담스럽지 않아서 좋습니다. 데일리로 사용하기 좋아요.",
    date: "25.04.01",
  },
  {
    title: "불레이 부쿠셔 아베끄 모아 오 드 퍼퓸",
    rating: "5",
    img: `${reviewImg05.src}`,
    src: "#",
    user: "한*진",
    desc: "어디에서도 쉽게 찾기 힘든 독특한 향. 특별한 날에 사용하기 좋습니다.",
    date: "25.03.22",
  },
  {
    title: "실버 마운틴 워터 오 드 퍼퓸",
    rating: "5",
    img: `${reviewImg06.src}`,
    src: "#",
    user: "오*림",
    desc: "깔끔하고 청량한 느낌이 일품입니다. 오랜 시간 지속되는 향이 마음에 들어요.",
    date: "25.03.10",
  },
  {
    title: "어나더 13 오 드 퍼퓸",
    rating: "5",
    img: `${reviewImg07.src}`,
    src: "#",
    user: "강*민",
    desc: "이 향수 하나만 있어도 충분합니다. 깊이 있는 향이 매력적이에요.",
    date: "25.02.05",
  },
  {
    title: "코코 마드모아젤 오 드 퍼퓸 엥땅스",
    rating: "5",
    img: `${reviewImg08.src}`,
    src: "#",
    user: "이*서",
    desc: "세련된 디자인과 함께 감각적인 향을 느낄 수 있습니다. 부담없이 즐기기 좋아요.",
    date: "25.04.05",
  },
  {
    title: "피코 디 아말피 오 드 뚜왈렛",
    rating: "5",
    img: `${reviewImg09.src}`,
    src: "#",
    user: "홍*길",
    desc: "기대했던 만큼의 향이 나지 않아 약간 아쉬웠습니다. 그래도 가격은 만족스럽습니다.",
    date: "25.01.20",
  },
];

// Brand Section
export const Brands = [
  { id: 1, name: "Brand A", image: "/path/to/image1.png" },
  { id: 2, name: "Brand B", image: "/path/to/image2.png" },
  { id: 3, name: "Brand C", image: "/path/to/image3.png" },
];

// Outro Section
import outroImg01 from "@/src/assets/outro/outro01.jpg";
import outroImg02 from "@/src/assets/outro/outro02.jpg";
import outroImg03 from "@/src/assets/outro/outro03.jpg";
import outroImg04 from "@/src/assets/outro/outro04.jpg";
export const outros = [
  {
    id: 1,
    miniTitle: "짧은 봄 200% 누리는 방법",
    title: "이제 봄옷 꺼낼 때 이 향수도 챙겨주세요",
    img: `${outroImg01.src}`,
  },
  {
    id: 2,
    miniTitle: "센스 만점 애인은 꼭 볼 것",
    title: "애인에게 공유해볼까요? 선물 받고 싶은 향수",
    img: `${outroImg02.src}`,
  },
  {
    id: 3,
    miniTitle: "직원들의 추억 소환 시작할게요",
    title: "달콤한 사랑의 추억이 녹아 있는 향수",
    img: `${outroImg03.src}`,
  },
  {
    id: 4,
    miniTitle: "친구랑 안 겹치는 향수!",
    title: "새내기의 봄을 위한 10만 원 이하 향수",
    img: `${outroImg04.src}`,
  },
];

import weekendImg01 from "@/src/assets/home/weekendSection/weekendImg01.jpg";
import weekendImg02 from "@/src/assets/home/weekendSection/weekendImg02.jpg";
import weekendImg03 from "@/src/assets/home/weekendSection/weekendImg03.jpg";
import weekendImg04 from "@/src/assets/home/weekendSection/weekendImg04.jpg";
import weekendImg05 from "@/src/assets/home/weekendSection/weekendImg05.jpg";
import weekendImg06 from "@/src/assets/home/weekendSection/weekendImg06.jpg";
import weekendImg07 from "@/src/assets/home/weekendSection/weekendImg07.jpg";
import weekendImg08 from "@/src/assets/home/weekendSection/weekendImg08.jpg";
export const weekends = [
  {
    category: "우디",
    id: 1,
    brand: "사랑해요",
    title: "#69 로드 트립 오 드 퍼퓸",
    price: "168,000",
    img: `${weekendImg01.src}`,
    sale: 0,
    review: [
      {
        reviewStar: "5",
        reviews: "2",
      },
    ],
    concentration: "오 드 퍼퓸",
    mainAccords: "우디 / 아로마틱 / 스파이시",
    mainNotes: {
      topNotes: "레몬, 로즈메리",
      middleNotes: "시더우드, 라벤더",
      baseNotes: "베티버, 머스크",
    },
    scentDescription:
      "로드 트립을 떠오르게 하는 활기찬 우디 향으로, 상쾌함과 깊이 있는 아로마틱 노트가 조화를 이룹니다.",
  },
  {
    category: "시트러스",
    id: 2,
    brand: "사랑해요",
    title: "#71 시리즈 에이 오 드 퍼퓸",
    price: "168,000",
    img: `${weekendImg02.src}`,
    reviewStar: "4.5",
    review: [
      {
        reviewStar: "5",
        reviews: "2",
      },
    ],
    sale: 0,
    concentration: "오 드 퍼퓸",
    mainAccords: "시트러스 / 그린 / 라이트",
    mainNotes: {
      topNotes: "베르가못, 라임",
      middleNotes: "그린티, 자몽",
      baseNotes: "화이트 머스크, 앰버",
    },
    scentDescription:
      "#71 시리즈 에이는 상큼한 시트러스 노트로 시작해 부드러운 그린티와 머스크가 자연스럽게 이어지며, 밝고 활기찬 분위기를 연출합니다.",
  },
  {
    category: "머스크",
    id: 3,
    brand: "스테파니 브루진",
    title: "로 드 세비뉴 오 드 코롱",
    price: "250,000",
    img: `${weekendImg03.src}`,
    review: [
      {
        reviewStar: "5",
        reviews: "2",
      },
    ],
    sale: 30,
    concentration: "오 드 코롱",
    mainAccords: "머스크 / 파우더리 / 소프트",
    mainNotes: {
      topNotes: "만다린, 베르가못",
      middleNotes: "화이트 플로럴, 이리스",
      baseNotes: "머스크, 샌달우드",
    },
    scentDescription:
      "부드러운 머스크 향과 산뜻한 시트러스가 어우러져 가볍고 우아하게 퍼지는 오 드 코롱으로, 편안함과 세련미를 동시에 선사합니다.",
  },
  {
    category: "플로럴",
    id: 4,
    brand: "스테파니 브루진",
    title: "프로메눙 르 당 레 브와 오 드 퍼퓸",
    price: "250,000",
    img: `${weekendImg03.src}`,
    sale: 30,
    concentration: "오 드 퍼퓸",
    mainAccords: "플로럴 / 그린 / 프레시",
    mainNotes: {
      topNotes: "갈바눔, 피치",
      middleNotes: "자스민, 튜베로즈",
      baseNotes: "화이트 머스크, 시더",
    },
    scentDescription:
      "신선한 그린 노트 위에 피어나는 풍성한 플로럴 부케가 부드럽게 퍼지며, 우아하면서도 생기 넘치는 인상을 줍니다.",
  },
  {
    category: "스위트",
    id: 5,
    brand: "스테파니 브루진",
    title: "채시미어 오 드 퍼퓸",
    price: "250,000",
    img: `${weekendImg05.src}`,
    review: [
      {
        reviewStar: "5",
        reviews: "4",
      },
    ],
    sale: 30,
    concentration: "오 드 퍼퓸",
    mainAccords: "스위트 / 파우더리 / 웜",
    mainNotes: {
      topNotes: "배, 복숭아",
      middleNotes: "바닐라 오키드, 헤리어트",
      baseNotes: "캐시미어 우드, 앰버, 머스크",
    },
    scentDescription:
      "부드럽고 따뜻한 캐시미어 우드와 달콤한 과일 향이 어우러져 포근하면서도 고급스러운 스위트 무드를 완성합니다.",
  },
  {
    category: "우디",
    id: 6,
    brand: "스테파니 브루진",
    title: "델리스 오 드 퍼퓸",
    price: "250,000",
    img: `${weekendImg06.src}`,
    sale: 30,
    concentration: "오 드 퍼퓸",
    mainAccords: "우디 / 오리엔탈 / 스파이시",
    mainNotes: {
      topNotes: "카다멈, 핑크 페퍼",
      middleNotes: "시더우드, 제라늄",
      baseNotes: "파출리, 앰버",
    },
    scentDescription:
      "오리엔탈 무드의 스파이시 노트가 우디 베이스와 어우러져, 깊이 있고 고급스러운 잔향을 선사하는 퍼퓸입니다.",
  },
  {
    category: "우디",
    id: 7,
    brand: "사랑해요",
    title: "#70 베스팅 데이 오 드 퍼퓸",
    price: "168,000",
    img: `${weekendImg07.src}`,
    review: [
      {
        reviewStar: "5",
        reviews: "2",
      },
    ],
    sale: 0,
    concentration: "오 드 퍼퓸",
    mainAccords: "우디 / 프레시 / 마린",
    mainNotes: {
      topNotes: "레몬, 민트",
      middleNotes: "파인, 자스민",
      baseNotes: "오크모스, 앰버",
    },
    scentDescription:
      "시원하면서도 밝은 우디 계열 향으로, 숲속의 싱그러움과 바다 바람의 상쾌함을 동시에 느낄 수 있습니다.",
  },
  {
    category: "우디",
    id: 8,
    brand: "사랑해요",
    title: "#70 베스팅 데이 오 드 퍼퓸",
    price: "250,000",
    img: `${weekendImg08.src}`,
    review: [
      {
        reviewStar: "5",
        reviews: "1",
      },
    ],
    sale: 0,
    concentration: "오 드 퍼퓸",
    mainAccords: "우디 / 시트러스 / 그린",
    mainNotes: {
      topNotes: "베르가못, 파인애플",
      middleNotes: "갈바눔, 시더우드",
      baseNotes: "베티버, 화이트 머스크",
    },
    scentDescription:
      "싱그러운 과일의 달콤함과 깊은 우디 노트가 어우러져, 자연 속에 들어선 듯한 깨끗하고 상쾌한 향입니다.",
  },
  {
    category: "우디",
    id: 9,
    brand: "스테파니 브루진",
    title: "델리스 오 드 퍼퓸",
    price: "250,000",
    img: `${weekendImg06.src}`,
    sale: 30,
    concentration: "오 드 퍼퓸",
    mainAccords: "우디 / 스파이시 / 따뜻함",
    mainNotes: {
      topNotes: "바질, 핑크 페퍼",
      middleNotes: "시나몬, 라벤더",
      baseNotes: "샌달우드, 통카빈",
    },
    scentDescription:
      "은은한 허브와 스파이스가 조화를 이루어 깊고 따뜻한 우디 아로마를 선사하며, 기분 좋은 잔향이 오래 지속됩니다.",
  },
  {
    category: "우디",
    id: 10,
    brand: "사랑해요",
    title: "#70 베스팅 데이 오 드 퍼퓸",
    price: "168,000",
    img: `${weekendImg07.src}`,
    review: [
      {
        reviewStar: "5",
        reviews: "2",
      },
    ],
    sale: 0,
    concentration: "오 드 퍼퓸",
    mainAccords: "우디 / 플로럴 / 소프트",
    mainNotes: {
      topNotes: "오렌지 블로섬, 베르가못",
      middleNotes: "튜베로즈, 바이올렛",
      baseNotes: "캐시미어 우드, 앰버",
    },
    scentDescription:
      "부드러운 플로럴 노트와 따뜻한 우디 노트가 만나 로맨틱하면서도 차분한 무드를 만들어내는 향입니다.",
  },
  {
    category: "우디",
    id: 11,
    brand: "사랑해요",
    title: "#70 베스팅 데이 오 드 퍼퓸",
    price: "250,000",
    img: `${weekendImg08.src}`,
    review: [
      {
        reviewStar: "5",
        reviews: "1",
      },
    ],
    sale: 0,
    concentration: "오 드 퍼퓸",
    mainAccords: "우디 / 스모키 / 레더",
    mainNotes: {
      topNotes: "아가우드, 인센스",
      middleNotes: "가죽, 올리바넘",
      baseNotes: "샌달우드, 파출리",
    },
    scentDescription:
      "깊고 농후한 스모키 우디 베이스 위에 은은한 가죽 향이 감싸며, 고급스럽고 몽환적인 인상을 줍니다.",
  },
  {
    category: "머스크",
    id: 12,
    brand: "스테파니 브루진",
    title: "로 드 세비뉴 오 드 코롱",
    price: "250,000",
    img: `${weekendImg03.src}`,
    review: [
      {
        reviewStar: "5",
        reviews: "2",
      },
    ],
    sale: 30,
    concentration: "오 드 코롱",
    mainAccords: "머스크 / 시트러스 / 플로럴",
    mainNotes: {
      topNotes: "유자, 라임",
      middleNotes: "화이트 로즈, 피오니",
      baseNotes: "크린 머스크, 엠버",
    },
    scentDescription:
      "가벼운 시트러스의 활기찬 시작 후 부드러운 플로럴이 이어지고, 마지막에 깨끗한 머스크가 포근하게 마무리되는 코롱입니다.",
  },
  {
    category: "머스크",
    id: 13,
    brand: "스테파니 브루진",
    title: "로 드 세비뉴 오 드 코롱",
    price: "250,000",
    img: `${weekendImg03.src}`,
    review: [
      {
        reviewStar: "5",
        reviews: "2",
      },
    ],
    sale: 30,
    concentration: "오 드 코롱",
    mainAccords: "머스크 / 아쿠아틱 / 프레시",
    mainNotes: {
      topNotes: "만다린, 자몽",
      middleNotes: "워터 재스민, 로즈 페탈",
      baseNotes: "아쿠아 머스크, 오크모스",
    },
    scentDescription:
      "청량한 아쿠아틱 노트에 머스크가 감싸는 듯 부드럽게 퍼지며, 맑고 산뜻한 매력을 부각하는 오 드 코롱입니다.",
  },
  {
    category: "우디",
    id: 14,
    brand: "사랑해요",
    title: "#69 로드 트립 오 드 퍼퓸",
    price: "168,000",
    img: `${weekendImg01.src}`,
    sale: 0,
    review: [
      {
        reviewStar: "5",
        reviews: "2",
      },
    ],
    concentration: "오 드 퍼퓸",
    mainAccords: "우디 / 그린 / 허벌",
    mainNotes: {
      topNotes: "소나무, 그린 허브",
      middleNotes: "시더우드, 로즈마리",
      baseNotes: "베티버, 화이트 머스크",
    },
    scentDescription:
      "푸른 숲길을 걷는 듯한 싱그러움과 자연스러운 우디 노트가 만나, 자유로운 로드 트립의 이미지를 연상시키는 향입니다.",
  },
];
