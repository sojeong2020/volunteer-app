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
 
const Sidebar = ({t, i18n}) => {
    return (
      <div className="sidebar">
        <CDBSidebar textColor="#fff" backgroundColor="#333">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a
              href="/"
              className="sidebar-header"
              style={{ color: 'inherit' }}
            >
              {t('home')}
            </a>
          </CDBSidebarHeader>
   
          <CDBSidebarContent className="sidebar-content">

            <CDBSidebarMenu>
              <NavLink exact="true" to="/profile" activeclassname="activeClicked">
                <CDBSidebarMenuItem className="sidebar-item" icon="user">{t('profile')}</CDBSidebarMenuItem>
              </NavLink>
              
              <NavLink exact="true" to="/opportunities" activeclassname="activeClicked">
                <CDBSidebarMenuItem className="sidebar-item" icon="columns">{t('opportunities')}</CDBSidebarMenuItem>
              </NavLink>
              
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
