import React from 'react'
import './Home.css';
import './Shop.css';
import ImgAsset from '../public'
import SearchIcon from '@mui/icons-material/Search';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import ArrowChevronRight from "./ArrowChevronRight"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ButtonTextTypeRoundedStatePrimaryAlignNoneSizeLargeBodyNormalIconFalse from "./ButtonTextTypeRoundedStatePrimaryAlignNoneSizeLargeBodyNormalIconFalse"
import Navbar from './Navbar';
import Form from './Form';
import Footer from './Footer';

const  Shop = () => {
	return (
		<div className='Shop_Shop'>
				<Navbar/>
				<Form/>
			
		
			<div className='Shop_1'>
				<div className='Sidebar'>
					<div className='Searchbar'>
						<div className='Container_6'/>
						<SearchIcon className='Search'/>
						<span className='Searchproducts'>Search products</span>
						<div className='Searchwhatyouneed' style={{float:'right', marginTop:'15px',marginRight:'10px'}}>
					<SearchIcon className='Searchproducts' style={{marginLeft:'185px'}}/>
			    </div>
					</div>
					<div className='Price'>
						<span className='Price_1'>Price</span>
						<div className='Filters'>
							<img className='Line' src = {ImgAsset.Shop_Line} />
							<div className='Ellipse'/>
							<div className='Ellipse_1'/>
						</div>
						<span className='Range'>Range</span>
						<span className='_520'>$5-$20</span>
						<FilterAltOutlinedIcon className='Filter'/>
					</div>
					<div className='ProductCategories'>
						<span className='ProductCategories_1'>Product Categories</span>
						<div className='Grocery'>
							<span className='CoatandJackets'>Coat and Jackets</span>
							<ArrowChevronRight className='ArrowChevronRight'/>
						</div>
						<div className='Grocery_1'>
							<span className='Dressses'>Dressses</span>
							<ArrowChevronRight className='ArrowChevronRight_1'/>
						</div>
						<div className='Grocery_2'>
							<span className='Playsuit'>Playsuit</span>
							<ArrowChevronRight className='ArrowChevronRight_2'/>
						</div>
						<div className='Grocery_3'>
							<span className='Short'>Short</span>
							<ArrowChevronRight className='ArrowChevronRight_3'/>
						</div>
						<div className='Grocery_4'>
							<span className='Top'>Top</span>
							<ArrowChevronRight className='ArrowChevronRight_4'/>
						</div>
						<div className='Grocery_5'>
							<span className='Bottoms'>Bottoms</span>
							<ArrowChevronRight className='ArrowChevronRight_5'/>
						</div>
					</div>
					<div className='FeaturedProduct'>
						<span className='FeaturedProduct_1'>Featured Product</span>
						<div className='List'>
							<div className='Image'/>
							<span className='TropicalPlaysuit'>Tropical Playsuit</span>
							<span className='_100'>$100</span>
						</div>
						<div className='List_1'>
							<div className='Image_1'/>
							<span className='TropicalPlaysuit_1'>Tropical Playsuit</span>
							<span className='_100_1'>$100</span>
						</div>
						<div className='List_2'>
							<div className='Image_2'/>
							<span className='TropicalPlaysuit_2'>Tropical Playsuit</span>
							<span className='_100_2'>$100</span>
						</div>
						<div className='List_3'>
							<div className='Image_3'/>
							<span className='TropicalPlaysuit_3'>Tropical Playsuit</span>
							<span className='_100_3'>$100</span>
						</div>
						<div className='List_4'>
							<div className='Image_4'/>
							<span className='TropicalPlaysuit_4'>Tropical Playsuit</span>
							<span className='_100_4'>$100</span>
						</div>
						<div className='List_5'>
							<div className='Image_5'/>
							<span className='TropicalPlaysuit_5'>Tropical Playsuit</span>
							<span className='_100_5'>$100</span>
						</div>
					</div>
				</div>
				<div className='Item'>
					<img className='Image_6' src = {ImgAsset.Shop_Image_6} />
					<div className='MiscTag'>
						<img className='Background_1' src = {ImgAsset.Shop_Background_1} />
					</div>
					<FavoriteBorderIcon className='Heart'/>
					<span className='Price_2'>$99</span>
					<span className='Product'>Urbano Jacket</span>
					<span className='Seller'>watchmenow</span>
					<div className='Ratings'>
						<img className='Star6' src = {ImgAsset.Shop_Star6} />
						<img className='Star7' src = {ImgAsset.Shop_Star7} />
						<img className='Star8' src = {ImgAsset.Shop_Star8} />
						<img className='Star9' src = {ImgAsset.Shop_Star9} />
						<img className='Star10' src = {ImgAsset.Shop_Star10} />
					</div>
				</div>
				<div className='Item_1'>
					<img className='Image_7' src = {ImgAsset.Shop_Image_7} />
					<div className='MiscTag_1'>
						<img className='Background_2' src = {ImgAsset.Shop_Background_2} />
					</div>
					<FavoriteBorderIcon className='Heart_1'/>
					<span className='Price_3'>$99</span>
					<span className='Product_1'>Urbano Jacket</span>
					<span className='Seller_1'>watchmenow</span>
					<div className='Ratings_1'>
						<img className='Star6_1' src = {ImgAsset.Shop_Star6_1} />
						<img className='Star7_1' src = {ImgAsset.Shop_Star7_1} />
						<img className='Star8_1' src = {ImgAsset.Shop_Star8_1} />
						<img className='Star9_1' src = {ImgAsset.Shop_Star9_1} />
						<img className='Star10_1' src = {ImgAsset.Shop_Star10_1} />
					</div>
				</div>
				<div className='Item_2'>
					<img className='Image_8' src = {ImgAsset.Shop_Image_8} />
					<div className='MiscTag_2'>
						<img className='Background_3' src = {ImgAsset.Shop_Background_3} />
					</div>
					<FavoriteBorderIcon className='Heart_2'/>
					<span className='Price_4'>$99</span>
					<span className='Product_2'>Urbano Jacket</span>
					<span className='Seller_2'>watchmenow</span>
					<div className='Ratings_2'>
						<img className='Star6_2' src = {ImgAsset.Shop_Star6_2} />
						<img className='Star7_2' src = {ImgAsset.Shop_Star7_2} />
						<img className='Star8_2' src = {ImgAsset.Shop_Star8_2} />
						<img className='Star9_2' src = {ImgAsset.Shop_Star9_2} />
						<img className='Star10_2' src = {ImgAsset.Shop_Star10_2} />
					</div>
				</div>
				<div className='Item_3'>
					<img className='Image_9' src = {ImgAsset.Shop_Image_9} />
					<div className='MiscTag_3'>
						<img className='Background_4' src = {ImgAsset.Shop_Background_4} />
					</div>
					<FavoriteBorderIcon className='Heart_3'/>
					<span className='Price_5'>$99</span>
					<span className='Product_3'>Urbano Jacket</span>
					<span className='Seller_3'>watchmenow</span>
					<div className='Ratings_3'>
						<img className='Star6_3' src = {ImgAsset.Shop_Star6_3} />
						<img className='Star7_3' src = {ImgAsset.Shop_Star7_3} />
						<img className='Star8_3' src = {ImgAsset.Shop_Star8_3} />
						<img className='Star9_3' src = {ImgAsset.Shop_Star9_3} />
						<img className='Star10_3' src = {ImgAsset.Shop_Star10_3} />
					</div>
				</div>
				<div className='Item_4'>
					<img className='Image_10' src = {ImgAsset.Shop_Image_10} />
					<div className='MiscTag_4'>
						<img className='Background_5' src = {ImgAsset.Shop_Background_5} />
					</div>
					<FavoriteBorderIcon className='Heart_4'/>
					<span className='Price_6'>$99</span>
					<span className='Product_4'>Urbano Jacket</span>
					<span className='Seller_4'>watchmenow</span>
					<div className='Ratings_4'>
						<img className='Star6_4' src = {ImgAsset.Shop_Star6_4} />
						<img className='Star7_4' src = {ImgAsset.Shop_Star7_4} />
						<img className='Star8_4' src = {ImgAsset.Shop_Star8_4} />
						<img className='Star9_4' src = {ImgAsset.Shop_Star9_4} />
						<img className='Star10_4' src = {ImgAsset.Shop_Star10_4} />
					</div>
				</div>
				<div className='Item_5'>
					<img className='Image_11' src = {ImgAsset.Shop_Image_11} />
					<div className='MiscTag_5'>
						<img className='Background_6' src = {ImgAsset.Shop_Background_6} />
					</div>
					<FavoriteBorderIcon className='Heart_5'/>
					<span className='Price_7'>$99</span>
					<span className='Product_5'>Urbano Jacket</span>
					<span className='Seller_5'>watchmenow</span>
					<div className='Ratings_5'>
						<img className='Star6_5' src = {ImgAsset.Shop_Star6_5} />
						<img className='Star7_5' src = {ImgAsset.Shop_Star7_5} />
						<img className='Star8_5' src = {ImgAsset.Shop_Star8_5} />
						<img className='Star9_5' src = {ImgAsset.Shop_Star9_5} />
						<img className='Star10_5' src = {ImgAsset.Shop_Star10_5} />
					</div>
				</div>
				<div className='Item_6'>
					<img className='Image_12' src = {ImgAsset.Shop_Image_12} />
					<div className='MiscTag_6'>
						<img className='Background_7' src = {ImgAsset.Shop_Background_7} />
					</div>
					<FavoriteBorderIcon className='Heart_6'/>
					<span className='Price_8'>$99</span>
					<span className='Product_6'>Urbano Jacket</span>
					<span className='Seller_6'>watchmenow</span>
					<div className='Ratings_6'>
						<img className='Star6_6' src = {ImgAsset.Shop_Star6_6} />
						<img className='Star7_6' src = {ImgAsset.Shop_Star7_6} />
						<img className='Star8_6' src = {ImgAsset.Shop_Star8_6} />
						<img className='Star9_6' src = {ImgAsset.Shop_Star9_6} />
						<img className='Star10_6' src = {ImgAsset.Shop_Star10_6} />
					</div>
				</div>
				<ButtonTextTypeRoundedStatePrimaryAlignNoneSizeLargeBodyNormalIconFalse className='Button_1'/>
				<div className='Item_7'>
					<img className='Image_13' src = {ImgAsset.Shop_Image_13} />
					<div className='MiscTag_7'>
						<img className='Background_8' src = {ImgAsset.Shop_Background_8} />
					</div>
					<FavoriteBorderIcon className='Heart_7'/>
					<span className='Price_9'>$99</span>
					<span className='Product_7'>Urbano Jacket</span>
					<span className='Seller_7'>watchmenow</span>
					<div className='Ratings_7'>
						<img className='Star6_7' src = {ImgAsset.Shop_Star6_7} />
						<img className='Star7_7' src = {ImgAsset.Shop_Star7_7} />
						<img className='Star8_7' src = {ImgAsset.Shop_Star8_7} />
						<img className='Star9_7' src = {ImgAsset.Shop_Star9_7} />
						<img className='Star10_7' src = {ImgAsset.Shop_Star10_7} />
					</div>
				</div>
			</div>
			<div className='Hero'>
				<div className='Container_7'/>
				<div className='MaskGroup'>
					<div className='Container_8'/>
					<div className='Ellipse153'/>
					<div className='Ellipse155'/>
					<div className='Ellipse154'/>
					<div className='Ellipse156'/>
					<div className='Ellipse158'/>
					<div className='Ellipse159'/>
					<div className='Ellipse157'/>
				</div>
				<span className='HomeShoppingYourChoice'>Home Shopping, Your Choice!</span>
				<span className='Loremipsumdolorsitametconsecteturadipiscingelitseddoeiusmodtemporincididuntutlaboreetdoloremagnaaliqua'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
			</div>
		
			
			<Footer/>
		</div>
	)
}
export default Shop;