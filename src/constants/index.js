import { PiStudentBold } from "react-icons/pi";
import { GoGoal } from "react-icons/go";
import { FaComputer } from "react-icons/fa6";
import { BiSolidVideoRecording } from "react-icons/bi";
import { SiTestcafe } from "react-icons/si";
import { LuMessagesSquare } from "react-icons/lu";
import { TbMathSymbols } from "react-icons/tb";
import { MdScience } from "react-icons/md";
import { RiEnglishInput } from "react-icons/ri";

import classes from "../assets/featureImages/classes.jpeg";
import goals from "../assets/featureImages/goals.jpg";
import online from "../assets/featureImages/online.jpg";
import recorded from "../assets/featureImages/recorded.jpg";
import tests from "../assets/featureImages/tests.jpg";
import doubt from "../assets/featureImages/doubt.jpg";

import abhimanuGaba from "../assets/results/AbhimanuGaba.jpg";
import arnavBansal from "../assets/results/ArnavBansal.jpg";
import hardikSachdeva from "../assets/results/HardikSachdeva.jpg";
import palakGarg from "../assets/results/PalakGarg.jpg";
import sanskritiKaran from "../assets/results/sanskritikaran.jpg";
import shreeyaShawney from "../assets/results/shreeyaShawney.jpg";

const courses = [
  {
    class: "Class IX",
    brief:
      "The team of subject experts at conceptual learning works with an aim to provide CBSE class 9 th students with an all-inclusive study module. The conceptual learning class 9 module is designed to create abroad platform for learning objective subjects like maths and science, and strengthen students’ knowledge in theory and language subjects as well. Notes available for class 9 CBSE students include detailed explanation for all topics as well as engaging animated vides to support the text. course material provided by us of Math, Science, English, Social Studies and Hindi for CBSE class 9 is sufficient to excel the best in the exam and moreover with our weekly test schedule, makes them perfect along with quizzes after every topic makes students understand the concept clearly.",
    subjects: [
      {
        title: "CBSE Class 9 th Maths",
        icon : TbMathSymbols,
        chapters: [
          "Number system",
          "Polynomials",
          "Coordinate geometry",
          "Linear equation in two variable",
          "Lines and angles",
          "Quadrilaterals",
          "Surface area and volume",
        ],
      },
      {
        title: "CBSE Class 9- Science",
        icon: MdScience,
        chapters: [
          "Matter in Our Surrounding",
          "Is Matter Around Us Pure.",
          "Atoms & Molecules",
          "The Fundamental unit of life",
          "Tissues",
          "Motion",
          "Force and law of motion",
        ],
      },
      {
        title: "CBSE Class 9 – English",
        icon : RiEnglishInput,
        chapters: [
          "Articles",
          "Nouns",
          "Pronouns",
          "Adjectives",
          "Adverbs",
          "Verbs",
        ],
      },
    ],
    attributes: [
      "Engaging chapter notes with videos and activities for CBSE Class 9",
      "Worksheet with every class for thorough preparation.",
      "Free NCERT solution based on CBSE curriculum.",
      "Weekly Test for thorough progress.",
      "Personalized assessment of progress available to students.",
      "Personalized doubt classes with teachers.",
      "Interactive quiz after every topic for further clearance.",
    ],
    additional_info:
      "Additionally, our curriculum for CBSE Class 9 students accommodate the vast syllabus prescribed by the Board. We aspire to tackle and simplify the most difficult portions in Class 9 Math and Class 9 Science that students usually struggle with. Students of CBSE Class 9 can now look beyond the anxiety that comes with studying and exams, and learn the smart way.",
  },
  {
    class: "Class X",
    brief:
      "Class 10 is considered a crucial stage in the academic life of CBSE students. The pressure, the amount of syllabus as well as the impending board exams contribute to students' anxiety. For students in CBSE class 10 experiencing their first set of Board exams, conceptual learning provides a comprehensive study package. This means, our study module is basically they need to become fully adept in solving, analysing, calculating and expressing. Notes provided by us are engaging and help students explore new ways to look at questions and their solutions. The interactive videos, animations and graphic illustrations take the monotony out of studying, thereby giving students the opportunity to carve their way to successful exam preparation. The study material for CBSE class 10 is available for Science, Math, Social Studies, English and Hindi.",
    subjects: [
      {
        title: "CBSE Class 10 MAth",
        icon : TbMathSymbols,
        chapters: [
          "Real Number",
          "Polynomials",
          "Pairs of Linear eq in Two variables",
          "Quadratic equations",
          "Arithmetic progression",
          "Coordinate Geometry",
          "Similar Triangle",
          "Introduction to Trigonometry",
          "Some Application of Trigonometry",
          "Circles",
          "Areas Related to Circles",
          "Surface areas and volumes",
        ],
      },
      {
        title: "CBSE Class 10 -Science",
        icon: MdScience,
        chapters: [
          "Chemical Reaction n Equation",
          "Acids, Bases and Salts",
          "Metals and non-Metals",
          "Carbon and its compounds",
          "Life processes",
          "Control n coordination",
          "How Do Organisms Reproduce",
          "The Human Eye",
          "Electricity",
          "Magnetic effect of electric current",
        ],
      },
    ],
    attributes: [
      "Innovative way of teaching with proper animations and activities.",
      "Exclusive study material to understand the concepts.",
      "Excellent assessment methods Weekly test to evaluate what the student understands and what needs to be improved.",
      "Quiz after every topic makes all hidden doubts cleared and brings confidence.",
      "Sample papers and Board paper for CBSE Class 10",
      "Free NCERT solutions based on the CBSE Syllabus.",
      "Notes covered different types of questions from NCERT, Exampler, R.D.Sharma, R.S Agarwal.",
      "Personalized reports and assessment of preparation with growth chart.",
      "Monthly attendance report to parents.",
    ],
    additional_info:
      "Conceptual learning aims at leaving no stone unturned in ensuring all round education and preparation for Board exams. CBSE Class 10 students can practice, revise and learn efficiently and ensure high scores in the process. Students at conceptual learning can avail study modules prepared by our expert while preparing CBSE Class 10 Math and Science.",
  },
];

