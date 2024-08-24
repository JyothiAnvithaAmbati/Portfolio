import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [activeSection, setActiveSection] = useState('education');
  const handleButtonClick = (section) => {
    setActiveSection(section);
  };
  const renderContent = () => {
    switch (activeSection) {
      case 'education':
        return (
          <div className="content-block">
            <h3>EDUCATION</h3>
            <div className="education-box">
              <div className="degree-box master-box">
                <div className="degree-title">Master's</div>
                <div className="degree-details">
                  <p>Master of Science in Computer and Information Sciences, University of Florida, Gainesville</p>
                  <p>August 2022 - May 2024</p>
                  <p>COURSE WORK: Advanced Data Structures, Analysis of Algorithms, Distributed Operating Systems & Principles, Mathematics for Intelligent Systems, Computer Networks, Machine Learning, Human-Centered Computing, Natural Language Processing, Digital Health, Engineering Entrepreneurship</p>
                </div>
              </div>
              <div className="degree-box bachelor-box">
                <div className="degree-title">Bachelor's</div>
                <div className="degree-details">
                  <p>Bachelor of Technology in Computer Science, Jawaharlal Nehru Technological University</p>
                  <p>July 2017 - June 2021</p>
                  <p>COURSE WORK: Distributed Systems, Operating System, Analysis of Algorithms, Probability and Statistics, Linux Programming, Data Structures, Database Management Systems, Java Programming, Software Engineering, Compiler Design, Computer Networks, Information Security, Object-Oriented Analysis and Design, Software Testing Methodologies, Design Patterns, Data Warehousing and Data Mining, Human Computer Interaction, Machine Learning, Web Development, Cloud Computing, Software Project Management</p>
                </div>
              </div>
            </div>
          </div>
        );
        case 'experience':
          return (
            <div className="content-block">
              <h3>EXPERIENCE</h3>
              <div className="experience-box software-developer-box">
                <h4 className="experience-heading">Software Developer</h4>
                <p><strong>Frontier IT Solutions Inc</strong></p>
                <p><em>July 2024 - Present</em></p>
                <p>As a versatile software developer, I have successfully developed, created, and modified end-to-end computer applications, enhancing functionality by 25% through innovative solutions. My involvement spans the entire engineering lifecycle, from initial research and discovery to rapid prototyping, feature design, and comprehensive delivery, which has increased accuracy by 20%. By actively engaging with business groups throughout the development process, I have significantly improved stakeholder satisfaction by 30%. My expertise in integrating new products with existing infrastructure has streamlined integration efforts, reducing time by 35%. Rigorous testing and quality assurance practices under my oversight have cut bugs by 40% and ensured adherence to project standards. With a focus on meticulous documentation and accountability, I consistently meet project deadlines and uphold the highest quality standards, ensuring 100% compliance with project specifications.</p>    </div>
              <div className="experience-box java-developer-box">
                <h4 className="experience-heading">Java Developer</h4>
                <p><strong>Cognizant, Bangalore</strong></p>
                <p><em>January 2020 - August 2022</em></p>
                 <p>
                  As a Java Developer, I have successfully developed and maintained robust applications in collaboration with senior developers, leading to a 20% improvement in system performance and a 30% enhancement in functionality. My active participation in code reviews has been instrumental in improving code quality and reducing defects by 15%. Leveraging Java frameworks such as Spring and Hibernate, I streamlined development processes, cutting development time by 25% and increasing overall efficiency. My proactive approach to debugging and resolving over 50 software defects ensured timely resolutions, boosting code reliability and reducing bugs by 20%. I also excelled in database design and optimization using SQL, which resulted in a 35% increase in data retrieval speed and storage efficiency. My expertise with version control systems like Git has facilitated effective collaboration among a team of 10 developers. With hands-on experience in Agile methodologies, I enhanced project delivery speed by 40%, provided comprehensive technical support, and reduced support tickets by 25%. My commitment to delivering high-quality solutions and maintaining strong client relationships has consistently upheld the company's reputation for excellence.
                 </p>
              
              
                 </div>
              <div className="experience-box data-engineer-box">
                <h4 className="experience-heading">Data Engineer</h4>
                <p><strong>Cognizant, Bangalore</strong></p>
                <p><em>January 2020 - August 2022</em></p>
                <p>
                Managed and led data archival projects for Merck & Co./MSD, leveraging cloud-based technologies including Solix CDP, AWS S3, GCP, and Hadoop/Hive. Streamlined data archival and retrieval processes with Solix CDP, Informatica, and IBM Optim, achieving a 40% reduction in handling time across 12 applications while implementing data retention policies and legal holds for critical data. Oversaw end-to-end data migration, encompassing data cleaning, analysis, mapping, ingestion, transformation, and compliance with industry standards. Demonstrated advanced SQL proficiency and optimized query performance, enhancing database efficiency. Designed and refined ETL pipelines to integrate diverse marketing data sources into comprehensive data lakes, marts, and warehouses, resulting in a 30% improvement in processing efficiency and more timely business insights. Collaborated with business intelligence, analytics, and data science teams to deliver actionable insights, developed interactive dashboards and reports with Tableau and Power BI, and created technical SDLC documentation. Utilized JIRA and Agile methodologies to manage projects, ensuring smooth deployment and support while implementing CI/CD pipelines to automate and accelerate build, test, and deployment processes.
                </p>
                
                  </div>
            </div>
          );
        case 'skills':
          return (
            <div className="content-block">
              <h3>SKILLS</h3>
              <div className="skills-container">
                <div className="skill-box">
                  <h4>Programming Languages</h4>
                  <div className="skill-content">
                    <p>Java, Python, C, C++, Scala, R, GO</p>
                  </div>
                </div>
                <div className="skill-box">
                  <h4>Data Engineering</h4>
                  <div className="skill-content">
                    <p>ETL/ELT, Informatica, Apache Airflow, Data Modeling, Matillion, SAS, SQL Query Optimization (SQL, PL/SQL, DDL, HiveQL, SparkSQL), Distributed Computing, Apache Spark</p>
                  </div>
                </div>
                <div className="skill-box">
                  <h4>Web Technologies</h4>
                  <div className="skill-content">
                    <p>HTML, XML, CSS, JavaScript, Django, React, Angular</p>
                  </div>
                </div>
                <div className="skill-box">
                  <h4>Database</h4>
                  <div className="skill-content">
                    <p>MySQL, Oracle, SQL Server, Postgres, DB2, MongoDB, Hive, Hadoop, Apache Pig</p>
                  </div>
                </div>
                <div className="skill-box">
                  <h4>Mobile Applications</h4>
                  <div className="skill-content">
                    <p>Android, iOS</p>
                  </div>
                </div>
                <div className="skill-box">
                  <h4>Tools</h4>
                  <div className="skill-content">
                    <p>MS Office, MS Excel, IBM InfoSphere Optim, SOLIX CDP, DBT, Snowflake, Databricks, PowerBI, Tableau, Jenkins, Git</p>
                  </div>
                </div>
                <div className="skill-box">
                  <h4>Cloud</h4>
                  <div className="skill-content">
                    <p>AWS, Azure, GCP</p>
                  </div>
                </div>
                <div className="skill-box">
                  <h4>Certifications</h4>
                  <div className="skill-content">
                    <p>Java, Data Warehousing, Python, Data Structures and Algorithm Toolbox, Web Design, SQL, Relational Database Systems, Java Script and AWS</p>
                  </div>
                </div>
              </div>
            </div>
          );
          case 'publications':
            return (
              <div className="content-block">
                <h3>PUBLICATIONS</h3>
                <div className="publication-box">
                  <div className="publication-title">
                    IEEE Conference Paper: "Rainwater Harvesting for Smart Water using IoT"
                    
                  </div>
                  <div className="publication-content">
                    <p><p>Rain water harvesting is used to store the rainwater for any future purposes. By incorporating a smart water management system, Rainwater harvesting will gain the ability to store the excess water in a smarter way by utilizing new technology, which deals with the modules like sensors, Arduino processors etc. In this project, the water gets stored in the top of the roof or catchment and later it is brought down through pipes by guttering and stent down process to store in a container. The collected unfiltered water can be used for irrigation and different applications besides of our daily needs like drinking water and livestock. Instead of getting the water dirtied by overflowing of rainwater, it can be stored and used for irrigation and many other purposes like underground rock storage [3]–[6]. By using the different sensors for different applications like water level, distance management, pumping water, filters etc. The proposed model utilizes the rain water in proper way.</p></p>
                    <p>Presented at ICICCS 2021.</p>
                    <a href="https://ieeexplore.ieee.org/document/9432365" target="_blank" rel="noopener noreferrer" className="publication-link">
                      Read the paper
                    </a>
                  </div>
                </div>
              </div>
            );
      default:
        return null;
    }
  };
  
  return (
    <section id="about">
      <h2 className="about-heading">About Me</h2>
      <div id="about-inner">
        <div className="sidebar">
          <button onClick={() => setActiveSection('education')}><b>EDUCATION</b></button>
          <button onClick={() => setActiveSection('experience')}><b>EXPERIENCE</b></button>
          <button onClick={() => setActiveSection('skills')}><b>SKILLS</b></button>
          <button onClick={() => setActiveSection('publications')}><b>PUBLICATIONS</b></button>
        </div>
        <div className="content">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default About;
