import React from 'react';
import classes from '../SingleCity/SingleCity.css';

const singleCity = (props) => (


    <div className={classes.Citybox}>
        <div className={classes.Minmax}>{props.tempmin}°</div>
        <div className={classes.Minmax}>{props.tempmax}°</div>
        <div className={classes.Divname}>{props.name}</div>
    </div>
);


export default singleCity