import { SearchBar } from "@/components/SearchBar";
import { AlternateVerticalNavigation } from "@/components/MainContainer";

export default function Home() {
  return (
    <div className="my-12 mx-4 md:mx-8 lg:mx-16 xl:mx-24">
      <SearchBar />
      <div className="shadow-lg">
        <AlternateVerticalNavigation />
      </div>
    </div>
  );
}
