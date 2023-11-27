// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Jordan",
  middleName: "",
  lastName: "LIU",
  message: " Passionate about use AI and Machine Learning to change the world. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/j40pl7llyccl",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/j40pl7lly/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/hsinkuo-liu-51b889273/",
    },
  ],
};



const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/liu.jpg"),
  imageSize: 375,
  message:
    "I am a data science engineer, nice to meet you guys.",
  resume: "https://docs.google.com/document/d/1KQQRhMD54OK6K2bIcqGsxpc_YaiupVG4NO-ew7aG1-Y/edit",
};

const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "j40pl7llyccl", 
  reposLength: 0,
  specificRepos: ["whisper_mic_chatbot2", "Spider_by_python", "privacy_faceemotionrecognition_system", "home"],
};


// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "j40pl7lly@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'BigData Engineer',// Here Add Company Name
      companylogo: require('../assets/img/bessky.png'),
      date: '2019/06 – 2020/02',
    },
    {
      role: 'DataBase Engineer',
      companylogo: require('../assets/img/yesstech.png'),
      date: '2018/04 – 2019/05',
    },
    {
      role: 'BigData Engineer',
      companylogo: require('../assets/img/systex.png'),
      date: '2017/04 – 2018/02',
    },
  ]
}



export { navBar, mainBody, about, repos, skills, getInTouch, experiences };
