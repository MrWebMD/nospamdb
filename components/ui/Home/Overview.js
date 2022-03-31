import PlaceHolderCard from "../PlaceHolderCard";
import classes from "./Overview.module.css";

const Overview = (props) => {
  return (
    <section className={classes.overview}>
      <h1 className="section-title center">Overview</h1>
      <PlaceHolderCard>
        <h1 className="section-title">Insert L33T Chart Here</h1>
      </PlaceHolderCard>
      {/* <img src="/images/shaquille-o-neal-excited.gif" alt="Shaq" className={classes.placeholder}/>
    <img src="/images/airball.gif" alt="Airball" className={classes.placeholder}/> */}
    </section>
  );
};

export default Overview;
