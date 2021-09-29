import React from "react";
import  ReactDOM  from "react-dom";
import Card from "./Cards"
import Sdata from "./Sdata"
import "./index.css";


ReactDOM.render(
<>
<h1 className="heading_style">My Favourite Web Series!</h1>
<Card
 imgsrc={Sdata[0].imgscr}
 title={Sdata[0].title}
 sname={Sdata[0].sname}
 link={Sdata[0].links}
 />

 <Card
 imgsrc="https://www.hdwallpaper.nu/wp-content/uploads/2019/10/lucifer-1.jpg"
 title="A Netflix Original Series"
 sname="LUCIFER"
 link="https://www.netflix.com"
 />
 <Card
 imgsrc="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201902/mirzapur_thumb.jpeg?FDKkc_RBidQNSMawskkTHeTlDIVsNZQt"
 title="A Amazon Original Series"
 sname="MIRZAPUR"
 link="https://www.netflix.com"
 />

</>,
document.getElementById("root")
);