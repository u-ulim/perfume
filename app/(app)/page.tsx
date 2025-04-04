import { BestSeller } from "@/components/home/bestseller/BestSeller";
import MainSlider from "@/components/home/slide/MainSlider";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Review } from "@/components/home/review/Review";
import { Outro } from "@/components/home/outro/Outro";
import { Weekend } from "@/components/home/weekend/Weekend";

export default function Home() {
  return (
    <div className="flex flex-col gap-[200px] mb-[200px]">
      <MainSlider />
      <Weekend />
      <BestSeller />
      <Review />
      <Outro />
    </div>
  );
}
