import { BestSeller } from "@/components/home/bestseller/BestSeller";
import MainSlider from "@/components/home/slide/MainSlider";

import { logout } from "./logout/actions";

export default function Home() {
  return (
    <div className="flex flex-col gap-[200px] mb-[200px]">
      <MainSlider />
      <form action={logout}>
        <button type="submit">logout</button>
      </form>
      <BestSeller />
    </div>
  );
}
