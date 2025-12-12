import Herosection from "@/components/Herosection";
import CardSection from "../components/cardSection"
import WhychoseUS from "@/components/WhychoseUS";
import MovingCrads from "@/components/MovingCrads"
import Webinar from "@/components/Webinar";
import Tooltips from "@/components/Tooltips";
import Footer from "@/components/Footer"





export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      
      <Herosection/>
      <CardSection/>
      <WhychoseUS/>
      <MovingCrads/>
      <Webinar/>
      <Tooltips/>
      <Footer/>
      
   </main>
  );
}
