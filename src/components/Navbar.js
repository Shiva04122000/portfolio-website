import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import signature from '../images/signature.png'
import cycle from "../svgs/cycle.json"
import Lottie from "lottie-react";



const drawerWidth = 390;

function Navbar(props) {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

 

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Link className='link' to={"/"}><Typography variant="h6" sx={{ my: 2 }}>
        <img style={{ width: '8rem' }} src={signature} alt="" />
      </Typography></Link>
      <Divider />
      <List className="mobileDrawer">
        <Link className='link' to={"/"}><Button style={{ "display": "flex", "margin": "auto", fontFamily: " 'Poppins', 'sans-serif' ", color: '#111' }} >Home</Button></Link>
        <Link className='link' to={"/about"}><Button style={{ "display": "flex", "margin": "auto", fontFamily: " 'Poppins', 'sans-serif' ", color: '#111' }}  >About</Button></Link>
        <Link className='link' to={"/education"}><Button style={{ "display": "flex", "margin": "auto", fontFamily: " 'Poppins', 'sans-serif' ", color: '#111' }}  >Education</Button></Link>
        <Link className='link' to={"/skills"}><Button style={{ "display": "flex", "margin": "auto", fontFamily: " 'Poppins', 'sans-serif' ", color: '#111' }}  >Skills</Button></Link>
        <Link className='link' to={"/projects"}><Button style={{ "display": "flex", "margin": "auto", fontFamily: " 'Poppins', 'sans-serif' ", color: '#111' }} >Projects</Button></Link>
        <Link className='link' to={"/contact"}><Button style={{ "display": "flex", "margin": "auto", fontFamily: " 'Poppins', 'sans-serif' ", color: '#111' }}  >Contact</Button></Link>
        <div style={{width:"21rem"}} >
        <Lottie animationData={cycle} />
      </div>      
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  return (
    <Box sx={{ display: 'flex', lineHeight: '0', height: '3rem' }}>
      <CssBaseline />
      <AppBar className='mobile-navbar' sx={{ color: '#6236ff', backgroundColor: ' #fff', flexDirection: "row", gap: '10rem' }}>
        <Toolbar sx={{ display: 'flex', gap: '45rem' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon style={{width:"2.5rem",height:"2.5rem"}} />
            <img style={{ width: '8rem',marginLeft: '9rem'}} src={signature} alt="" />
          </IconButton>
          <Link className='link' to={"/"} >
            <img style={{ width: '8rem' }} src={signature} alt="" />
          </Link>
          <Box sx={{ display: { xs: 'none', sm: 'flex' ,gap:'1rem'} }}>
            <Link className='link' to={"/"}><Button sx={{ color: '#6236ff', fontWeight: '600', fontFamily: " 'Poppins', 'sans-serif' " }}>Home</Button></Link>
            <Link className='link' to={"/about"}><Button sx={{ color: '#6236ff', fontWeight: '600', fontFamily: " 'Poppins', 'sans-serif' " }}>About</Button></Link>
            <Link className='link' to={"/education"}><Button sx={{ color: '#6236ff', fontWeight: '600', fontFamily: " 'Poppins', 'sans-serif' " }}>Education</Button></Link>
            <Link className='link' to={"/skills"}><Button sx={{ color: '#6236ff', fontWeight: '600', fontFamily: " 'Poppins', 'sans-serif' " }}>Skills</Button></Link>
            <Link className='link' to={"/projects"}><Button sx={{ color: '#6236ff', fontWeight: '600', fontFamily: " 'Poppins', 'sans-serif' " }}>Projects</Button></Link>
            <Link className='link' to={"/contact"}><Button sx={{ color: '#6236ff', fontWeight: '600', fontFamily: " 'Poppins', 'sans-serif' " }}>Contact</Button></Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  )
}



export default Navbar;
