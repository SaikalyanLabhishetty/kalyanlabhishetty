import React from 'react'
import AppHeader from './AppHeader'
import './AppMain.css'
import { certificates, experience, hobbies, info, projects, social } from './export'

const AppMain = () => {

  return (
    <div>
      <AppHeader/>
      <div className='section-1'>
        <div className='left_container'>
          <div className='container_1'>
              <h3>About</h3>
              {info.map((detail)=> (
                <div key={detail.id} className='tabs'>
                  {detail.icon}
                  <p>{detail.info_detail}</p>
                </div>
              ))}
              <h3>Social</h3>
                {social.map((social)=> (
                  <div key={social.id} className='social_tabs'>
                  <a href={social.href} target='_blank' rel="noopener noreferrer">
                    {social.icon}
                    <p style={{overflow:"hidden"}}>{social.info_detail}</p>
                  </a>  
                  </div>
                ))}
              <h3>Achievements & Hobbies</h3>
              {hobbies.map((hobb)=>(
                <div key={hobb.id} className='social_tabs'>
                <a href={hobb.href} target='_blank' rel="noopener noreferrer">
                  {hobb.icon}
                  <p style={{overflow:"hidden"}}>{hobb.info_detail}</p>
                </a>  
                </div>
              ))}
          </div>
        </div>
        <div className='right_container'>
          <div className='container_2'>
            <img src='./image/kalyan_caricature.jpg' alt='image_1'></img>
              <div className='right_container_names'>
                <li style={{fontSize:"25px", fontWeight:"bold", listStyle:"none"}}>Saikalyan Labhishetty</li>
                <li style={{listStyle:"none"}}>@kalyanlabhishetty</li>
              </div>
          </div>
          <div className='container_3'>
                <h2>Experience</h2>
                <div className='container_block'>
                      {experience.map((experience)=>(
                        <div key={experience.id} className='experience_block'>
                          <img src={experience.image} alt={experience.alt}></img>
                          <h5>{experience.Name}</h5>
                          <h6>{experience.year}</h6>
                        </div>
                      ))}
                </div>
                <h2>Projects</h2>
                <div className='container_block'>
                    {projects.map((project)=>(
                            <div key={project.id} className='block'>
                              <a href={project.href} target="_blank" rel="noopener noreferrer">
                              <img src={project.image} alt={project.altimg} ></img>
                              <h5>{project.Name}</h5>
                              <h6>{project.year}</h6>
                              </a>
                            </div>
                          ))}
                </div>
                <h2>What I Know</h2>
                  <div className='skill_container'>
                    <div className='skill_container_block'>
                      <h3>Frontend</h3>
                      <p>HTML CSS</p>
                      <p>JavaScript</p>
                      <p style={{border:"1px solid yellow", borderRadius:"10px"}}>React JS</p>
                    </div>
                    <div className='skill_container_block'>
                      <h3>Backend</h3>
                      <p>Java</p>
                      <p>python</p>
                      <p style={{border:"1px solid orange", borderRadius:"10px"}}>Node JS</p>
                      <p style={{border:"1px solid pink", borderRadius:"10px"}}>Express JS</p>
                    </div>
                    <div className='skill_container_block'>
                      <h3>Database</h3>
                      <p style={{border:"1px solid green", borderRadius:"10px"}}>Mysql</p>
                      <p>MongoDB</p>
                    </div>
                    <div className='skill_container_block'>
                      <h3>Devops</h3>
                      <p style={{border:"1px solid red", borderRadius:"10px"}}>GIT</p>
                      <p>Docker</p>
                    </div>
                </div>
                <h2>Certificates</h2>
                <div className='certificate_container'>
                  {certificates.map((certify)=>(
                    <div className='certificate_container_block'>
                    <a href={certify.url} target='_blank' rel="noopener noreferrer">
                      <h5>{certify.name}</h5>
                      <img src={certify.img} alt={certify.alt}></img>
                      <h6>{certify.year}</h6>
                    </a>
                    </div>
                  ))}
                </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default AppMain
