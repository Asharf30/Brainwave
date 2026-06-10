import ButotonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, children, OnClick, px, white }) => {
  // const classes =()=>()
  const renderButton = () => (
    <button className=" cursor-pointer">
      <span>{children}</span>
      {ButotonSvg(white)}
    </button>
  );
  return renderButton();
};

export default Button;
