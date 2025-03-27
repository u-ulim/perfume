import { BestSeller } from "@/components/home/bestseller/BestSeller";
import MainSlider from "@/components/home/slide/MainSlider";

import { logout } from "./logout/actions";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Brand } from "@/components/home/brand/Brand";

export default function Home() {
  return (
    <div className="flex flex-col gap-[200px] mb-[200px]">
      <Header />
      <MainSlider />
      <form action={logout}>
        <button type="submit">logout</button>
      </form>
      <BestSeller />
      <Brand />
      <Footer />
    </div>
  );
}
