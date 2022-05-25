import React from 'react'
import './main.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css';
import img2 from './assets/background.jpg'
import img3 from './assets/alumni21.png'
import img4 from './assets/16_flipkart.svg'
import img5 from './assets/01_google.svg'
import img6 from './assets/brand4.png'
import img7 from './assets/11_vmware.svg'
import img8 from './assets/user-male-circle.png'
import img9 from './assets/user-female.png'
import img10 from './assets/james-brown.png'
import img11 from './assets/full-stack.jpeg'
import img12  from './assets/flutter-logo-4k-qn.jpg'
import img13 from './assets/Traboda.png'
import img14 from './assets/ARDUINO.png'
import img15 from './assets/code-it-your-way.jpg'
import img16 from './assets/Malware-analysis.jpg'
import img17 from './assets/Gsoc2020.jpg'
import img18 from './assets/02_microsoft.svg'
import img19 from './assets/03_intel.svg'
import img20 from './assets/04_ibm.svg'
import img21 from './assets/05_qualcomm-logo.svg'
import img22 from './assets/10_red-hat.svg'
import img23 from './assets/07_cisco.svg'
import img24 from './assets/08_hp.svg'
import img25 from './assets/22_samsung.svg'
import img26 from './assets/21_salesforce.svg'
import img27 from './assets/23_sap.svg'
import img28 from './assets/19_reuters.svg'
import img29 from './assets/26_motorola.svg'
import '../../node_modules/uikit/dist/js/uikit'
import '../../node_modules/uikit/dist/css/uikit.css'
import Icons from'../../node_modules/uikit/dist/js/uikit-icons'
import UIkit from 'uikit'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { CardActionArea } from '@mui/material';
import SwiperCore, {
    Autoplay,
  } from 'swiper';
  import { Navigation, Scrollbar, A11y, Mousewheel,FreeMode} from 'swiper';
