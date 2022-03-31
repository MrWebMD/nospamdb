import Image from "next/image";
import classes from "./Navigation.module.css";
import GithubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';
const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <div className={classes.navLogo}>
        <img src="./images/nospam-logo.png" alt="logo" className={classes.navLogoImage} />
        <span className={classes.navLogoText}>NoSpam</span>
      </div>
      <ul className={classes.navList}>
        <li className={classes.navItem}><GithubIcon className={classes.navIcon}/>Github</li>
        <li className={classes.navItem}><DownloadIcon className={classes.navIcon}/>Download Dataset</li>
      </ul>
    </nav>
  );
};

export default Navigation;
