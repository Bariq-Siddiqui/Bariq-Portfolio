import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red,blue } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SwipeableTextMobileStepper from './../slider/slider';
// import MenuAppBar from './../appbar/appBar';
import '../CSS/style.css';
// import image start
import html from "../image/html.jpg";
import css from "../image/css.jpg";
import js from "../image/js.jpg";
import firebase from "../image/firebase.png";
import mongodb from "../image/mongodb.jpg";
import nodejs from "../image/nodejs.png";
import github from "../image/github.png";
import react from "../image/react.png";
import materialui from "../image/materialui.jpg";
import express from "../image/express.jpg";
import bootstrap from "../image/bootstrap.png";
import redux from "../image/redux.jpg";
// import image end
// export class MyPage extends React.Component{
//   render(){
//     return(
//     );
//   }
// }

import MoreVertIcon from '@mui/icons-material/MoreVert';const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  const cards=[
    {
      avatar:"BS",
      title:"Bariq Siddiqui",
      date:"September 21, 2021",
      pic:`${html}`,
      msg:"HTML is the standard markup language for creating Web pages.",
      heading:"Introduction",
      text1:"HTML stands for Hyper Text Markup Language",
      text2:"HTML was first created by Tim Berners-Lee, Robert Cailliau, and others starting in 1989. It stands for Hyper Text Markup Language",
      lastmsg:"Tags and attributes are the basis of HTML.",
    },
    {
      avatar:"BS",
      title:"Bariq Siddiqui",
      date:"September 21, 2021",
      pic:`${css}`,
      msg:"CSS(Cascading Style Sheets) is the language we use to style a Web page.",
      heading:"Introduction",
      text1:"CSS stands for Cascading Style Sheets",
      text2:"CSS is the language for describing the presentation of Web pages, including colors, layout, and fonts.",
      lastmsg:"A CSS rule consists of a selector and a declaration block.",
    },
    {
      avatar:"BS",
      title:"Bariq Siddiqui",
      date:"September 21, 2021",
      pic:`${js}`,
      msg:"JavaScript is the world's most popular programming language.",
      heading:"Introduction",
      text1:"JavaScript is the programming language of the Web.",
      text2:"JavaScript is among the most powerful and flexible programming languages of the web. It powers the dynamic behavior on most websites, including this one.",
      lastmsg:"JavaScript is a fun and flexible programming language",
    },
    {
      avatar:"BS",
      title:"Bariq Siddiqui",
      date:"September 21, 2021",
      pic:`${bootstrap}`,
      msg:"Bootstrap is a open-source CSS framework directed at responsive.",
      heading:"Introduction",
      text1:"Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
      text2:"Bootstrap is an HTML, CSS & JS Library that focuses on simplifying the development of informative web pages (as opposed to web apps). ",
      lastmsg:"Bootstrap is a framework",
    },
    {
      avatar:"MB",
      title:"Muhammad Bariq",
      date:"September 21, 2021",
      pic:`${github}`,
      msg:"GitHub is a provider of Internet hosting for software development.",
      heading:"Introduction",
      text1:"It offers the distributed version control and source code management (SCM) functionality of Git, plus its own features.",
      text2:"It is commonly used to host open-source projects.",
      lastmsg:"Development of the GitHub.com platform began on October 19, 2007.",
    },
    {
      avatar:"MB",
      title:"Muhammad Bariq",
      date:"September 21, 2021",
      pic:`${firebase}`,
      msg:"Firebase isGoogle's cloud computing and development platform.",
      heading:"Introduction",
      text1:"Firebase is a platform developed by Google for creating mobile and web applications.",
      text2:"Firebase evolved from Envolve, a prior startup founded by James Tamplin and Andrew Lee in 2011.",
      lastmsg:"Firebase has been claimed to be used by Google to track users without their knowledge.",
    },
    {
      avatar:"MB",
      title:"Muhammad Bariq",
      date:"September 21, 2021",
      pic:`${react}`,
      msg:"React makes it painless to create interactive UIs.",
      heading:"Introduction",
      text1:"Design simple views for each state in your application, and React will efficiently update and render.",
      text2:"Declarative views make your code more predictable and easier to debug.",
      lastmsg:"Component logic is written in JavaScript instead of templates.",
    },
    {
      avatar:"MB",
      title:"Muhammad Bariq",
      date:"September 21, 2021",
      pic:`${materialui}`,
      msg:"Material UI is our favorite React UI library .",
      heading:"Introduction",
      text1:"The amount of work that's been put into Material UI makes it our default choice for professional projects",
      text2:"Just import the component from the library and render it like any other React component.",
      lastmsg:"Using the components is simple form.",
    },
    {
      avatar:"MB",
      title:"Muhammad Bariq",
      date:"September 21, 2021",
      pic:`${redux}`,
      msg:"Redux is a predictable state container for JavaScript apps.",
      heading:"Introduction",
      text1:"You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available.",
      text2:"Redux provides a solid, stable, and mature solution to managing state in your React application.",
      lastmsg:"Build amazing single page applications with React JS and Redux.",
    },
    {
      avatar:"MB",
      title:"Muhammad Bariq",
      date:"September 21, 2021",
      pic:`${nodejs}`,
      msg:"Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
      heading:"Introduction",
      text1:"Node.js is an open source server environment.",
      text2:"Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)",
      lastmsg:"Node.js is free. Node.js uses JavaScript on the server",
    },
    {
      avatar:"MB",
      title:"Muhammad Bariq",
      date:"September 21, 2021",
      pic:`${express}`,
      msg:"Express is a minimal and flexible Node.js web application framework.",
      heading:"Introduction",
      text1:"Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
      text2:"With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.",
      lastmsg:"Many popular frameworks are based on Express.",
    },
    {
      avatar:"MB",
      title:"Muhammad Bariq",
      date:"September 21, 2021",
      pic:`${mongodb}`,
      msg:"The Easiest Way to Deploy, Operate, and Scale MongoDB in the Cloud in Just a Few Clicks.",
      heading:"Introduction",
      text1:"Create Deployments in Minutes w/ MongoDB Atlas. Supporting AWS. Types: Avail. on AWS, GCP, Azure, Zero-downtime migration, Pay as you go.",
      text2:"High-performing, secure, highly available, and scalable data service. One-click recovery avoids data loss caused by misoperations",
      lastmsg:"MongoDB is the most popular database for modern apps.",
    }
  ];
