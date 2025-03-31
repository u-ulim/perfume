import { BestSeller } from "@/components/home/bestseller/BestSeller";
import MainSlider from "@/components/home/slide/MainSlider";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Brand } from "@/components/home/brand/Brand";
import { Review } from "@/components/home/review/Review";

export default function Home() {
  return (
    <div className="flex flex-col gap-[200px] mb-[200px]">
      <Header />
      <MainSlider />
      <BestSeller />
      <Review />
      <Footer />
    </div>
  );
}
