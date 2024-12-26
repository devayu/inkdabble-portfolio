import CategorySelector from "@/app/components/CategorySelector";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="relative h-screen w-full">
        <Image
          src="/hero.jpg"
          fill
          alt="hero-inkdabble"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="w-full h-screen">
        <CategorySelector
          images={[
            {
              name: "fashion",
              imgPath: "/fashion-category.jpg",
              subtitle: "Fashion portfolio",
            },
            {
              name: "design",
              imgPath: "/design-category.jpg",
              subtitle: "Design portfolio",
            },
          ]}
        />
      </div>
    </main>
  );
}
