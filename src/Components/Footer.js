import React from "react";
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer =()=>{
    return(
        <div className='Footer'>
        <div className='Background'/>
        <div className='Rectangle85'/>
        <span className='_2020TanahAirStudioAllrightsreserved'>@2020 TanahAir Studio. All rights reserved.</span>
        <span className='PrivacyPolicy'>Privacy Policy</span>
        <span className='TermsandCondition'>Terms and Condition</span>
        <div className='SocialMedia'>
            <div className='Socmed'>
                <div className='Container'/>
                <span className='Yt'  ><YouTubeIcon/></span>
            </div>
            <div className='Socmed_1'>
                <div className='Container_1'/>
                <span className='Fb'><FacebookIcon/></span>
            </div>
            <div className='Socmed_2'>
                <div className='Container_2'/>
                <span className='Tw'><TwitterIcon/></span>
            </div>
            <div className='Socmed_3'>
                <div className='Container_3'/>
                <span className='Ig'><InstagramIcon/></span>
            </div>
        </div>
        <span className='Dealerz'>Dealerz.</span>
    </div>
    )
}
export default Footer;