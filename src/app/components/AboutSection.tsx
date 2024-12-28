import CreativeFields from "@/app/components/CreativeFields";
import Education from "@/app/components/Education";
import Experiance from "@/app/components/Experiance";
import { BentoGrid, BentoGridItem } from "@/app/components/Grid";
import ProfileImage from "@/app/components/ProfileImage";
import Tools from "@/app/components/Tools";
import { CREATIVE_FIELDS, EDUCATIONS, EXPERIANCES } from "@/app/constants";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiCanva,
} from "react-icons/si";

const items = [
  {
    header: <ProfileImage />,
    body: (
      <div className="text-lg">
        Hello, and welcome to InkDabble. I’m Astha Maurya, a designer
        specializing in fashion and graphic design with one year of professional
        experience. I am passionate about creating impactful designs that
        inspire and tell compelling stories. My work reflects a commitment to
        innovation, attention to detail, and a drive to push creative
        boundaries. This portfolio highlights my journey, showcasing my skills,
        vision, and the projects that define my approach to design. Thank you
        for taking the time to explore my work.
      </div>
    ),
    className: "md:col-span-2 row-span-2",
  },
  {
    header: <h1 className="uppercase text-2xl font-bold">Creative fields</h1>,
    body: <CreativeFields creativeFields={CREATIVE_FIELDS} />,
    footer: (
      <Tools
        tools={[
          { name: "Adobe Photoshop", icon: <SiAdobephotoshop size={28} /> },
          { name: "Adobe Illustrator", icon: <SiAdobeillustrator size={28} /> },
          { name: "Adobe inDesign", icon: <SiAdobeindesign size={28} /> },
          { name: "Canva", icon: <SiCanva size={28} /> },
          {
            name: "CLO 3D",
            icon: (
              <span className="bg-white text-black font-semibold rounded-md p-[2px]">
                CLO
              </span>
            ),
          },
          {
            name: "Procreate",
            icon: (
              <span className="bg-white text-black font-semibold rounded-md p-[2px]">
                procreate
              </span>
            ),
          },
        ]}
      ></Tools>
    ),
    className: "md:col-span-1",
  },
  {
    header: <h1 className="uppercase text-2xl font-bold">Education</h1>,
    body: <Education educations={EDUCATIONS}></Education>,
    className: "md:col-span-2 justify-end",
  },
  {
    header: <h1 className="uppercase text-2xl font-bold">Experiance</h1>,
    body: <Experiance experiances={EXPERIANCES} />,
    className: "md:col-span-1",
  },
];
const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen p-4 flex items-center justify-center"
    >
      <BentoGrid>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            header={item.header}
            className={item.className}
            body={item.body}
            footer={item.footer}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default AboutSection;
