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
      "shadow-lg shadow-sky-500/60 md:shadow-xl bg-sky-500 text-red-500 hover:shadow-lg hover:shadow-red-500/60 hover:md:shadow-xl hover:bg-[#222]",
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
