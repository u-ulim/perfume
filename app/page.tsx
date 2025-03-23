import { BestSeller } from "@/components/home/bestseller/BestSeller";
import MainSlider from "@/components/home/slide/MainSlider";

export default function Home() {
  return (
    <div className="flex flex-col gap-[200px] mb-[200px]">
      <MainSlider />
      <BestSeller />
    </div>
  );
}
