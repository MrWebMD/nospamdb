import PlaceHolderCard from "../PlaceHolderCard";
import classes from "./RecentSubmissions.module.css";

const RecentSubmissions = (props) => {
  return (
    <section className="left-bg-accent">
      <h1 className="section-title center">Recent Submissions</h1>
      <PlaceHolderCard>
        <h1 className="section-title">Super l33t submissions</h1>
        <img src="/images/airball.gif" alt="Airball" className={classes.placeholderImage}/>
      </PlaceHolderCard>
      {/* <img src="/images/shaquille-o-neal-excited.gif" alt="Shaq" className={classes.placeholder}/>
    <img src="/images/airball.gif" alt="Airball" className={classes.placeholder}/> */}
    </section>
  );
};

export default RecentSubmissions;
