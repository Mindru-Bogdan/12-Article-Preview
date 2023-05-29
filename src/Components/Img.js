import Image from '../../src/drawers.jpg';

import classes from './Img.module.css';

const Img = () => {
  return (
    <div>
      <img src={Image} className={classes.drawers} />
    </div>
  );
};

export default Img;
