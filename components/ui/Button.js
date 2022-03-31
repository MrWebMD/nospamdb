import classes from "./Button.module.css";

const Button = (props) => {
  return <div className={classes.button}>
    <p className={classes.buttonText}>{props.children}</p>
    <p className={classes.smallText}>{props.smallText}</p>
  </div>
}

export default Button;