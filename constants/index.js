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

// Brand Section
export const Brands = [
  { id: 1, name: "Brand A", image: "/path/to/image1.png" },
  { id: 2, name: "Brand B", image: "/path/to/image2.png" },
  { id: 3, name: "Brand C", image: "/path/to/image3.png" },
];
