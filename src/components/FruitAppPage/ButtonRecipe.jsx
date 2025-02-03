export const ButtonRecipe = ({ title, className, onClick }) => {
  return (
    <>
      <button className={className} onClick={onClick}>
        <span>{title}</span>
      </button>
    </>
  );
};
