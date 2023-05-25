import classes from './Card.module.css';

const Card = () => {
  return (
    <div>
      <h1>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
      <p>
        Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some
        simple tips to help you make any room feel complete.
      </p>
      <div className={classes.footer}>
        <h2>Michelle Appleton</h2>
        <h3>28 Jun 2020</h3>
      </div>
      <div className={classes.share}>Share;</div>
    </div>
  );
};

export default Card;
