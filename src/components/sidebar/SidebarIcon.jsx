// src/components/sidebar/SidebarIcon.jsx 
function SidebarIcon({ img, label, onClick }) 
{ return ( <div className="sidebar-icon" onClick={onClick}>
     <img src={img} alt={label} /> 
     <span>{label}</span> 
     </div> 
     ) } 
     
     export default SidebarIcon