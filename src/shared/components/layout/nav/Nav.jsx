import React from 'react'
import { useNavigate } from 'react-router-dom';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import './Nav.css'

const Nav = () => {
  const { collapseSidebar } = useProSidebar();

  const navigate = useNavigate();
  return (
    <div className='nav-container'>
      <Sidebar style={{ height: "100vh" }}>
        <Menu>
          <MenuItem
            icon={ <MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>Thesiria</h2>
          </MenuItem>
          <div className='nav-separator'></div>
          
          <MenuItem icon={<MapOutlinedIcon />} onClick={() => navigate('/map')}>Mapa</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />} onClick={() => navigate('/players')}>Jugadores</MenuItem>
          <MenuItem icon={<ShieldOutlinedIcon />} >Batalla</MenuItem>
          <MenuItem icon={<FavoriteBorderOutlinedIcon />} onClick={() => navigate('/diary')}>Diario</MenuItem>
          <MenuItem icon={<AutoFixHighOutlinedIcon />}>Ataques y Hechizos</MenuItem>
          <MenuItem icon={<BugReportOutlinedIcon />}>Npc's y Monstruos</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  )
}

export default Nav