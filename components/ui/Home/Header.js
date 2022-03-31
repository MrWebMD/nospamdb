import Button from "../Button";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.headerTitle}>NoSpam Open Database</h1>
      <p className={classes.headerDesc}>
        Dataset containing links from messages identified as spam in Discord
        communities.
      </p>
      <div className={classes.headerCta}>
        <Button smallText="Free of charge">Download Dataset</Button>
        <Button smallText="Github GPL-3.0 License">Use in your Discord</Button>
      </div>
    </header>
  );
};

export default Header;
