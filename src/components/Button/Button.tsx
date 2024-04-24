type ButtonProps = {
  buttonName: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ buttonName, handleClick }: ButtonProps) => {
  return (
    <>
      <button onClick={handleClick}>{buttonName}</button>
    </>
  );
};
