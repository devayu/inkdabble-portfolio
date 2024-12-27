type ExperianceProps = {
  experiances: {
    time?: string;
    name: string;
    description?: string;
    role: string;
    company: string;
  }[];
};
const Experiance = ({ experiances }: ExperianceProps) => {
  return (
    <div className="flex gap-8 flex-wrap">
      {experiances.map(({ name, time, role, company }) => {
        return (
          <div key={`${name}_${time}`} className="text-sm flex flex-col">
            {time && (
              <p>
                {time} <span className="opacity-50">{`(${role})`}</span>
              </p>
            )}
            <p className="text-base font-medium">
              {company}
              {!time && (
                <span className="opacity-50 text-sm">{` (${role})`}</span>
              )}
            </p>
            <p>{name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Experiance;
