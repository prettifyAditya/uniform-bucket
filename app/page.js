import HomeBanner from "@/components/HomeBanner";
import "../styles/home/home.css"
import CategorySlider from "@/components/CategorySlider";
import ClientSlider from "@/components/ClientSlider";
export default function Home() {
  return (
    <main>
     <HomeBanner />
     <CategorySlider />
     <ClientSlider />
     <div className="home-secA sec-pad">
        <div className="container">
            <div className="heading">
                <h2>Shop By Profession</h2>
            </div>
            <div className="profession_grid grid">
              <div className="item-md profession_col">
                
              </div>
            </div>
        </div>
     </div>
    </main>
  );
}
