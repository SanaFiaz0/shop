import React from "react";

const POst=(props)=>{
    return(
        <div className={props.classs}>
					<div className={props.link}>
						<span className={props.explore}>Explore More</span>
					</div>
					<span className={props.text}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</span>
					<div className={props.info}>
						<span className={props.lavina}>{props.style}</span>
						<div className={props.dot}/>
						<span className={props.dc}>{props.date}</span>
					</div>
					<span className={props.outfit}>{props.name}</span>
					<div className={props.image}/>
		</div>
    )
}
export default POst;