"use strict";
/*
    Level 2 Task 6
        created by Gwinyai Chakonda
*/

$(document).ready(function () {
  //============= Assignments ===============

  const frontendSkills = [
    { name: "HTML", level: "Experienced" },
    { name: "CSS", level: "Intermediate" },
    { name: "Bootstrap", level: "Experienced" },
    { name: "Tailwind", level: "Experienced" },
    { name: "Javascript", level: "Intermediate" },
    { name: "React", level: "Experienced" },
  ];
  const backendSkills = [
    { name: "Node JS", level: "Intermediate" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "PHP", level: "Basic" },
    { name: "Express JS", level: "Experienced" },
    { name: "MySQL", level: "Intermediate" },
  ];

  const projects = [
    {
      name: "AfrOURban",
      link: "http://blackdiasporas.com/",
      github: "https://github.com/gtchax",
      description:
        "The project manifests as a geolocated digital archive of interviews of Black people, defined in this project as including people of African ancestry. Built using the MERN stack",
      image: "assets/images/project1.png",
    },
    {
      name: "Lynen Laundry",
      link: "https://app.lynen.co.za/",
      github: "https://github.com/gtchax",
      description:
        "Lynen saves you time whilst taking care of your Laundry, Dry Cleaning & Footwear. Built using the MERN stack.",
      image: "assets/images/project2.png",
    },
    {
      name: "Keshoa",
      link: "https://appadvice.com/app/keshoa/1526143182",
      github: "https://github.com/gtchax",
      description:
        "Video social networking site to bring creatives closer with their fans and brands. Providing an interactive space to celebrate creativity and innovation, whilst also putting culture and heritage at the forefront. Built using the MERN stack",
      image: "assets/images/project3.png",
    },
    {
      name: "CasaDeliquor",
      link: "https://play.google.com/store/apps/details?id=co.zw.casadeliquor",
      github: "https://github.com/gtchax",
      description:
        "Casa De Liquor provides a simple and convenient method of payment for products sold from anyone of the Casa De Liquor outlets. Built using FLutter",
      image: "assets/images/project.png",
    },
  ];
  // Loops through the frontend data array and displays the data on the page
  let html = "";
  frontendSkills.map((skill) => {
    html += `<article class="experience-details">
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path></svg>
      <div>
        <h4>${skill.name}</h4>
        <small class="text-light">${skill.level}</small>
      </div>
    </article>`;
  });

  // Loops through the backend data array and displays the data on the page
  let html2 = "";
  backendSkills.map((skill) => {
    html2 += `<article class="experience-details">
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path></svg>
      <div>
        <h4>${skill.name}</h4>
        <small class="text-light">${skill.level}</small>
      </div>
    </article>`;
  });

  // Loops through the projects data array and displays the data on the page
  let html3 = "";
  projects.map((project) => {
    html3 += ` <article class="portfolio-item shadow-lg glass">
    <div class="portfolio-image glass">
      <img src=${project.image} alt="portfolio project" />
      <div class="caption">${project.description}</div>
    </div>
    <h3>${project.name}</h3>

    <div class='flex justify-between'>
        <div class='flex'>
            <a href=${project.github} target="_blank" rel="no-referrer">
            <svg stroke="currentColor" class="icon" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
            </path>
            </svg>
            </a>
        
       
        </div>
        <div>
            <a href=${project.link} target="_blank" rel="no-referrer" class="btn btn-primary">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z">
                </path>
            </svg>
             Live 
            </a>
        </div>
    </div>
    
  </article>`;
  });

  $(".experience-frontend > .experience-content").html(html);
  $(".experience-backend > .experience-content").html(html2);
  $(".portfolio-container").html(html3);

  /* ============================ ScrollSPY ====================================== 
        script downloaded from https://www.cssscript.com/?s=scroll+spy and edited
  */

  let section = document.querySelectorAll("section"); // get all <section> elements
  let menuLinks = document.querySelectorAll("nav a"); // get all <a> inside <menu> inside <header> element
  let sectionHeight = document.querySelector("section").offsetHeight; // get the height of the top menu
  let sectionStartingPointArray = []; // array to store the top-most pixel points of each <section>
  let menuLinksArray = []; // array to store the menu elements

  // for every <section> element we store their top-most pixel point into an array
  section.forEach((sec) => {
    sectionStartingPointArray.push(sec.offsetTop);
  });

  // for every menu link element we store them in an array
  menuLinks.forEach((menuLink) => {
    menuLinksArray.push(menuLink);
  });

  // call this function everytime we scroll on the browser window
  window.onscroll = () => {
    // amount of pixel we have scrolled downwards from the top-most point of the web page
    let downwardScroll = window.scrollY;

    // for every <section>'s top-most point
    sectionStartingPointArray.forEach((sectionStart, sectionIndex) => {
      // check if the current downward scroll is on the middle of each <section>
      // by using its top-most point minus its height divide by half
      if (downwardScroll >= sectionStart - sectionHeight / 2) {
        //if so, we remove all the 'active' classes on all menu links
        menuLinksArray.forEach((menu) => {
          menu.classList.remove("active");
        });
        //then add the 'active' class on the corresponding menu depending on which section the scroll is currently at
        menuLinksArray[sectionIndex].classList.add("active");
      }
    });
  };
});
