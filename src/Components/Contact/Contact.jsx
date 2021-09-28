import {blue } from '@mui/material/colors';
import Button from '@mui/material/Button';  
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import watshapp from './icons/whatsapp.png';
import Facebook from './icons/facebook.png';
import Gmail from './icons/gmail.png';
import Github from './icons/github.png';
import Instagram from './icons/instagram.png';
import Messenger from './icons/messenger.png';
import Skype from './icons/skype.png';
import Telephone from './icons/telephone.png';
import Twitter from './icons/twitter.png';
import Youtube from './icons/youtube.png';
import Telegram from './icons/telegram.png';
import linkedin from './icons/linkedin.png';
import './../CSS/style.css';
const cards=[
    {
      img:`${Gmail}`,
      head:'Gmail',
      link:'mailto: bariqsiddiqui109@gmail.com'
    },
    {
      img:`${watshapp}`,
      head:'Whatsapp',
      link:'https://wa.me/3416928526'
    },
    {
      img:`${Github}`,
      head:'Github',
      link:'https://github.com/Bariq-Siddiqui'
    },
    {
      img:`${Telephone}`,
      head:'Phone',
      link:''
    },
    {
      img:`${Facebook}`,
      head:'Facebook',
      link:''
    },
    {
      img:`${Messenger}`,
      head:'Messenger',
      link:''
    },
    {
      img:`${Skype}`,
      head:'Skype',
      link:''
    },
    {
      img:`${Telegram}`,
      head:'Telegram',
      link:''
    },
    {
      img:`${Twitter}`,
      head:'Twitter',
      link:''
    },
    {
      img:`${linkedin }`,
      head:'Linkedin ',
      link:''
    },
    {
      img:`${Instagram}`,
      head:'Instagram',
      link:''
    },
    {
      img:`${Youtube}`,
      head:'Youtube',
      link:''
    }
]           
export default function Contact(){
  return(
    <>        
      <Typography sx={{ color: blue[500],textAlign:'center',fontSize:42, marginTop: 5}}>
        Welcome to Contact
      </Typography>
      <Grid container spacing={2} padding="2rem">
        {
          cards.map((card,index)=>(
            <Grid item xs={12} sm={6} md={4} lg={3} className='cardContact'>
              <Card key={index} sx={{ textAlign: "center" }}>
                <CardActionArea>
                  <CardMedia className='iconsHeight'
                    component="img"
                    // height="20%"
                    image={card.img}
                    alt="Contact Icons"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {card.head}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <a href={card.link}>
                        <Button variant="contained">Contact</Button>
                      </a>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </>
  );
}