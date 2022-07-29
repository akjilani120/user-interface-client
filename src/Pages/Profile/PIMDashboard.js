import React from 'react';
import './PIMDashboard.css'
import {  Link ,Outlet } from "react-router-dom";
const PIMDashboard = () => {
    return (
        <div className='dashboard-head '>
            <div className="dashboard-nav">
             <ul>
              
                <li className='profile-left-nav-list'> <Link  to="/" >PIM</Link ></li>
                
             </ul>
             
            </div>
            <div className="dashboard-show">
            <ul className='d-lg-flex '>            
                <li className='profile-left-nav-list-pim'> <Link  className='link-up' to="/" >Configuration</Link ></li>
                <li className='profile-left-nav-list-pim'> <Link  className='link-up' to="/" >Employee List</Link ></li>
                <li className='profile-left-nav-list-pim'> <Link  className='link-up' to="/addEmployee" >Add Employee</Link ></li>
                <li className='profile-left-nav-list-pim'> <Link  className='link-up' to="/" >Resports</Link ></li>
                
               
             </ul>
            <Outlet />
            </div>
        </div>
    );
};

export default PIMDashboard;