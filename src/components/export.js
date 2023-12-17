import { PercentCircle,GraduationCap, Calendar, Award, SquareCode, Linkedin, Code2, Github, Scissors, Brush} from 'lucide-react'

export const info = [
  {
    id : 1,
    icon : <GraduationCap style={{backgroundColor:"transparent",opacity: "0.8"}}/>,
    info_detail : "Vellore Institute Of Technology"
  },
  {
    id : 2,
    icon : <Award style={{backgroundColor:"transparent",opacity: "0.8"}}/>,
    info_detail : "Integrated MTech"
  },
  {
    id : 3,
    icon : <SquareCode style={{backgroundColor:"transparent",opacity: "0.8"}}/>,
    info_detail : "Computer Science"
  },
  {
    id : 4,
    icon :  <Calendar style={{backgroundColor:"transparent",opacity: "0.8"}}/>,
    info_detail : "Graduation sept 23, 2023"
  },
  {
    id : 5,
    icon :  <PercentCircle style={{backgroundColor:"transparent",opacity: "0.8"}}/>,
    info_detail : "8.55 CGPA"
  },

]

export const social = [
  {
    id : 1,
    icon :  <Linkedin color='#00b6ef' style={{backgroundColor:"transparent",opacity: "0.8"}} />,
    info_detail : "Linkedin",
    href:"https://www.linkedin.com/in/kalyan-labhishetty-b16a90179/"
  },
  {
    id : 2,
    icon : <Github color='cyan' style={{backgroundColor:"transparent",opacity: "0.8"}}/>,
    info_detail : "Github",
    href:"https://github.com/SaikalyanLabhishetty"
  }
]

export const hobbies=[
  {
    id:1,
    icon:<Brush color='#EF959D' style={{backgroundColor:"transparent",opacity: "0.8"}} />,
    info_detail : "graphic designer",
    href:"https://eccentricpixel.onrender.com/"
  }
]

export const projects = [
    {
      id:1,
      image:'https://turningpointcentre.com/assets/img/fact-files-banner/career-guidance.jpg',
      altimg:"cgp-image",
      Name:"Career guidance portal",
      year:"2023 (in progess)",
      href:"",
      target:"_blank",
    },
    {
      id:2,
      image:'./image/ep.jpeg',
      altimg:"ps-image",
      Name:"Eccentricpixel",
      year:2023,
      href:"https://eccentricpixel.onrender.com/",
      target:"_blank",
    },
    {
      id:3,
      image:'./image/photo_3.png',
      altimg:"rp-image",
      Name:"Risk Prediction",
      year:2023,
      href:"https://github.com/SaikalyanLabhishetty/Risk-Prediction-Using-Flask-Framework",
      target:"_blank"
    },
    {
      id:4,
      image:'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/23/92/7d/23927dcf-9208-6d4d-eee6-6f03cdf7f150/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x600wa.png',
      altimg:"As-image",
      Name:"Aarogya-setu Application",
      year:2023,
      href:"https://github.com/SaikalyanLabhishetty/Arogya-setu-sample-app",
      target:"_blank"
    }
  ]

  export const experience = [
    {
      id:1,
      image:'./image/ps.png',
      altimg:"ps-image",
      Name:"Software Engineer - Intern",
      year:"2022-2023"
    }
  ]

  export const certificates = [
    {
      id:1,
      url:"https://www.linkedin.com/in/kalyan-labhishetty-b16a90179/details/certifications/",
      name:"Oracle Cloud Infrastrcuture",
      img:"./image/oracle.png",
      alt:"oracle",
      year:"September 2023"
    },
    {
      id:2,
      url:"https://www.linkedin.com/in/kalyan-labhishetty-b16a90179/details/certifications/",
      name:"HackerRank MySQL",
      img:'./image/sql.png',
      alt:"hackerrank",
      year:"September 2023"
    }
  ]
  