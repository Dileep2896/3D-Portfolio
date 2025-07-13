const Button = ({ text, className, children, btnMargin, onclick }) => {
  return (
    <a onClick={onclick} className={`${className ?? ""} cta-wrapper`}>
      <div className={`cta-button group ${btnMargin}`}>
        <div className="bg-circle" />
        {children}
        <p className="text">{text}</p>
      </div>
    </a>
  );
};

export default Button;
