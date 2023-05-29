import { useState } from 'react';

import Avatar from '../../src/avatar-michelle.jpg';
import IconShareOff from '../../src/icon-share.svg';
import IconShareOn from '../../src/icon-share-on.svg';
import IconFacebook from '../../src/icon-facebook.svg';
import IconTwitter from '../../src/icon-twitter.svg';
import IconPinterest from '../../src/icon-pinterest.svg';

import classes from './Content.module.css';

const Content = () => {
  const [shareState, setShareState] = useState(false);

  const changeShareState = () => {
    setShareState(!shareState);
  };

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
      <div onClick={changeShareState} className={shareState ? classes.btnActive : classes.btnInactive}>
        <img src={IconShareOn} onClick={changeShareState} className={shareState ? classes.iconShare : classes.hidden} />
        <img src={IconShareOff} onClick={changeShareState} className={shareState ? classes.hidden : classes.iconShare} />
      </div>
      <div className={shareState ? classes.shareCard : classes.hidden}>
        <h4>SHARE</h4>
        <img src={IconFacebook} className={classes.logo} />
        <img src={IconTwitter} className={classes.logo} />
        <img src={IconPinterest} className={classes.logo} />
        <div className={shareState ? classes.shareCardEnd : classes.hidden}></div>
      </div>
    </div>
  );
};

export default Content;
