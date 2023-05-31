import React from "react";
import "./About.css";
import person1Image from "./AboutAsset/anggota4.jpg";
import person2Image from "./AboutAsset/anggota3.jpg";
import person3Image from "./AboutAsset/anggota2.jpg";
import version1image from "./AboutAsset/ver1.jpg";
import version2image from "./AboutAsset/ver2.jpg";
import version3image from "./AboutAsset/ver3.jpg";
import version4image from "./AboutAsset/ver4.jpg";
import version5image from "./AboutAsset/ver5.jpg";

const PersonCard = ({ image, name, quote, instagramUrl }) => {
  return (
    <a
      href={instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="person-card"
    >
      <img src={image} alt={name} className="person-image" />
      <h4>{name}</h4>
      <p>{quote}</p>
    </a>
  );
};

const AboutUs = () => {
  return (
    <div className="about">
      <div className="contents">
        <h2>
          The KBB-E Development team consists of 3 guys that while not being the
          best at website development, tries their best to deliver.
        </h2>
      </div>
      <br />
      <br />
      <div className="about-us">
        <PersonCard
          image={person1Image}
          name="Raditya S. Bastian"
          quote="Ain't much but its honest work"
          instagramUrl="https://www.instagram.com/setadewa_b/"
        />
        <PersonCard
          image={person2Image}
          name="Ghazy A. Supriadi"
          quote="Proud working with this team!"
          instagramUrl="https://www.instagram.com/prixel_athaqi/"
        />
        <PersonCard
          image={person3Image}
          name="Arking L. Davidson"
          quote="Quite an experience"
          instagramUrl="https://www.instagram.com/arking5598/"
        />
      </div>
      <br />
      <br />
      <div className="contents">
        <h2>
          Throughout the development course of this website we've encountered
          many ups and downs. Many of our original ideas and vision had to be
          canned or even scrapped due to certain issues and limitations.
        </h2>
        <br />
        <h2>
          We would like to thank everyone that had assisted us during the
          development of this site, as without their help we might not even be
          able to get this site to run properly.
        </h2>
      </div>
    </div>
  );
};

export default AboutUs;
