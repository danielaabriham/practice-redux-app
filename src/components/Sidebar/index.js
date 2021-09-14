import React from "react";
import "./style.css";

import User from '../../containers/User'

const Sidebar = ({ contacts }) => {
  
  return (
    <aside className="sidebar">
      {contacts.map(contact => <User key={contact.user_id} user={contact} />)}
    </aside>
  );
};



export default Sidebar;
