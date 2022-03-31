import classes from './PlaceHolderCard.module.css';

const PlaceHolderCard = (props) => {
  return <div className={classes.placeholder}>
    {props.children}
  </div>
}


export default PlaceHolderCard;