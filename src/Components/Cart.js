import React from 'react'
import './Cart.css'
import ImgAsset from '../public'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ButtonIconTypeRoundedStateSecondaryAlignNoneSizeSmallBodySquareIconTrue from "./ButtonIconTypeRoundedStateSecondaryAlignNoneSizeSmallBodySquareIconTrue"
import ButtonTextTypeRoundedStateSecondaryAlignRightSizeSmallBodyNormalIconTrue from "./ButtonTextTypeRoundedStateSecondaryAlignRightSizeSmallBodyNormalIconTrue"
import ButtonTextTypeRoundedStatePrimaryAlignNoneSizeLargeBodyNormalIconFalse from "./ButtonTextTypeRoundedStatePrimaryAlignNoneSizeLargeBodyNormalIconFalse"
import ButtonTextTypeRoundedStatePrimaryAlignNoneSizeMediumBodyNormalIconFalse from "./ButtonTextTypeRoundedStatePrimaryAlignNoneSizeMediumBodyNormalIconFalse"

import NavBar from './Navbar';
import Footer from './Footer';
import Form from './Form';
import FlashSale from './FlashSale';
export default function Cart () {
	return (
		<div className='Cart_Cart'>
			<NavBar/>
			<div className='Hero'>
				<div className='Container_8'/>
				<div className='MaskGroup'>
					<div className='Container_9'/>
					<div className='Ellipse153'/>
					<div className='Ellipse155'/>
					<div className='Ellipse154'/>
					<div className='Ellipse156'/>
					<div className='Ellipse158'/>
					<div className='Ellipse159'/>
					<div className='Ellipse157'/>
				</div>
				<span className='OurGalleryYourDreams'>Our Gallery, <br/>Your Dreams!</span>
				<span className='Loremipsumdolorsitametconsecteturadipiscingelitseddoeiusmodtemporincididuntutlaboreetdoloremagnaaliqua'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
			</div>
			
			<div className='MyCart'>
				<div className='Group189'>
					<span className='_1ShoppingCart'>1. Shopping Cart</span>
					<span className='_2Checkout'>2. Checkout</span>
					<span className='_3OrderSuccesed'>3. Order Succesed</span>
				</div>
				<div className='Group196'>
					<span className='TropicalPlaysuit'>Tropical Playsuit</span>
					<span className='Size'>Size               :</span>
					<span className='Quantity'>Quantity     :</span>
					<span className='_5'>-         5         +</span>
					<span className='M'>M</span>
					<div className='Price_10'>
						<span className='Price_11'>$99</span>
					</div>
					<div className='Rectangle10'/>
					<ButtonIconTypeRoundedStateSecondaryAlignNoneSizeSmallBodySquareIconTrue className='Button_1'/>
					<ButtonTextTypeRoundedStateSecondaryAlignRightSizeSmallBodyNormalIconTrue className='Button_2'/>
				</div>
				<div className='Group197'>
					<span className='TropicalPlaysuit_1'>Tropical Playsuit</span>
					<span className='Size_1'>Size               :</span>
					<span className='Quantity_1'>Quantity     :</span>
					<span className='_5_1'>-         5         +</span>
					<span className='M_1'>M</span>
					<div className='Price_12'>
						<span className='Price_13'>$99</span>
					</div>
					<div className='Rectangle10_1'/>
					<ButtonIconTypeRoundedStateSecondaryAlignNoneSizeSmallBodySquareIconTrue className='Button_3'/>
					<ButtonTextTypeRoundedStateSecondaryAlignRightSizeSmallBodyNormalIconTrue className='Button_4'/>
				</div>
				<div className='Group198'>
					<span className='TropicalPlaysuit_2'>Tropical Playsuit</span>
					<span className='Size_2'>Size               :</span>
					<span className='Quantity_2'>Quantity     :</span>
					<span className='_5_2'>-         5         +</span>
					<span className='M_2'>M</span>
					<div className='Price_14'>
						<span className='Price_15'>$99</span>
					</div>
					<div className='Rectangle10_2'/>
					<ButtonIconTypeRoundedStateSecondaryAlignNoneSizeSmallBodySquareIconTrue className='Button_5'/>
					<ButtonTextTypeRoundedStateSecondaryAlignRightSizeSmallBodyNormalIconTrue className='Button_6'/>
				</div>
				<div className='Group199'>
					<span className='TropicalPlaysuit_3'>Tropical Playsuit</span>
					<span className='Size_3'>Size               :</span>
					<span className='Quantity_3'>Quantity     :</span>
					<span className='_5_3'>-         5         +</span>
					<span className='M_3'>M</span>
					<div className='Price_16'>
						<span className='Price_17'>$99</span>
					</div>
					<div className='Rectangle10_3'/>
					<ButtonIconTypeRoundedStateSecondaryAlignNoneSizeSmallBodySquareIconTrue className='Button_7'/>
					<ButtonTextTypeRoundedStateSecondaryAlignRightSizeSmallBodyNormalIconTrue className='Button_8'/>
				</div>
				<span className='MyCart_1'>My Cart</span>
				<div className='Checkout'>
					<div className='Group9'>
						<span className='CartTotals'>Cart Totals</span>
						<span className='Subtotal'>Subtotal</span>
						<span className='_150'>$150</span>
						<span className='Shipping'>Shipping</span>
						<span className='FreeShipping'>Free Shipping</span>
						<span className='ShippingtoSidney'>Shipping to Sidney</span>
						<span className='Change'>Change</span>
						<span className='Total'>Total</span>
						<span className='_350'>$350</span>
						<ButtonTextTypeRoundedStatePrimaryAlignNoneSizeLargeBodyNormalIconFalse className='Button_9'/>
					</div>
					<div className='Coupon'>
						<div className='Container_7'/>
						<div className='Textbox'>
							<div className='Textbox_1'>
								<div className='TextBox'/>
								<span className='Inputyouremailhere'>Input your email here</span>
							</div>
						</div>
						<ButtonTextTypeRoundedStatePrimaryAlignNoneSizeMediumBodyNormalIconFalse className='Button_10'/>
						<span className='HaveaCoupon'>Have a Coupon?</span>
					</div>
				</div>
			</div>
			<FlashSale/>
			<Form/>
			<Footer/>
		</div>
	)
}