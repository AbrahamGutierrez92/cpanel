import React from 'react';
import "./sidebar.scss";
import DashboardIcon from '@material-ui/icons/Dashboard';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import GroupIcon from '@material-ui/icons/Group';
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
import PaymentIcon from '@material-ui/icons/Payment';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import AssessmentIcon from '@material-ui/icons/Assessment';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">cPanel | Admin</span>
        </div>
        
        <hr/>

        <div className="center">
            <ul>
                <p className="title">MAIN</p>

                <li>
                    <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <li>
                   <GroupIcon className="icon"/>
                    <span>Users</span>
                </li>

                <li>
                    <StoreMallDirectoryIcon className="icon"/>
                    <span>Products</span>
                </li>

                <li>
                    <PaymentIcon className="icon"/>
                    <span>Orders</span>
                </li>

                <li>
                    <MotorcycleIcon className="icon"/>
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <AssessmentIcon className="icon"/>
                    <span>Stats</span>
                </li>

                <li>
                    <NotificationsActiveIcon className="icon"/>
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <FavoriteIcon className="icon"/>
                    <span>System Health</span>
                </li>

                <li>
                    <DataUsageIcon className="icon"/>
                    <span>Logs</span>
                </li>

                <li>
                    <SettingsIcon className="icon"/>
                    <span>Setting</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <PermIdentityIcon className="icon" />
                    <span>Profile</span>
                </li>

                <li>
                    <ExitToAppIcon className="icon"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}


export default Sidebar;