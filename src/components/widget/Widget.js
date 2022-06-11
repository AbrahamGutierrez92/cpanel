import React from "react";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import "./widget.scss";
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';

const Widget = ({ type }) => {
  let data;

  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: <SupervisorAccountIcon className="icon"
        style={{ color: "crimson", backgroundColor: "#f396b2" }}
        />,
      };

      break;
    case "orders":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: <StoreMallDirectoryIcon className="icon"
        style={{ color: "#eecc09", backgroundColor: "#f7eaa2" }}
        />,
      };

      break;

    case "earning":
      data = {
        title: "ERARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: <SupervisorAccountIcon className="icon"
        style={{ color: "green", backgroundColor: "#a6f593" }} 
        />,
      };

      break;
    
      case "balance":
          data={
              title: "BALANCE",
              isMoney: true,
              link: "See details",
              icon: <SupervisorAccountIcon className="icon"
              style={{ color: "#c233aa", backgroundColor: "#f5a9e8" }} 
              />,
          };

          break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{ data.title }</span>
        <span className="counter">{ data.isMoney && "$" } {amount}</span>

        <span className="link">{ data.link }</span>
      </div>

      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff}
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
