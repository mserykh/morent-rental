type ButtonProps = {
  className: string;
  children?: React.ReactNode;
  title?: string;
};

const Button = ({ className, children, title }: ButtonProps) => {
  return (
    <button className={className}>
      {title}
      {children}
    </button>
  );
};

export default Button;
