

import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Select from '../components/Select';
import { TextField } from '@mui/material';
import Datepicker from '../components/Datepicker';


export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        id=""
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       <svg className='w-4 h-4' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="_32" data-name="32"><path d="m13.5 7h-11a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1z"/><path d="m11.5 11h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1z"/><path d="m9.5 15h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1z"/><path d="m14.5 3h-13a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1z"/></g>
       </svg>


      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
            <span>Organization</span>
            <span><Select /></span>
        </MenuItem>

        <MenuItem onClick={handleClose}>
            <span>Username</span>
            <span><TextField id="outlined-basic" label="User" variant="outlined" /></span>
        </MenuItem>
        
        <MenuItem onClick={handleClose}>
            <span>Email</span>
            <span><TextField id="outlined-basic" label="Email" variant="outlined" /></span>
        </MenuItem>

        <MenuItem onClick={handleClose}>
            <span>Date</span>
            <span><Datepicker /></span>
        </MenuItem>

        <MenuItem onClick={handleClose}>
            <span>Phone Number</span>
            <span><TextField id="outlined-basic" label="Phone Number" variant="outlined" /></span>
        </MenuItem>

        <MenuItem onClick={handleClose}>
            <span>Status</span>
            <span><Select /></span>
        </MenuItem>
        

      </Menu>
    </div>
  );
}


