const Button = ({ backgroundColor, color, title, width, height, border }) => {
  return (
    <>
      <button
        type="button"
        style={{
          backgroundColor: backgroundColor,
          color: color,
          width: width,
          height: height,
          border: border,
        }}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
