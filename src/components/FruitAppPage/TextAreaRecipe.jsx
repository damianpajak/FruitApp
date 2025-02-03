export const TextAreaRecipe = ({
  title,
  type,
  name,
  placeholder,
  className,
  classNameLabel,
  value,
  handleTyping,
}) => {
  return (
    <label name={name} className={classNameLabel}>
      {title}:
      <textarea
        type={type}
        name={name}
        placeholder={placeholder}
        className={className}
        value={value}
        onChange={handleTyping}
      />
    </label>
  );
};
