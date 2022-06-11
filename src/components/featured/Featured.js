import React from 'react';
import "./featured.scss";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const Featured = () => {
  return (
    <div className="featured">
        <div className="top">
           <h1 className="title">Total Revenue</h1> 
           <MoreVertIcon fontSize="small"/>
        </div>

        <div className="bottom">
           <div className="featuredChat">
            <CircularProgressbar className="featuredChat" value={70} text={"70%"} strokeWidth={6}/>
           </div>
           <p className="title">Total sale made today</p>
           <p className="amount">$400</p>
           <p className="desc">
               Previous transactions processing, Last payments may not be included.
           </p>
           <div className="summary">
            <div className="item">
              <div className="itemTitle">Target</div>
              <div className="itemResult negative">
                <KeyboardArrowUpIcon fontZise="12px"/>
                <div className="resultAmount">$12.04k</div>
              </div>
            </div>

            <div className="item">
              <div className="itemTitle">Last Week</div>
              <div className="itemResult positive">
                <KeyboardArrowUpIcon fontZise="12px"/>
                <div className="resultAmount">$12.04k</div>
              </div>
            </div>

            <div className="item">
              <div className="itemTitle">Last Month</div>
              <div className="itemResult positive">
                <KeyboardArrowUpIcon fontZise="12px"/>
                <div className="resultAmount">$12.04k</div>
              </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Featured;
