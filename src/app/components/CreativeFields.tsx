type CreativeFieldsProps = {
  creativeFields: string[];
};
const CreativeFields = ({ creativeFields }: CreativeFieldsProps) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {creativeFields.map((title: string) => {
        return (
          <p
            key={`cf_${title}`}
            className="p-2 px-4 border rounded-lg border-white/[0.2]"
          >
            {title}
          </p>
        );
      })}
    </div>
  );
};
export default CreativeFields;
