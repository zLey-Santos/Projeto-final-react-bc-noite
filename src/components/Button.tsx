type TTypeClass = "default" | "danger";

type ButtonProps = {
  type?: "submit" | "button" | "reset";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  typeClass?: TTypeClass;
};

export function Button({
  type,
  children,
  onClick,
  className = "",
  typeClass = "default",
}: ButtonProps) {
  const configColor: { [key in TTypeClass]: string } = {
    default: "bg-sky-400 hover:bg-sky-600",
    danger:
      "text-[#fff] flex justify-center items-center bg-red-500 h-2 w-28 rounded-md border-2 border-[#222] hover:bg-red-700 hover:text-[#222]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`  text-[#222] py-3 px-3  ${configColor[typeClass]} ${className}`}>
      {children}
    </button>
  );
}
