import Navigation from "./Navigation";

const Layout = (props) => {
  return (
    <>
      <Navigation/>
      {props.children}
    </>
  );
};

export default Layout;