SwiperCore.use([Autoplay,Navigation, Scrollbar, A11y, Mousewheel,FreeMode]);
UIkit.use(Icons);
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
function Main() {
  return (
    <div className='main-sec-div1'>
        <div className='main-sec-image1'>
            <img src={img2} alt="" />
        </div>
        <div className='our-courses'>
            <p>GET COURSES</p>
        </div>
        <div className='our-courses-flex1'>
            <div className='flex1-col-1'>
            <Card >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        src={img11}
                        alt="full-stact-web"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            FULL - STACK WEB DEVELOPMENT
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            This course is mainly based on Django and React features. We will build full applications including backend restful API and front-end web app. This course’s a process of building the app. It's not gonna be one of those 'todo lists' or simple 'full crud' apps. We will start building that from scratch and we end up with a fully working full-stack app.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>

            </div>
            <div className='flex1-col-2'>
            <Card >
                <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    src={img12}
                    alt="flutter"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        FLUTTER DEVELOPMENT COURSE
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Welcome to this Flutter Development course. Flutter - a framework developed by Google - allows you to learn one language (Dart) and build beautiful native mobile apps in no time. Flutter is a SDK providing the tooling to compile Dart code into native code and it also gives you a rich set of pre-built and pre-styled UI elements (so called widgets) which you can use to compose your user interfaces
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            </div>
            <div className='flex1-col-3'>
            <Card >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="150"
                        src={img13}
                        alt="Traboda"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            TRABODA CERTIFIED WEB APPLICATION PENTESTER
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Web Application Pentesting course is a highly practical and hands-on course offered by Amrita Center for Cybersecurity in association with team bi0s and certified by Traboda. This course will help you to practice the art of exploiting web applications and learn about the attacker's tools and methods in order to be a more powerful defender.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            </div>
        </div>
        <div className='our-courses-flex2'>
            <div className='flex2-col-1'>
                <Card >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            src={img14}
                            alt="Arduino"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                ARDUINO COURSE FOR BEGINNERS
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This course is for students, hobbyists, makers, and engineers who want to learn the Arduino from basics and have a kickstart on electronic product development. At the completion of course, you will be able to make prototype boards from simple buttons and LEDs, to simple game development.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
            <div className='flex2-col-2'>
                <Card >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            src={img15}
                            alt="code it in your way"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                CODE IT IN YOUR WAY
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Designed for 6-1O grade students, this course introduces students to the foundational concepts of computer science and challenges them to explore how computing and technology can impact the world. This eight week course can be taught as an introductory course. No prerequisites required for students or teachers new to computer science!.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
            <div className='flex2-col-3'>
                <Card >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            src={img16}
                            alt="Malware-analysis"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                INTRODUCTION TO MALWARE ANALYSIS
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                More details update soon.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
        <div className='our-courses-flex3'>
            <div className='flex3-col-1'>
                <Card >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            src={img17}
                            alt="GSOC"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                CRACKING GOOGLE SUMMER OF CODE COURSE(GSOC)
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                More details update soon.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
        <div className='ad-alumini'>
            <img src={img3} alt="" />
        </div>
        <div className='ad'>
            {/* <div className='brands'>
                <div className='brands1'>
                    <div className='flipkart'>
                        <img src={img4} alt="" />
                    </div>
                    <div className='google'>
                        <img src={img5} alt="" />
                    </div>
                </div>
                <div className='brands2'>
                    <div className='aamazon'>
                        <img src={img6} alt="" />
                    </div>
                    <div className='vmware'>
                        <img src={img7} alt="" />
                    </div>
                </div>
            </div> */}
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={6} md={6} lg={3}>
                        <Item className='grid-item-brands'><img src={img4} alt="" /></Item>
                    </Grid>
                    <Grid item xs={6} md={6} lg={3}>
                        <Item className='grid-item-brands'><img src={img5} alt="" /></Item>
                    </Grid>
                    <Grid item xs={6} md={6} lg={3}>
                        <Item className='grid-item-brands'><img src={img6} alt="" /></Item>
                    </Grid>
                    <Grid item xs={6} md={6} lg={3}>
                        <Item className='grid-item-brands'><img src={img7} alt="" /></Item>
                    </Grid>
                    <Grid item xs={6} md={6} lg={3}>
                        <Item className='grid-item-brands'><img src={img18} alt="" /></Item>
                    </Grid>
                    <Grid item xs={6} md={6} lg={3}>
                        <Item className='grid-item-brands'><img src={img19} alt="" /></Item>
                    </Grid>
                    <Grid item xs={6} md={6} lg={3}>
                        <Item className='grid-item-brands'><img src={img20} alt="" /></Item>
                    </Grid>
                    <Grid item xs={6} md={6} lg={3}>
                        <Item className='grid-item-brands'><img src={img21} alt="" /></Item>
                    </Grid>
                    <Grid item xs={6} md={6} lg={3}>
                        <Item className='grid-item-brands'><img src={img22} alt="" /></Item>
                    </Grid>
                    <Grid item xs={6} md={6} lg={3}>
                        <Item className='grid-item-brands'><img src={img23} alt="" /></Item>
                    </Grid>
                    <Grid item xs={6} md={6} lg={3}>
                        <Item className='grid-item-brands'><img src={img24} alt="" /></Item>
                    </Grid>
                    <Grid item xs={6} md={6} lg={3}>
                        <Item className='grid-item-brands'><img src={img25} alt="" /></Item>
                    </Grid>
                    <Grid item xs={6} md={6} lg={3}>
                        <Item className='grid-item-brands'><img src={img26} alt="" /></Item>
                    </Grid>
                    <Grid item xs={6} md={6} lg={3}>
                        <Item className='grid-item-brands'><img src={img27} alt="" /></Item>
                    </Grid>
                    <Grid item xs={6} md={6} lg={3}>
                        <Item className='grid-item-brands'><img src={img28} alt="" /></Item>
                    </Grid>
                    <Grid item xs={6} md={6} lg={3}>
                        <Item className='grid-item-brands'><img src={img29} alt="" /></Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
        <div className='our-features'>
            <p>OUR <span className='features'>FEATURES</span></p>
        </div>
        <div className='our-feature-main-div'>
            <div className='our-feature-flex1'>
                <div>
                    Beginner to Advanced Level Training
                </div>
                <div>
                    More Comfortable Learning Environment
                </div>
                <div>
                    One Month Extended Support
                </div>
            </div>
            <div className='our-feature-flex2'>
                <div>
                    Make discussions meaningful.
                </div>
                <div>
                    Certificate from Amrita Center for Cyber Security, Amfoss and Team biOs
                </div>
                <div>
                    Industry Ready Courses
                </div>
            </div>
        </div>
        <div className='slide'> 
            <Swiper className="mySwiper"  id='main'
                                slidesPerView={1}
                                mousewheel={true}
                                direction={'horizontal'}
                                height={window.innerHeight}
                                pagination={{ clickable: true }}
                                // scrollbar={{ scrollable: true }}
                                autoplay={{delay:3000,disableOnInteraction: false}}
                                scrollbar={{ draggable: true }}
                                loop={true}
                                navigation={true}>
                <SwiperSlide ><img src={img8} alt="" /></SwiperSlide>
                <SwiperSlide ><img src={img9} alt="" /></SwiperSlide>
                <SwiperSlide ><img src={img10} alt="" className='face' /></SwiperSlide>
            </Swiper>
        </div>
        <div className='footer'>
            <div className=''>
                <div>amFOSS Trainings</div>
                <p>Don't hesitate to give us a call or send us a message in our social media</p>
                <div className='social-media'>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                      <div uk-icon="icon: facebook; ratio: 2"></div>
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                      <div uk-icon="icon: twitter; ratio: 2"></div>
                    </a> 
                    <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer">
                      <div uk-icon="icon: instagram; ratio: 2"></div>
                    </a>  
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                      <div uk-icon="icon: linkedin; ratio: 2"></div>
                    </a> 
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                      <div uk-icon="icon:  github; ratio: 2"></div>
                    </a> 
                </div>
            </div>
            <div className=''>
                <div>
                    <h4>Our Location</h4>
                    <p>Amritapuri, Kollam, Kerala, India.</p>
                </div>
                <div>
                    <h4>Our Location</h4>
                    <p>shogilpp@am.amrita.edu</p>
                    <p>rahulm@am.amrita.edu</p>
                </div>
                <div>
                    <h4>Website</h4>
                    <p>www.amfoss.in</p>
                </div>
                <div>
                    <h4>Contact Number</h4>
                    <p>9745626449</p>
                </div>
            </div>
            <div className=''>
                <h1>Gallery</h1>
            </div>
        </div>
    </div>
  )
}

export default Main