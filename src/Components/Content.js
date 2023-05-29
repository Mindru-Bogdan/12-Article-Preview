import Avatar from '../../src/avatar-michelle.jpg';
import IconShare from '../../src/icon-share.svg';

import classes from './Content.module.css';

const Content = () => {
  return (
    <div className={classes.card}>
      <h1>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
      <p>
        Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some
        simple tips to help you make any room feel complete.
      </p>
      <div className={classes.footer}>
        <img src={Avatar} className={classes.avatar} />
        <h2>Michelle Appleton</h2>
        <h3>28 Jun 2020</h3>
      </div>
      <div className={classes.btn}>
        <img src={IconShare} className={classes.iconShare} />
      </div>
      {/* <div className={classes.share}>Share;</div> */}
    </div>
  );
};

export default Content;
