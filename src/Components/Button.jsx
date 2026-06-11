import ButtonSvg from "../assets/svg/ButtonSvg";
import clsx from "clsx";

const Button = ({ className, href, children, px, white }) => {
  const classes =
    clsx(`button relative inline-flex items-center justify-center h-11  cursor-pointer
      
  transition-colors hover:text-color-6 ${px || "px-7"} ${white ? "text-n-8" : "text-n-1"}
  ${className || ""}`);

  const spanClasses = clsx(`realative z-10`);

  const renderLink = () => (
    <a href={href} className={classes}>
      {" "}
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  const renderButton = () => (
    <button className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );
  return href ? renderLink() : renderButton();
};

export default Button;
