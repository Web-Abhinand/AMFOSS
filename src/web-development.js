import React from 'react'
import './web-development.css'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import fsimg1 from './compoments/assets/stack_icon_151083.png'
import fsimg2 from './compoments/assets/full-stack-developer.webp'
import fsimg3 from './compoments/assets/Arduino_offer.png'
import fsimg4 from './compoments/assets/web (1).png'
function Webdevelopment() {
  return (
    <>
        <div className='uk-background-muted fswd-main-div1'>
            <div className='fswd-main-flex-1'>
                <div className='fswd-main-flex-div1'>
                    <div className='k1'>
                        <div className='fswd-main-icon'>
                            <img src={fsimg1} alt="" />
                        </div>
                        <div className='fswd-main-heading'>
                            <h2>FULL-STACK WEB DEVELOPMENT</h2>
                            <p>
                                Full stack web development course is a highly practical and
                                hands-on course offered by amFOSS from Amrita
                                Vishwa Vidyapeetham.
                            </p>
                            <button class="uk-button uk-button-default uk-button-large b1">Course Module</button>
                            <button class="uk-button uk-button-default uk-button-large">Register Now</button>
                        </div>
                    </div>
                </div>
                <div className='fswd-main-flex-div2'>
                    <div className="flex-div2-img">
                        <img src={fsimg2} alt="full-stack-webdevelopment" />
                    </div>
                </div>
            </div>
        </div>
        <div className='fswd-div2'>
            <Grid container spacing={2}>
                <Grid item sm={12} lg={8}>
                    <div className='fswd-div2-heading1'>
                        <Typography gutterBottom variant="h5" component="div">About the Course</Typography>
                    </div>
                    <div className='fswd-div2-text1'>
                        <p className='uk-text-default'>
                            Welcome to this Full stack course. This course is mainly based on Django and React features. We will build full applications including backend restful API and front-end web app.
                        </p>

                        <p className='uk-text-default'>
                            In this tutorial, we will build a real-life application. This course it’s a process of building the app. It's not gonna be one of those 'todo lists' or simple 'full crud' apps. We will start building that from scratch and we end up with a fully working full-stack app. Building that application will give an opportunity to explain a ton of different concepts and technics for back-end Django and front-end React.
                        </p>
                        <div className='fswd-div2-heading2'>
                            <Typography gutterBottom variant="h5" component="div">Key Highlights:</Typography>
                        </div>
                        <div className='fswd-list1'>
                            <ul class="uk-list uk-list-striped uk-list uk-list-circle uk-list-large">
                                <li>Designed for Beginners to Intermediate learners</li>
                                <li>Hands-on assignment and personalized feedback to facilitate improvement</li>
                                <li>More than 30 hours of learning</li>
                                <li>Hands-on work for practical experience</li>
                                <li>Learn in-demand skills from industry leaders, earn your certificate, and be job-ready for new roles in growing fields</li>
                                <li>Master specific skills and earn certificates to add to your resume or CV</li>
                            </ul>
                        </div>
                    </div>
                </Grid>
                <Grid item sm={12} lg={4}>
                    <div className='fswd-div2-1'>
                        <div className='fswd-div2-1__imgdiv'>
                            <img src={fsimg3} alt="offer-tag" />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
        <div className='fswd-div3'>
            <Grid container spacing={2}>
                <Grid item sm={12} lg={8}>
                    <div className='fswd-div3-heading1'>
                        <Typography gutterBottom variant="h5" component="div">About the Course</Typography>
                    </div>
                    <div className='fswd-list1'>
                        <ul class="uk-list uk-list-striped uk-list uk-list-circle uk-list-large">
                            <li>Learn about Django framework</li>
                            <li>Learn about ReactJS frontend framework</li>
                            <li>Learn about REST framework</li>
                            <li>Learn how API interact with backend and frontend</li>
                        </ul>
                    </div>
                    <div className='fswd-div3-heading1'>
                        <Typography gutterBottom variant="h5" component="div">Why attend this course</Typography>
                    </div>
                    <div className='fswd-list1'>
                        <ul class="uk-list uk-list-striped uk-list uk-list-circle uk-list-large">
                            <li>Gain an in-depth understanding of Web development</li>
                            <li>Gain new web development technologies</li>
                        </ul>
                    </div>
                    <div className='fswd-div3-heading1'>
                        <Typography gutterBottom variant="h5" component="div">Who can attend this course</Typography>
                    </div>
                    <div className='fswd-list1'>
                        <ul class="uk-list uk-list-striped uk-list uk-list-circle uk-list-large">
                            <li>Students who want to explore the area of Web development</li>
                            <li>Students who want to switch from other technologies to web development.</li>
                            <li>University Students/Passouts who want to get into the field of web development.</li>
                            <li>Beginner in full stack development</li>
                        </ul>
                    </div>
                    <div className='fswd-div3-heading1'>
                        <Typography gutterBottom variant="h5" component="div">Prerequisite</Typography>
                    </div>
                    <div className='fswd-list1'>
                        <ul class="uk-list uk-list-striped uk-list uk-list-circle uk-list-large">
                            <li>Stable Internet Connection</li>
                            <li>Basic understanding of python</li>
                            <li>Basic understanding of HTML and JS</li>
                        </ul>
                    </div>
                </Grid>
                <Grid item sm={12} lg={4}>
                    <Card sx={{ maxWidth: 320,height:630 }} className="side-card-fswd">
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            src={fsimg4}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                This course includes:
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                            <ul class="uk-list ">
                                <li className='side-list'><span uk-icon="video-camera" className='fswd-list-span'></span>5 Weeks course</li>
                                <li className='side-list'><span uk-icon="download" className='fswd-list-span'></span>Downloadable Resources</li>
                                <li className='side-list'><span uk-icon="lifesaver" className='fswd-list-span'></span>1 Month Extended Support</li>
                                <li className='side-list'><span uk-icon="code" className='fswd-list-span'></span>Industry Expert Trainers</li>
                            </ul>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="large" className='side-button'>Apply Now</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
        <div className='fswd-div4'>
            <Typography gutterBottom variant="h3" component="div" className='fswd-course-module'>
                Course Modules
            </Typography>
        </div>
        <div className='fswd-div5'>
            <Grid container spacing={4}>
                <Grid item sm={12} lg={6}>
                    <ul uk-accordion="multiple: true">
                        <li >
                            <div class="uk-accordion-title" href="#">Module 1</div>
                            <div class="uk-accordion-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </li>
                        <li>
                            <div class="uk-accordion-title" href="#">Module 2</div>
                            <div class="uk-accordion-content">
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
                            </div>
                        </li>
                        <li>
                            <div class="uk-accordion-title" href="#">Module 3</div>
                            <div class="uk-accordion-content">
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                            </div>
                        </li>
                    </ul>
                </Grid>
                <Grid item sm={12} lg={6}>
                    <ul uk-accordion="multiple: true">
                        <li>
                            <div class="uk-accordion-title" href="#">Module 4</div>
                            <div class="uk-accordion-content">
                                
                            </div>
                        </li>
                        <li>
                            <div class="uk-accordion-title" href="#">Module 5</div>
                            <div class="uk-accordion-content">
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
                            </div>
                        </li>
                        <li>
                            <div class="uk-accordion-title" href="#">Module 6</div>
                            <div class="uk-accordion-content">
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                            </div>
                        </li>
                    </ul>
                </Grid>
            </Grid>
        </div>
    </>
  )
}

export default Webdevelopment