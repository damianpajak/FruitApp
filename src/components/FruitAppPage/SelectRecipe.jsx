export const SelectRecipe = ({
  title,
  name,
  className,
  classNameLabel,
  values = [],
  handleTyping,
}) => {
  return (
    <label className={classNameLabel}>
      {title}
      <select name={name} className={className} onChange={handleTyping}>
        <option value="">Select</option>
        {values.map((e, idx) => (
          <option key={idx} value={JSON.stringify(e)}>
            {e.name}
          </option>
        ))}
      </select>
    </label>
  );
};
