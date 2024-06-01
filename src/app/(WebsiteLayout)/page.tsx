import Header from "@/app/components/Header";
import HeroCard from "@/app/components/heroCard";
import KaiTime from "@/app/components/kaiTime";
import Tokenomics from "@/app/components/Tokenomics";
import FaQs from "@/app/components/FAQs";
import Footer from "@/app/components/footer";

export default function Home() {


  return (
      <div className="overflow-hidden">
        <Header />
          <HeroCard />
          <KaiTime />
          <Tokenomics />
          <FaQs />
          <Footer />
      </div>
  );
}
