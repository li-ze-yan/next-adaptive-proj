interface ClientOnlyProps {
  children: React.ReactNode;
}

const Container = ({ children }: ClientOnlyProps) => {
  return <div className="mx-auto md:w-[78vw] w-[90vw]">{children}</div>;
};

export default Container;
