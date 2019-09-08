---
author: Anh T. Tra
title: Hackathon VAGC 2019 - My First Hackathon (Part 1)
layout: article
date: 2019-09-07 15:13 +0700
tags: hackathon, reviews
category: Reviews
---

![Team Hydra with the 3rd runner up award at VAGC Round 2]({static}/images/vagc2019-3rdrunnerup.jpg "Team Hydra with 3rd runner-up award at VAGC Danang Round.")
<p align="center" style="margin-top:-1em;">
The Hydra team at VAGC 2019. From left: Quy Truong, Anh Tra, Long Vo and Phong Le.</p>

In May 2019, I and my company - [Phong Le](https://drive.google.com/file/d/1nGWt2gvJvZ3TcCi7BnEOjgmEaFXg80eE/view) had attended one seminar about Artificial Intelligence with a very fancy title: ["AI is now"](https://duytan.edu.vn/news/NewsDetail.aspx?id=4498&pid=2064&lang=vi-VN) at Duy Tan university in Danang. After the event, the organizers introduced about a national Hackathon challenge for AI developers named [Vietnam AI Grand Challenge](https://www.aigrandchallenge.com/) (VAGC), which included 3 Hackathons for the 3 biggest cities in Vietnam and 1 Grand Finale at Hanoi capital. And, I have to confess that the total prize of 40K was quite attractive to me at that time. Besides, I had not joined in any Hackathon before. So, I was very excited and curious. Thus, I and Phong decided to form a team and join the challenge.

## What VAGC 2019 is about?

<img src="{static}/images/vagc2019.png" alt="vagc2019" title="VAGC Logo" style="display: block; margin: auto; width: 400px;"/>

> The Vietnam AI Grand Challenge is a series of hackathons that seeks to uncover the Ultimate Virtual Assistant utilizing AI and robotics. Join our seminars, workshops and hackathons across the country and compete to win up to $40K in prizes. Vietnam's national AI movement has begun!

**There were two rounds in a VAGC hackthon:** 

* Online round: Teams of 3-5 members will have 40 hours to develop an AI-based assistant or product feature that can be used in various use cases like automobiles, manufacturing, banking services, offline retail store, office receptionist, etc.

* Pitching round: 10 best teams selected by the Judging Board will have 10 minutes each to demonstrate their project. Before the presentation, teams will have 2 hours working with their Mentors to shape up their presentations and demo.

## Summon the [Hydra](https://the-hydra-team.github.io/) Team

Since Phong and I were both back-end AI engineers, we need to look for some other people with front-end developing skill. In Danang, there is no better place than [Phong Cafe](https://www.foody.vn/da-nang/phong-cafe) for talent search. At here, I invited [Dung Le](https://www.linkedin.com/in/dunglehuy/) (a super coder) and his friend [Quy Truong](https://github.com/daltonnyx) (a web enthusiast) to our team. 

<img src="{static}/images/phong-cafe.jpg" alt="phong-cafe" title="Phong Cafe" style="display: block; margin: auto; width: 1024px;"/>

Phong came with a nice team name - Hydra (a fictional terrorist organization appearing in American comic books published by Marvel Comics). 
However, Dung was afraid that he could not join with us during the Hackathon days because of his engagement ceremony. So we looked for one more member, who would be in charge of the front-end. Phong invited [Long Vo](https://github.com/vovanlong) - the youngest brother to the team after a recommendation from one of his friends. Finally, we could "Hail Hydra" now.

<img src="{static}/images/hail-hydra.jpg" alt="phong-cafe" title="The Hydra Team" style="display: block; margin: auto; width: 417px;"/>

## Hacking Days

**Online Test:** In order to attend at the Hackathon round, each team need to pass one online test, which was to build a chat bot translating English to Vietnamese. Thank to Phong Le's hard working, the team fortunately passed the test (with my contribution of fixing a silly bug of input tag and button tag) and appeared at the next round organized at Duy Tan university, with 14 teams 
in total.

<img src="{static}/images/translate-bot.png" alt="hydra-translate-bot" title="The Hydra Trannslate Bot" style="display: block; margin: auto; width: 417px;"/>

<u>**Hydra Assistant Idea:**</u>

The Hackathon round started from the evening of the Friday till the noon of the Sunday. Each team had about 40 hours to develop an ultimate virtual assistant related to at least one of the predefined topics: automobiles, manufacturing, banking services, offline retail store, office receptionist, health-care and so on. After a short opening ceremony and the introduction of all Hackathoners, the hack was started.

We decided to build a children-care virtual assistant which was able to help young parents in taking care of their children. The main features of our assistant are Vietnamese Q&A bot by using Vietnamese speech recognition, voice memo for recording the children diary, and a health tracking engine with ability to do some useful recommendations.

<img src="{static}/images/vagc-danang.jpg" alt="VAGC-DuyTan-Danang" title="The opening of VAGC 2019 at Danang" style="display: block; margin: auto;"/>
<p align="center" style="margin-top:-1em;">
The whole scence of the VAGC Hackathon 2019, Danang round. There are 14 teams with about 70 hackathoners doing hacks in this lecture room of Duy Tan university.</p>

### The First Night

Since there were 40 hours of developing in total, the team actually had a really touch hacking duration to catch up all of these features. At the first night, there were only Long, Phong and me working overnight to build a prototype of the application. I built a trigger work detection using `TensorFlow.js` to integrate with our web application later, while Phong took care of the NLP engine and Long handled the front-end parts. 

### The Second Day

In the second days, Quy joined with us to develop the back-end based on the Django framework. As the second day passing by, our work had not been finished yet. Then, we had another overnight (2nd overnight to me) to hack. The team only took about 2 hours for sleeping with the sleeping bag on the floor, so that we were almost out of energy in the next morning. 
  
### The Last Day
 
Six o'clock of the Sunday, and there were still a lot of works to do. We had our breakfasts with Banh My and Cafe Long coffee, while our minds were at somewhere in the sky. It was about 5 hours to the deadline. Coming back to the lecture room after killing our breakfasts quickly, the team had to speed up the process. Fortunately, we finished the web-app Hydra assistant, the demo video and the presentation just 5 minutes before the deadline. Once again, our experiences of releasing projects at work saved us an obvious goal.

## Pitching & Presenatation 

In the rest of the last day, we gave a quick description of our Hydra assistant for the at-table pitching round and a presentation for the final defense round. I did both in English, but kept the QnA in Vietnamese. And, we got the 3rd runner-up award and came back home with the prize of 1K. Actually, the team thought that we had did the better jobs than other teams but no one knew why we were only at the 3rd places. Maybe, the judges did not think our project could earn good money as others when going to the market. Anyway, we did a nice application which may help parents and the community while having a chance to travel to Hanoi capital for the Finale Grand. 

<iframe style="display: block; margin:auto;" width="560" height="315" src="https://www.youtube.com/embed/-JhClXpd3PQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p align="center">
My presentation for the final defense round.</p>

## Pros & Cons
To be updated later!