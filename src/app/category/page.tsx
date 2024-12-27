import AboutSection from "@/app/components/AboutSection";
import BackgroundWrapper from "@/app/components/BackgroundWrapper";
import CategorySelector from "@/app/components/CategorySelector";

const CategoryPage = () => {
  return (
    <BackgroundWrapper>
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
      <AboutSection />
    </BackgroundWrapper>
  );
};

export default CategoryPage;
