import React from 'react'
import './programs.css'
import BAVIDEO from '../../assets/bavideo.mp4'

const Programs = () => {
  return (
    <div className='programs'>
      <h1 className='programheader'>PROGRAMS</h1>
      <div className='section'>
        <div className='top'>
                  <div className='video1'>
                    <video src={BAVIDEO} width="500" height="200" autoPlay muted loop controls="false" ></video>
                  </div>

        </div>
        <div className='bottom'>
        <p className='program_paragraph'>The BA English Department focuses on the study of English language, literature, and communication. It provides students with a deep understanding of literary works, critical thinking skills, and proficiency in both written and spoken English.</p>
          
        </div>
      </div>    
    </div>
  )
}

export default Programs
