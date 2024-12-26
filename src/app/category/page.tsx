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
            name: "design",
            imgPath: "/design-category.jpg",
            subtitle: "Design portfolio",
            path: "design",
          },
        ]}
      ></CategorySelector>
    </BackgroundWrapper>
  );
};

export default CategoryPage;
