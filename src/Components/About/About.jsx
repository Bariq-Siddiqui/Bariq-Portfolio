// import { red } from '@mui/material/colors';
import '../CSS/style.css';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red,blue } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import bariq from './../image/bariq.jpg';
import bar from './../image/bar.png';
export default function About(){
    const [expanded, setExpanded] = React.useState(false);
    return(
        <>
          <Grid container spacing={2} padding="2rem" bgcolor='gainsboro'>
              <Grid className='aboudCard' margin='auto'>
                  <Card>
                      <CardHeader
                          avatar={
                            //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            //       {card.avatar}
                            //   </Avatar>
                              <Avatar alt="Remy Sharp" src={bar} />
                          }
                          action={
                              <IconButton aria-label="settings">
                              <MoreVertIcon />
                              </IconButton>
                          }
                          title="Bariq Siddiqui"
                          subheader="September 21, 2021"
                      />
                      <CardMedia
                          component="img"
                          // height="200"
                          image={bariq}
                          alt="Paella dish"
                      />
                      <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            <table>
                                <tr>
                                    <th>Name:</th>
                                    <td> &nbsp;&nbsp;&nbsp;</td>
                                    <td>Muhammad Bariq Kamran Siddiqui</td>
                                </tr>
                                <tr>
                                    <th>Father Name:</th>
                                    <td> &nbsp;&nbsp;&nbsp;</td>
                                    <td>Muhammad Shahid Kamran Siddiqui</td>
                                </tr>
                                <tr>
                                    <th>Qualification:</th>
                                    <td> &nbsp;&nbsp;&nbsp;</td>
                                    <td>BS Computer Science</td>
                                </tr>
                                <tr>
                                    <th>Course Name:</th>
                                    <td> &nbsp;&nbsp;&nbsp;</td>
                                    <td>Web and hybrid Mobile Course</td>
                                </tr>
                                <tr>
                                    <th>Teacher:</th>
                                    <td> &nbsp;&nbsp;&nbsp;</td>
                                    <td>Sir Inzamam Malik</td>
                                </tr>
                                <tr>
                                    <th>Institue:</th>
                                    <td> &nbsp;&nbsp;&nbsp;</td>
                                    <td>Saylani Mass IT Program</td>
                                </tr>
                            </table><br />
                            <ul><strong><span className='ulHead'>Skills:</span></strong> 
                                <li><i class="fab fa-html5"></i><span className='iconText'>Html 5</span> </li>
                                <li><i class="fab fa-css3-alt"></i><span className='iconText'>CSS3</span> </li>
                                <li><i class="fab fa-js-square"></i><span className='iconText'>Java Script</span> </li>
                                <li><i class="fab fa-bootstrap"></i><span className='iconText'> Bootstrap</span></li>
                                <li><i class="fab fa-react"></i><span className='iconText'> React Js</span></li>
                                <li><i class="fab fa-node"></i><span className='iconText'>Node Js</span> </li>
                                <li><i class="fab fa-mdb"></i>  <i class="fas fa-database"></i> <span className='iconText'> MongoDb</span></li>
                            </ul>
                          </Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                          <IconButton aria-label="add to favorites">
                          <ThumbUpIcon sx={{ color: blue[500] }}/>&nbsp;
                          <FavoriteIcon sx={{ color: red[600] }}/>
                          </IconButton>
                          <IconButton aria-label="share">
                          <ShareIcon />
                          </IconButton>
                          {/* <ExpandMore
                              expand={expanded}
                              onClick={handleExpandClick}
                              aria-expanded={expanded}
                              aria-label="show more"
                          >
                          <ExpandMoreIcon />
                          </ExpandMore> */}
                      </CardActions>
                      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
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
                      </Collapse> */}
                  </Card>
              </Grid>
          </Grid>
        </>
    );
}