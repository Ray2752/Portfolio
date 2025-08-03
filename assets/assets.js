import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import github from './github.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import profilepic from './profilepic.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import nextjs from './nextjs.png';
import react from './react.png';
import typescript from './typescript.png';
import javascript from './javascript.png';
import python from './python.png';
import node from './node.png';
import aws from './aws.png';
import flutter from './flutter.png';
import dart from './dart.png';
import portfolio_img from './portfolio-img.png';
import cloudservices from './cloudservices.png';
import softwareservices from './softwareservices.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    react,
    portfolio_img,
    typescript,
    softwareservices,
    javascript,
    python,
    node,
    aws,
    flutter,
    dart,
    vscode,
    firebase,
    cloudservices,
    figma,
    git,
    mongodb,
    nextjs,
    github,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    profilepic,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Code Clinic',
        description: 'Web-based IDE with multi-language support and SaaS architecture',
        bgImage: '/work-1.png',
        link: 'https://code-clinic-iota.vercel.app/'
    },
    {
        title: 'Gym & Tonic',
        description: 'AI-powered fitness platform with voice assistant and adaptive plans',
        bgImage: '/work-2.png',
        link: 'https://natalia-ai.vercel.app/'
    },
    {
        title: 'ChatterBox',
        description: 'Real-time social platform with video calling',
        bgImage: '/work-3.png',
        link: 'https://chatterbox-g0qo.onrender.com'
    },
    {
        title: 'BookEater',
        description: 'Cross-platform social network for book enthusiasts',
        bgImage: '/work-4.png',
        link: '',
        gallery: ['/work-5.png', '/work-6.png', '/work-7.png', '/work-8.png', '/work-9.png', '/work-10.png', '/work-11.png', '/work-12.png']
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Full-Stack Web Development', description: 'Complete web applications using React, Next.js, Node.js, and modern databases. From responsive frontends to robust backend APIs and cloud deployment.', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile App Development', description: 'Cross-platform mobile applications using Flutter and Dart. Native-like performance with beautiful user interfaces for iOS and Android platforms.', link: '' },
    { icon: assets.softwareservices, title: 'Software Engineering', description: 'Custom software solutions using Java, C++, Python, and TypeScript. Clean architecture, scalable systems, and efficient algorithms for complex problems.', link: '' },
    { icon: assets.cloudservices, title: 'Database & Cloud Solutions', description: 'Database design and optimization with MongoDB, SQL databases, and cloud services. AWS deployment, Firebase integration, and scalable infrastructure.', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Java, C++, JavaScript, TypeScript, Python, HTML/CSS, SQL, VBA, Dart' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Bachelor of Science in Software Engineering' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Code Clinic, Gym & Tonic, BookEater, ChatterBox, MAIA' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git, assets.nextjs, assets.github, assets.react, assets.typescript, assets.javascript, assets.python, assets.node, assets.aws, assets.flutter, assets.dart
];