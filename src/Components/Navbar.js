import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CallIcon from '@mui/icons-material/Call';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import './Home.css';
import './Shop.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar =()=>{
    return(
            <div className='Navbar'>
				<div className='Container_9'/>
				<div className='CallCentre'>
				<CallIcon/>
					<span className='CallCenter'>Call Center</span>
				</div>
				<div className='CallCentre_1'>
				<LocalShippingIcon/>
					<span className='ShippingReturns'>Shipping & Returns</span>
				</div>
				<div className='Container_10'/>
				<span className='Dealerz_1'>Dealerz.</span>
				<div className='Searchbar_1' style={{backgroundColor:'white'}}>
					<div className='Container_11 '/>
				
					<span className='Searchwhatyouneed' >Search what you need </span>
					
				<div className='Searchwhatyouneed' style={{float:'right', marginLeft:'500px'}}>
					<SearchIcon/>
			    </div>
				</div>
				<div className='Menu' style={{marginTop: '15px'}}>

				<FavoriteBorderIcon style={{marginRight: '50px'}}/>
				<Link to='/Cart'><ShoppingCartIcon style={{marginRight: '50px'}}/></Link>
				
				<PermIdentityIcon style={{marginRight: '50px'}}/>
				<NotificationsNoneIcon/>
					
				</div>
				<div className='Categories'>
					<Link to='/Shop'><span className='Shop_2'>Shop</span></Link>
					<span className='Promo'>Promo</span>
					<span className='About'>About</span>
					<span className='Blog'>Blog</span>
				</div>
				
		
			</div>
    )
}

export default Navbar;