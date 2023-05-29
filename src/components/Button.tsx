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
    danger: "bg-red-700 hover:bg-red-600",
    warning: "",
    free: "",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={` text-slate-50 font-bold uppercase py-1 px-3 rounded-md ${configColor[typeClass]} ${className}`}>
      {children}
    </button>
  );
}
