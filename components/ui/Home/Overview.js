import classes from "./Overview.module.css";

const Overview = (props) => {
  return <section className={classes.overview}>
    <img src="/images/shaquille-o-neal-excited.gif" alt="Shaq" className={classes.placeholder}/>
    <img src="/images/airball.gif" alt="Airball" className={classes.placeholder}/>
  </section>
}

export default Overview;