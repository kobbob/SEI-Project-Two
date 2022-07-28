# GA Project 2: "Reacathon" || 'Owen Wowsen Bible'

## Overview
The second project for the General Assembly Software Engineering Immersive course was a 28-36 hour pair programming Hackathon. I was paired with my peer Rob, AKA [greezyBob](https://github.com/greezyBob), to collaborate on a plan, wireframe and complete our first app as a group. 

We found a public API which highlights the number of “Wow’s” mentioned by Owen Wilson (the actor) in twelve of his featured films. 

To explore this project, you can find the deployed app via Netlify [here](https://the-great-greezybob-site.netlify.app/).


## Navigation

* [The App](#the-app)
* [Brief](#brief)
* [Technologies Used](#technologies-used)
* [General Approach](#general-approach)
  * [Planning](#planning)
  * [Wireframing](#wireframing)
* [Build Approach](#build-approach)
  * [Coding](#coding)
  * [Using the State Hook](#using-the-state-hook)
  * [Using the Effect Hook](#using-the-effect-hook)
  * [Styling](#styling)
* [Challenges](#challenges)
* [Wins](#wins)
* [Key Learnings](#key-learnings)
* [Future Improvements](#future-improvements)
* [Credits](#credits)

## The App

| Homepage                 |  Mainpage                         |     Mainpage                      |
|:-------------------------:|:-------------------------:|:-------------------------:|
| <img src="./src/components/images/Dark-mode-homepage.png" width=350 height=200>  | <img src="./src/components/images/Mainpage-1.png" width=350 height=200>  | <img src="./src/components/images/Mainpage-2.png" width=350 height=200>  |


https://user-images.githubusercontent.com/103049670/181481388-1fe723c8-eb10-49e4-917a-53688c5258ee.mp4


## Brief
* Consume a public API. 
* Use React to build the application with several components. 
* Plan your project with a wireframe. 
* Time: < 36 hours. 

## Technologies Used
*Insert icons*
JavaScript (ES6+) || React & React Router || HTML5 & CSS3 || Chakra UI || Axios || VSCode || Eslint || Git & GitHub || Insomnia || [The Owen Wilson WoW API](https://owen-wilson-wow-api.herokuapp.com/)

Installation Instructions for dependencies: [Package Manager](https://github.com/kobbob/SEI-Project-Two/blob/main/package.json) 

## General Approach

# Planning
Whilst exploring public API’s online, we came up with a number of suitable suggestions to pitch to one another, whilst utilising Insomnia to dig down into the data and see if the API could be used appropriately in the time frame. We also had to be conscious of any APIs with a strict rate limit for requests. 

During this planning process, I also began saving inspiration imagery for styling certain elements and developing an overarching theme. Due to the allocated time however, we decided to keep it simple and clean, opting for the CSS framework ‘Chakra UI’ which enabled us to make use of prebuilt components.

# Wireframing
In our initial wireframe, we had a number of pages the user could explore through. We quickly found that the app didn’t need this depth of navigation, and it became more effective to keep the content on one page. 

![Initial Wireframe](./src/components/images/Wireframe.png)


## Build Approach


