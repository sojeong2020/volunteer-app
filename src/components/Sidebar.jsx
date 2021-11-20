import React from 'react';
import '../style/sidebar.css';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBBtn,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
 
const Sidebar = () => {
    return (
      <div className="sidebar">
        <CDBSidebar textColor="#fff" backgroundColor="#333">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a
              href="/home"
              className="sidebar-header"
              style={{ color: 'inherit' }}
            >
              Home
            </a>
          </CDBSidebarHeader>
   
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink exact to="/profile" activeClassName="activeClicked">
                <CDBSidebarMenuItem className="sidebar-item" icon="user">Profile</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/search" activeClassName="activeClicked">
                <CDBSidebarMenuItem className="sidebar-item" icon="search">Search</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/opportunity" activeClassName="activeClicked">
                <CDBSidebarMenuItem className="sidebar-item" icon="columns">Opportunity</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/documents" activeClassName="activeClicked">
                <CDBSidebarMenuItem className="sidebar-item" icon="table">
                  Documents
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/resources" activeClassName="activeClicked">
                <CDBSidebarMenuItem className="sidebar-item" icon="chart-line">
                Resources
                </CDBSidebarMenuItem>
              </NavLink>
            

          <NavLink exact to="/en">
          <CDBSidebarMenuItem icon="flag">
          <CDBBtn color="success" outline>
            English
          </CDBBtn>
          </CDBSidebarMenuItem>
          </NavLink>

           <NavLink exact to="/we">
           <CDBSidebarMenuItem icon="flag">
          <CDBBtn color="danger" outline>
            Welsh
          </CDBBtn>
          </CDBSidebarMenuItem>
          </NavLink>
          
        </CDBSidebarMenu>
          </CDBSidebarContent>
   
          <CDBSidebarFooter className="footer">
            <div>
              teamkinetic
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    );
  };
   
  export default Sidebar;
