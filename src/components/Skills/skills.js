import React from 'react';
import './skills.css';
import UIDesign from '../../assets/UIUX.png';
import WebDesign from '../../assets/webdesign.png';
import AppDesign from '../../assets/Appdesign.png';
import Software from '../../assets/software.png';
import Seo from '../../assets/seo.png';
import Databse from '../../assets/database.png';

const skillsData = [
  {
    id: 1,
    title: "Software Development",
    description: "Expertise in building robust software solutions using modern technologies and best practices.",
    icon: Software,
    alt: "Software Development"
  },
  {
    id: 2,
    title: "Website Design",
    description: "Creating beautiful, responsive websites with focus on user experience and performance.",
    icon: WebDesign,
    alt: "Website Design"
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Designing intuitive user interfaces with exceptional user experience principles.",
    icon: UIDesign,
    alt: "UI/UX Design"
  },
  {
    id: 4,
    title: "App Design",
    description: "Crafting mobile applications with elegant designs and smooth interactions.",
    icon: AppDesign,
    alt: "App Design"
  },
  {
    id: 5,
    title: "SEO",
    description: "Optimizing websites to rank higher in search engines and drive organic traffic.",
    icon: Seo,
    alt: "SEO"
  },
  {
    id: 6,
    title: "Database Management",
    description: "Designing and managing efficient database systems for optimal performance.",
    icon: Databse,
    alt: "Database Management"
  }
];

const Skills = () => {
    return (
        <section id='skills' className='py-5'>
            <h2 className="skillTitle">What I do</h2>
            <p className="skillDesc">
                I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. 
                I have a strong understanding of design and a keen eye for detail. 
                I am proficient in HTML, CSS, and JavaScript, as well as design software such as Adobe Photoshop and Illustrator.
            </p>
            <div className="skillBars">
              {skillsData.map((skill) => (
                <div className="skillBar" key={skill.id}>
                  <img src={skill.icon} alt={skill.alt} className="skillBarImg" />
                  <div className="skillBarText">
                    <h3>{skill.title}</h3>
                    <p>{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
        </section>
    );
};

export default Skills;