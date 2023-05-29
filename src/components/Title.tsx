type TitleProps = {
  children: React.ReactNode;
};

export function Title(props: TitleProps) {
  return <h1 className="text-2xl font-bold ">{props.children}</h1>;
}
