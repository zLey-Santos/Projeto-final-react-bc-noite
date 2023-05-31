type TTypeClass = "default" | "danger" | "warning" | "free";

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
      " border-red-600 border-double border-4 bg-sky-500 text-red-700 text-xs font-extrabold   hover:bg-[#222] hover:border-red-500 hover:border-4 hover:border-double",
    warning: "",
    free: "",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`  text-[#222] py-3 px-3 rounded-xl ${configColor[typeClass]} ${className}`}>
      {children}
    </button>
  );
}