const results = [
  {
    image: abhimanuGaba,
    name: "Abhimanu Gaba",
    maths: 98,
    science: 95,
  },
  {
    image: arnavBansal,
    name: "Arnav Bansal",
    maths: 97,
    science: 98,
  },
  {
    image: hardikSachdeva,
    name: "Hardik Sachdeva",
    maths: 97,
    science: 95,
  },
  {
    image: palakGarg,
    name: "Palak Garg",
    maths: 97,
    science: 95,
  },
  {
    image: sanskritiKaran,
    name: "Sanskriti Karan",
    maths: 96,
    science: 95,
  },
  {
    image: shreeyaShawney,
    name: "Shreeya Shawney",
    maths: 98,
    science: 99,
  },
];

const features = [
  {
    icon: PiStudentBold,
    title: "Multiple Weekly Classes",
    paragraph:
      "Dive into the best learning experience with our multiple weekly classes. Our schedule ensures you can explore various topics, enhance your skills, and get the desired result.",
    image: classes,
  },
  {
    icon: GoGoal,
    title: "Goal Setting and Achievement",
    paragraph:
      "We help you empower your aspirations. Define clear objectives and create actionable plans with our guidance, propelling you towards personal and professional success.",
    image: goals,
  },
  {
    icon: FaComputer,
    title: "Online support",
    paragraph:
      "Experience continuous growth with our dedicated online support. Connect with our teacher, access resources, and stay motivated on your learning journey, wherever you are. Your success is just a click away.",
    image: online,
  },
  {
    icon: BiSolidVideoRecording,
    title: "Recorded Lectures",
    paragraph:
      "Never miss a moment of insight with our recorded lectures. Accessible anytime, these recordings ensure you can revisit valuable lessons, grasp concepts at your own pace, and reinforce your learning journey with flexibility.",
    image: recorded,
  },
  {
    icon: SiTestcafe,
    title: "Weekly Tests",
    paragraph:
      "Evaluate your progress and reinforce your learning with our weekly tests. Designed to challenge and enhance your understanding, these assessments provide valuable insights to keep you on track towards your goals.",
    image: tests,
  },
  {
    icon: LuMessagesSquare,
    title: "Doubt class",
    paragraph:
      "Our dedicated sessions provide a supportive environment for addressing questions, clarifying concepts, and ensuring you confidently navigate your learning journey with clarity and understanding.",
    image: doubt,
  },
];

