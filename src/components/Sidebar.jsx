import React from 'react';
import '../style/sidebar.css';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
 
const Sidebar = () => {
    return (
      <div className="sidebar">
        <CDBSidebar textColor="#fff" backgroundColor="#333">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a
              href="/"
              className="sidebar-header"
              style={{ color: 'inherit' }}
            >
              Home
            </a>
          </CDBSidebarHeader>
   
          <CDBSidebarContent className="sidebar-content">

            <CDBSidebarMenu>
              <NavLink exact="true" to="/profile" activeclassname="activeClicked">
                <CDBSidebarMenuItem className="sidebar-item" icon="user">Profile</CDBSidebarMenuItem>
              </NavLink>
              {/* <NavLink exact="true" to="/search" activeclassname="activeClicked">
                <CDBSidebarMenuItem className="sidebar-item" icon="search">Search</CDBSidebarMenuItem>
              </NavLink>  */}
              <NavLink exact="true" to="/opportunities" activeclassname="activeClicked">
                <CDBSidebarMenuItem className="sidebar-item" icon="columns">Opportunities</CDBSidebarMenuItem>
              </NavLink>
              {/* <NavLink exact="true" to="/documents" activeclassname="activeClicked">
                <CDBSidebarMenuItem className="sidebar-item" icon="table">
                  Documents
                </CDBSidebarMenuItem>
              </NavLink> */}
              <NavLink exact="true" to="/resources" activeclassnamee="activeClicked">
                <CDBSidebarMenuItem className="sidebar-item" icon="book">
                Resources
                </CDBSidebarMenuItem>
              </NavLink>
          </CDBSidebarMenu>
          
          </CDBSidebarContent>
   
          
        </CDBSidebar>
      </div>
    );
  };
   
  export default Sidebar;
