import React from "react";
import "../App.css";
import YamandBoss from '../Images/yamandboss.jpeg'

function About() {
  return (
    <div className="about">
      
      <p>Hi everyone! Thank you for caring about the Rescue Dog Moms project. Here’s some information about the podcast and more.<br/><br/>

      <strong>About The Podcast:</strong> Rescue Dog Moms is a typical pandemic project that started as an obsession with dogs and grew into an obsession of  “talking about dogs”. This podcast is a dog parenting podcast, for those who love the four-legged friends that they rescued - because they got rescued right back. Each week, we bring on a dog mom to talk about their dogs and how they changed their lives. Most of these are my friends, with some Instagram stalking incorporated as well.
      </p>
      <div>
        <img src={YamandBoss} alt="Podcast creator and her fur baby" />
      </div>
      <p>
        <strong>About Yamini:</strong> Yamini is a public relations professional and a rescue dog mom. She spends her free time volunteering and fostering with various Toronto dog rescues, including Fetch + Releash and New Collar Collective. She loves reality TV, the Internet (especially TikTok right now) and eating delicious food. Sometimes she shares it with Boss.<br/><br/>

      <strong>About Boss:</strong> Boss is a rescue dog from Tennessee, rescued by Fetch + Releash. He was adopted in May 2020 and in this short time of being a pandemic baby, he has already conquered so many hearts. His favourite things are squeaky balls, baby carrots and blankets. <br/><br/>

      <strong>Want to adopt or foster in the GTA?</strong> It is important you do your research on which rescue you do that through. Check out these RDM approved rescues:</p>
      <ul>
        <li><a href="https://www.fetchandreleash.ca/" rel="noreferrer" target="_blank">Fetch + Releash</a></li>
        <li><a href="https://newcollar.co/" rel="noreferrer" target="_blank">New Collar Collective</a></li>
        <li><a href="https://www.straytoplay.org/" rel="noreferrer" target="_blank">Stray to Play</a></li>
      </ul>
      <p>Want to contact us? DM us on Instagram (<a href="https://www.instagram.com/rescuedogmomspod/" rel="noreferrer" target="_blank">@rescuedogmomspodcast</a>) or email me @ <a href="mailto:rescuedogmoms@gmail.com" rel="noreferrer" target="_blank">rescuedogmoms@gmail.com</a></p>


    </div>
  );
}

export default About;
