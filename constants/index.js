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
  },
  {
    category: "시트러스",
    id: 2,
    brand: "사랑해요",
    title: "#71 시리즈 에이 오 드 퍼퓸",
    price: "168,000",
    img: `${weekendImg02.src}`,
    reviewStar: "4.5",
    reviews: "2",
    sale: 0,
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
        reviews: "1",
      },
    ],
    sale: 30,
  },
  {
    category: "플로럴",
    id: 4,
    brand: "스테파니 브루진",
    title: "프로메눙 르 당 레 브와 오 드 퍼퓸",
    price: "250,000",
    img: `${weekendImg03.src}`,
    sale: 30,
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
        reviews: "1",
      },
    ],
    sale: 30,
  },
  {
    category: "우디",
    id: 6,
    brand: "스테파니 브루진",
    title: "델리스 오 드 퍼퓸",
    price: "250,000",
    img: `${weekendImg06.src}`,
    sale: 30,
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
        reviews: "1",
      },
    ],
    sale: 0,
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
  },
];
