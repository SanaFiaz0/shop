import React from 'react'
import './Home.css';
import './Navbar.css';
import ImgAsset from '../public';
import ButtonTextTypeRoundedStatePrimaryAlignNoneSizeLargeBodyNormalIconFalse from "./ButtonTextTypeRoundedStatePrimaryAlignNoneSizeLargeBodyNormalIconFalse"
import ArrowChevronLeft from "./ArrowChevronLeft"
import ArrowChevronRight from "./ArrowChevronRight"
import Navbar from './Navbar';
import Footer from './Footer';
import Form from './Form';
import FlashSale from './FlashSale';
import POst from './POst';
import CategoryShop from './CategoryShop';
export default function Home () {
	return (<>		
	
		<div className='Home_Home'>
		<Navbar/>
		<div className='Hero'>
				<div className='Container_10'/>
				<div className='MaskGroup'>
					<div className='Container_11'/>
					<div className='Ellipse153'/>
					<div className='Ellipse155'/>
					<div className='Ellipse154'/>
					<div className='Ellipse156'/>
					<div className='Ellipse158'/>
					<div className='Ellipse159'/>
					<div className='Ellipse157'/>
				</div>
				<span className='YourPremiumSoundUnplugged'>Your Premium Sound, Unplugged!</span>
				<ButtonTextTypeRoundedStatePrimaryAlignNoneSizeLargeBodyNormalIconFalse className='Button_8'/>
				<span className='Loremipsumdolorsitametconsecteturadipiscingelitseddoeiusmodtemporincididuntutlaboreetdoloremagnaaliqua'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
			</div>
		<CategoryShop/>
		<FlashSale/>

		{/* Story About Us	 */}
 			
 			<div className='GetinTouch'>
				<div className='ImagePlaceholder_5'/>
				<span className='StoryaboutOurBrand'>Story about<br/>Our Brand</span>
				<span className='DevelopawebsitebyfindingaproductidentitythathasvalueandbrandingtobecomeacharacteristicofacompanyWewillalsofacilitatethebusinessmarketingoftheseproductswithourSEOexpertssothattheybecomeareadytousewebsiteandhelpsellaproductfromthecompanyDevelopawebsitebyfindingaproductidentitythathasvalueandbrandingtobecomeacharacteristicofacompanyWewillalsofacilitatethebusinessmarketingoftheseproductswithourSEOexpertssothattheybecomeareadytousewebsiteandhelpsellaproductfromthecompany'>Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company</span>
				<span className='Readfullstory'>Read full story</span>
			</div>   

		{/* Achievements */}
		<div className='Achievement'>
				<span className='OurAchievement'>Our Achievement</span>
				<div className='BrandClientLogo'>
					<div className='logo6'>
						<img className='Clip' src = {ImgAsset.Home_Clip} />
						<img className='CombinedShape' src = {ImgAsset.Home_CombinedShape} />
					</div>
					<div className='logo5'>
						<img className='Clip_1' src = {ImgAsset.Home_Clip_1} />
						<img className='CombinedShape_1' src = {ImgAsset.Home_CombinedShape_1} />
					</div>
					<div className='logo4'>
						<img className='Clip_2' src = {ImgAsset.Home_Clip_2} />
						<img className='CombinedShape_2' src = {ImgAsset.Home_CombinedShape_2} />
					</div>
					<div className='logo3'>
						<img className='Clip_3' src = {ImgAsset.Home_Clip_3} />
						<img className='CombinedShape_3' src = {ImgAsset.Home_CombinedShape_3} />
					</div>
					<div className='logo2'>
						<img className='Clip_4' src = {ImgAsset.Home_Clip_4} />
						<img className='CombinedShape_4' src = {ImgAsset.Home_CombinedShape_4} />
					</div>
					<div className='logo1'>
						<img className='Clip_5' src = {ImgAsset.Home_Clip_5} />
						<img className='CombinedShape_5' src = {ImgAsset.Home_CombinedShape_5} />
					</div>
				</div>
			</div>

			{/* //Testimonial */}
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
					<div className='ImagePlaceholder_4'/>
					<span className='GoodSeller'>Good Seller!</span>
					<span className='IamveryhappywiththeservicesprovideditisveryhelpfulstartingfromtheinsightthatthecompanygavefromthestartthatIdidnotunderstandwhatitwassoIgotknowledgeandmademywebsitelookbetter'>I am very happy with the services provided, it is very helpful, starting<br/>from the insight that the company gave from the start that I did not<br/>understand what it was so I got knowledge and made my website<br/>look better</span>
					<span className='YourBelovedBuyer'>Your Beloved Buyer</span>
					<span className='AnnaSaraspova'>Anna Saraspova</span>
				</div>
			</div>

			{/* Blogs */}
			<div className='Blogs'>
			<span className='GetBetterInsightsfromOurArticles'>Get Better Insights from Our Articles</span>
				<span className='Seemore'>See more</span>
				
				<POst
				name='Best Summer'
				style= 'lavinassss'
				date ='12 Feb'
				classs='Post01'
				link='Link'
				explore='ExploreMore'
				text='LoremIpsumhasbeentheindustrysstandarddummytexteversincethe1500swhenanunknownprintertookagalleyLoremIpsumhasbeentheindustrysstandarddummytexteversincethe1500s'
				info='Info'
				lavina='LivinaStyle'
				dot='Dot'
				dc='_14Feb'
				outfit='BestSummerOutfitStyle'
				image='ImagePlaceholder'
				/>
				<POst
				name='Best Winter'
				style= 'lavinassss'
				date ='19 Feb'
				classs='Post2'
				link='Link_1'
				explore='ExploreMore_1'
				text='LoremIpsumhasbeentheindustrysstandarddummytexteversincethe1500swhenanunknownprintertookagalleyLoremIpsumhasbeentheindustrysstandarddummytexteversincethe1500s_1'
				info='Info_1'
				lavina='LivinaStyle_1'
				dot='Dot_1'
				dc='_14Feb_1'
				outfit='BestSummerOutfitStyle_1'
				image='ImagePlaceholder_1'
				/>
				<POst
				name='Best Autumn'
				style= 'lavinassss'
				date ='12 Jan'
				classs='Post3'
				link='Link_2'
				explore='ExploreMore_2'
				text='LoremIpsumhasbeentheindustrysstandarddummytexteversincethe1500swhenanunknownprintertookagalleyLoremIpsumhasbeentheindustrysstandarddummytexteversincethe1500s_2'
				info='Info_2'
				lavina='LivinaStyle_2'
				dot='Dot_2'
				dc='_14Feb_2'
				outfit='BestSummerOutfitStyle_2'
				image='ImagePlaceholder_2'
				/>
				<POst
				name='Best Spring'
				style= 'lavinassss'
				date ='12 Sep'
				classs='Post4'
				link='Link_3'
				explore='ExploreMore_3'
				text='LoremIpsumhasbeentheindustrysstandarddummytexteversincethe1500swhenanunknownprintertookagalleyLoremIpsumhasbeentheindustrysstandarddummytexteversincethe1500s_3'
				info='Info_3'
				lavina='LivinaStyle_3'
				dot='Dot_3'
				dc='_14Feb_3'
				outfit='BestSummerOutfitStyle_3'
				image='ImagePlaceholder_3'
				/>
			</div> 
			<Form/>	
			<Footer/>
		</div>
		
		</>
)
}