export default function Home(){
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    return(
        <>
        <SwipeableTextMobileStepper/>
        <Typography sx={{ color: blue[500],textAlign:'center',fontSize:36 }}>
          Web And Hybrid Mobile Course
        </Typography>;
        {/* <MenuAppBar/> */}
          <Grid container spacing={2} padding="2rem">
          {
            cards.map((card,index)=>
             (
              <Grid item xs={12} sm={6} md={4} lg={4}>
                  <Card key={index} className='cardHome'>
                      <CardHeader
                          avatar={
                              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                  {card.avatar}
                              </Avatar>
                          }
                          action={
                              <IconButton aria-label="settings">
                              <MoreVertIcon />
                              </IconButton>
                          }
                          title={card.title}
                          subheader={card.date}
                      />
                      <CardMedia
                          component="img"
                          // height="200"
                          image={card.pic}
                      />
                      <CardContent>
                          <Typography variant="body2" color="text.secondary">
                              {card.msg}
                          </Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                          <IconButton aria-label="add to favorites">
                          <FavoriteIcon />
                          </IconButton>
                          <IconButton aria-label="share">
                          <ShareIcon />
                          </IconButton>
                          <ExpandMore
                              expand={expanded}
                              onClick={handleExpandClick}
                              aria-expanded={expanded}
                              aria-label="show more"
                          >
                          <ExpandMoreIcon />
                          </ExpandMore>
                      </CardActions>
                      <Collapse in={expanded} timeout="auto" unmountOnExit>
                          <CardContent>
                              <Typography paragraph>{card.heading}</Typography>
                              <Typography paragraph>
                                  {card.text1}
                              </Typography>
                              <Typography paragraph>
                                  {card.text2}
                              </Typography>
                              <Typography>
                                  {card.lastmsg}
                              </Typography>
                          </CardContent>
                      </Collapse>
                  </Card>
              </Grid>
             ))
          }
          </Grid>   
        </>
    );  
}