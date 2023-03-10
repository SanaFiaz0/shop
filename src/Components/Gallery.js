import React from 'react'
import './Gallery.css'
import ArrowChevronLeft from "./ArrowChevronLeft"
import ArrowChevronRight from "./ArrowChevronRight"
import ButtonTextTypeRoundedStatePrimaryAlignNoneSizeLargeBodyNormalIconFalse from "./ButtonTextTypeRoundedStatePrimaryAlignNoneSizeLargeBodyNormalIconFalse"
import Footer from './Footer';
import NavBar from './Navbar';
import Form from './Form';
export default function Gallery () {
	return (
		<div className='Gallery_Gallery'>
			<NavBar/>
			<div className='Hero'>
				<div className='Container_9'/>
				<div className='MaskGroup'>
					<div className='Container_10'/>
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
			<div className='Testimonial'>
				<div className='ArrowLeft'>
					<div className='Container_6'/>
					<ArrowChevronLeft className='ArrowChevronLeft'/>
				</div>
				<div className='ArrowRight'>
					<div className='Container_7'/>
					<ArrowChevronRight className='ArrowChevronRight'/>
				</div>
				<div className='Card'>
					<div className='Container_8'/>
					<div className='ImagePlaceholder'/>
					<span className='GoodSeller'>Good Seller!</span>
					<span className='IamveryhappywiththeservicesprovideditisveryhelpfulstartingfromtheinsightthatthecompanygavefromthestartthatIdidnotunderstandwhatitwassoIgotknowledgeandmademywebsitelookbetter'>I am very happy with the services provided, it is very helpful, starting<br/>from the insight that the company gave from the start that I did not<br/>understand what it was so I got knowledge and made my website<br/>look better</span>
					<span className='YourBelovedBuyer'>Your Beloved Buyer</span>
					<span className='AnnaSaraspova'>Anna Saraspova</span>
				</div>
			</div>
			<div className='CategoriesShop'>
				<ButtonTextTypeRoundedStatePrimaryAlignNoneSizeLargeBodyNormalIconFalse className='Button_1'/>
				<div className='Card_1'>
					<div className='ImagePlaceholder_1'/>
					<span className='CategoryDress'>Category Dress</span>
					<span className='TropicalSuit'>Tropical Suit</span>
				</div>
				<div className='Card_2'>
					<div className='ImagePlaceholder_2'/>
					<span className='CategoryDress_1'>Category Dress</span>
					<span className='TropicalSuit_1'>Tropical Suit</span>
				</div>
				<div className='Card_3'>
					<div className='ImagePlaceholder_3'/>
					<span className='CategoryDress_2'>Category Dress</span>
					<span className='TropicalSuit_2'>Tropical Suit</span>
				</div>
				<div className='Card_4'>
					<div className='ImagePlaceholder_4'/>
					<span className='CategoryDress_3'>Category Dress</span>
					<span className='TropicalSuit_3'>Tropical Suit</span>
				</div>
				<div className='Card_5'>
					<div className='ImagePlaceholder_5'/>
					<span className='CategoryDress_4'>Category Dress</span>
					<span className='TropicalSuit_4'>Tropical Suit</span>
				</div>
				<div className='Card_6'>
					<div className='ImagePlaceholder_6'/>
					<span className='CategoryDress_5'>Category Dress</span>
					<span className='TropicalSuit_5'>Tropical Suit</span>
				</div>
				<span className='OurGallery'>Our Gallery</span>
				<div className='Categories'>
					<span className='CoatsJacket'>Coats & Jacket</span>
					<span className='AllProducts'>All Products</span>
					<span className='Dressed'>Dressed</span>
					<span className='Playsuit'>Playsuit</span>
					<span className='Short'>Short</span>
					<span className='Skirt'>Skirt</span>
					<span className='TShirt'>T-Shirt</span>
				</div>
			</div>
			
			<Form/>
			<Footer/>
		</div>
	)
}