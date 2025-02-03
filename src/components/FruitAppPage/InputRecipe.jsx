export const InputRecipe = ({
  title,
  type,
  name,
  placeholder,
  className,
  classNameLabel,
  handleTyping,
  value,
}) => {
  return (
    <label name={name} className={classNameLabel}>
      {title}:
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={className}
        onChange={handleTyping}
        value={value || ""}
      />
    </label>
  );
};
