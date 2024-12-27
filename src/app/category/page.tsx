import BackgroundWrapper from "@/app/components/BackgroundWrapper";
import CategorySelector from "@/app/components/CategorySelector";
import MouseFollow from "@/app/components/MouseFollow";

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
    </BackgroundWrapper>
  );
};

export default CategoryPage;
