import {blue } from '@mui/material/colors';
import Button from '@mui/material/Button';  
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './../CSS/style.css';
import Grid from '@mui/material/Grid';
import weather from './images/weather.PNG';
import Counter from './images/Counter.PNG';
import changestate from './images/changestate.PNG';
import post from './images/post.PNG';
import quiz from './images/quiz.PNG';
import tic from './images/tic.PNG';
import allpro from './images/allpro.PNG';
import timer from './images/timer.PNG';
import watch from './images/watch.PNG';
import cal from './images/cal.PNG';
import todo from './images/todo.PNG';
import food from './images/food.PNG';
const Projects=[
    {
        img:`${weather}`,
        head:'Weather App',
        link:'https://weatherapp-b37c2.web.app/'
    },
    {
        img:`${post}`,
        head:'Facebook Post',
        link:'https://react-post-ff8c1.web.app/'
    },
    {
        img:`${Counter}`,
        head:'Counter App',
        link:'https://react-post-ff8c1.web.app/'
    },
    {
        img:`${changestate}`,
        head:'Change State App',
        link:'https://react-post-ff8c1.web.app/'
    },
    {
        img:`${quiz}`,
        head:'Quiz App',
        link:'https://bariq-siddiqui.github.io/QuizApp/'
    },
    {
        img:`${tic}`,
        head:'Tic Tac Toe Game',
        link:'https://bariq-siddiqui.github.io/Tic-Tac-Toe-Game/'
    },
    {
        img:`${allpro}`,
        head:'Html,CSS & JS Project',
        link:'https://bariq-all-projects.web.app/'
    },
    {
        img:`${timer}`,
        head:'Timer App',
        link:'https://bariq-siddiqui.github.io/Project-Timer-App/'
    },
    {
        img:`${watch}`,
        head:'Stop Watch App',
        link:'https://bariq-siddiqui.github.io/Project-Stop-Watch/'
    },
    {
        img:`${cal}`,
        head:'Calculator App',
        link:'https://bariq-siddiqui.github.io/update-Calculator/'
    },
    {
        img:`${todo}`,
        head:'Todo App',
        link:'https://bariq-siddiqui.github.io/TodoApp/index.html'
    },
    {
        img:`${food}`,
        head:'Food Delivery App',
        link:'https://bariq-siddiqui.github.io/FoodApp/'
    }
]
export default function Project(){
    return(
        <>        
      <Typography sx={{ color: blue[500],textAlign:'center',fontSize:42, marginTop: 5}}>
        Welcome to My Projects
      </Typography>
      <Grid container spacing={2} padding="2rem">
        {
          Projects.map((project,index)=>(
            <Grid item xs={12} sm={6} md={4} lg={3} className='cardContact'>
              <Card key={index} sx={{ textAlign: "center" }}>
                <CardActionArea>
                  <CardMedia className='projectPic'
                    component="img"
                    // height="20%"
                    image={project.img}
                    alt="project Picture"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {project.head}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <a href={project.link} target="_blank">
                            <Button variant="contained">Visit</Button>
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
