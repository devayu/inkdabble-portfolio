import AboutSection from "@/app/components/AboutSection";
import BackgroundWrapper from "@/app/components/BackgroundWrapper";
import CategorySelector from "@/app/components/CategorySelector";
import HeroComponent from "@/app/components/HeroComponent";

export default function Home() {
  return (
    <BackgroundWrapper>
      <HeroComponent />
      <div className="h-screen">
        <CategorySelector
          images={[
            {
              name: "fashion",
              imgPath: "/fashion-category.jpg",
              subtitle: "Fashion portfolio",
              path: "fashion",
            },
            {
              name: "graphic",
              imgPath: "/design-category.jpg",
              subtitle: "Graphic portfolio",
              path: "graphic",
            },
          ]}
        ></CategorySelector>
      </div>
      <AboutSection />
    </BackgroundWrapper>
  );
}
