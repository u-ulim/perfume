import { BestSeller } from "@/components/home/bestseller/BestSeller";
import MainSlider from "@/components/home/slide/MainSlider";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Review } from "@/components/home/review/Review";
import { Outro } from "@/components/home/outro/Outro";

export default function Home() {
  return (
    <div className="flex flex-col gap-[200px] mb-[200px]">
      <Header />
      <MainSlider />
      <BestSeller />
      <Review />
      <Outro />
      <Footer />
    </div>
  );
}
