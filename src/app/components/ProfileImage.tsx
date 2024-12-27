import Image from "next/image";
const ProfileImage = () => {
  return (
    <div className="border-[20px] w-fit">
      <Image
        src="/image.png"
        width={400}
        height={400}
        alt="profile pic"
      ></Image>
    </div>
  );
};

export default ProfileImage;
