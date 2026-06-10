import ButotonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, children, OnClick, px, white }) => {
  const classes = `button relative iniline-flex items-center justify-center h-11 
  transition-colors hover:text-color-6
  
  `;
  const renderButton = () => (
    <button className={classes}>
      <span>{children}</span>
      {ButotonSvg(white)}
    </button>
  );
  return renderButton();
};

export default Button;
