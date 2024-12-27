type EducationProps = {
  educations: {
    time: string;
    school: string;
    degree: string;
  }[];
};

const Education = ({ educations }: EducationProps) => {
  return (
    <div className="flex gap-8 flex-wrap items-center">
      {educations.map(({ time, school, degree }) => {
        return (
          <div key={`${time}_${school}`} className="text-sm flex flex-col">
            <p>{time}</p>
            <p className="text-base font-medium">{school}</p>
            <p>{degree}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Education;