const testimonials = [
  {
    author: "Laisha Kapoor",
    comment:
      "It is very easy to understand through the interactive mose through which we are taught here and it is one of the best experiences a student can be taught through. Tests ate taken up on every Sunday, which allows student to expand their thinking capacity.",
  },
  {
    author: "Ridhi",
    comment:
      "It is very easy to understand through sir. Amazing experience of studying in conceptual learning, regular tests and interactive classes are taken",
  },
  {
    author: "Hriday Sultania",
    comment:
      "Sir uses a projector to make us understand. The animation in science helps me a lot to understand the logic. He gives all the all the students chance to answer and attracts with all the students for their doubts",
  },
  {
    author: "Reena Anand",
    comment:
      "Many confusion ONE SOLUTION and that is CONCEPTUAL LEARNING. If you really serious about your study Than this is best among all , they will help you beyond your expectation. Highly recommend to each aspirant.they deserv one thn 5 starts..thanks you @Sandeep bhasin Sir",
  },
  {
    author: "Ashish Gupta",
    comment:
      "It is very easy to understand through sir, as they explained in a very easy way and from which they teach is also best",
  },
  {
    author: "Asees Arneja",
    comment:
      "Amazing experience of studying in conceptual learning . With the unique way of teaching all the concepts are cleared. Regular tests are taken for checking the performance of each individual and if there's any doubt in any topic ,extra classes are also scheduled.",
  },
  {
    author: "Hitesh Sahni",
    comment:
      "Truly dedicated and humble personality with utmost dedication, empathy and care towards his students. A student is in safest possible hands to build his/her core foundation of life. #Gratitude",
  },
  {
    author: "Majestic Titan",
    comment:
      "It's a great experience studying at conceptual learning. The learning atmosphere is the best . The teacher is so cooperative and kind . Sir shows faith in us and encourages us to do more hardwork.I recommend  that you should give conceptual learning a shot. I am grateful for all the efforts the teacher puts in.",
  },
  {
    author: "Riya Gupta",
    comment:
      "I have been studying here since almost 5years and my experience has been brilliant with them.The study pattern,the environment,the material everything was so effective.Here the teachers are truly a friend who allows us to get comfortable and they apply  their 100% effort in teaching",
  },
  {
    author: "Shubhra Atreja",
    comment:
      "An educational point with a friendly and comfortable aura. The teachers are really great and focus on the overall growth of the students. Perfect balance of studying and fun, the classes can never get boring. One of the best things is that the teachers always have their arms open for extra classes or doubt solving classes at any point of time. Regular tests are held, this Institute is truly amazing.",
  },
  {
    author: "Dhriti Aggarwal",
    comment:
      "The teaching is very good and interactive, all concepts are clear personal attention is also given with efficient assignments and tests",
  },
  {
    author: "Neelam Wadhwa",
    comment:
      "The best coaching in the vicinity. The teacher puts in a lot of individual effort to make sure that all the concepts are clear. Regular tests, revision and extra classes are conducted. There is more interaction between the students and teacher as the number of students is limited. The teacher is very diligent and gives his 100%. He also gives individual classes as and when required. His years of experience in the subjects is commendable.",
  },
  {
    author: "Aayushi Singh",
    comment:
      "Sandeep Sir's manner of teaching is soo amazing and understandable!! He's great at building confidence and making lessons fun and interactive. He's patient and supportive and knows how to keep motivating his students. In my opinion the best teacher I have ever had.",
  },
  {
    author: "Hitarth Sachdeva",
    comment:
      "This is the best institute ever. Sir is very hardworking and teaches very well. Each and every concept is clear. The way of teaching is very unique and interactive.",
  },
  {
    author: "Hardik Sachdeva",
    comment:
      "Best institute for Studying. It feels great here because of a good environment to study. I was able to understand all the concepts here and in case i had any doubts, they were cleared within the same class.",
  },
  {
    author: "Divija Chhabra",
    comment:
      "This is the best coaching institute for students who are looking for clearing their basics and building their knowledge, especially in the sectors of maths of science. My personal experience with the teachers has been really great! The teachers are friendly and ways of teaching are quite appreciable. Whoever comes here never leaves unsatisfied..All precautionery measures with respect to COVID-19 are also being taken for the safety...Its definitely worth😀😀",
  },
  {
    author: "Angel Gupta",
    comment:
      "This institution is the best institution i found yet. Conceptual learning clear all my doubts. This is the place where i have build my confidence level and now i can answer all the questions in school without any hesitation.during this pandemic also this institute had try its best to give a enjoyable and understandable learning,as a good and helpful student i recommend you to try once.",
  },
  {
    author: "Grantik Sahni",
    comment:
      "My sir is very thorough and take careful measures in helping me grasp the concept more carefully and helps me to concentrate on my study very well.That has made me really think about how I should come up with the answer.I like how he is straight forward and answers our every single doubt to the point.Great sir ever had!!!",
  },
  {
    author: "Sarita Chaudhary",
    comment:
      "Absolutely one of the finest learning places i have chosen for my daughter. They are excellent teachers. Hearts of teachers brimmed with love and patience for the students have given no possibility for any sense of discouragement, despondency or pessimism among students. Everything from revision tests to discipline are maintained or carried out in a systematic way which increases the proficiency of learners.",
  },
  {
    author: "Prabhleen Kaur",
    comment:
      "Studying in this Institute is really intriguing.... As the teachers in the Institute create such exciting ways to explain a concept and provide you a platform to conveniently showcase your skills and knowledge..",
  },
  {
    author: "Meenu",
    comment:
      "Best place for build your future whosoever had come here is never gone upset or doubtful. Once you come here you will never leave till you study in school. Trust me he is a world best teacher i have ever seen , he is just a knowledge book. SANDEEP SIR is the best teacher in the world😀 …",
  },
  {
    author: "Abhinav Jha",
    comment: "Concepts are crystal clear. Good teaching 👍 …",
  },
  {
    author: "Payal Mehta",
    comment:
      "100% satisfied with Sandeep sir. I have never seen any teacher doing so much of hard work for his students. My son Aryan Mehta is very lucky to have Sandeep sir as his teacher.",
  },
];

export { features, testimonials, results, courses };
