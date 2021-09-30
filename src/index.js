import React from "react";
import  ReactDOM  from "react-dom";
import Card from "./Cards"
import Sdata from "./Sdata"
import "./index.css";




ReactDOM.render(
<>
<h1 className="heading_style">My Favourite Web Series!</h1>
{Sdata.map((val,index)=>{
    return(
        <Card
         imgsrc={val.imgscr}
         title={val.title}
         sname={val.sname}
         link={val.links}
 />
    );
})}
</>,
document.getElementById("root")
);