import React from 'react';
import prjImg01 from '../assets/media/project/project01.png';
import prjImg02 from '../assets/media/project/project02.png';
import prjImg03 from '../assets/media/project/project03.png';
import prjImg04 from '../assets/media/project/project04.png';
import prjImg05 from '../assets/media/project/project05.png';
import prjImg06 from '../assets/media/project/project06.png';
import prjImg07 from '../assets/media/project/project07.png';
import projectDB from '../json/project.json';

const Project = () => {

    const prjObj = [
        prjImg01,
        prjImg02,
        prjImg03,
        prjImg04,
        prjImg05,
        prjImg06,
        prjImg07
    ]
    return(
      <div id="project">
        <h1 className='titles'>Project</h1>
        <div className="data-content">
        {projectDB.project.map((data, index) => (
            <div className="datas" key={'data' + index}>
                <ul>
                    <li className='imgBoxs'><img src={prjObj[index]} alt={'projectImg' + index} /></li>
                </ul>
                <ul>
                    <h5>프로젝트명 : <span>{data.title}</span></h5>
                    <li><p>프로젝트 정보 :<span>{data.info}</span></p></li>
                    <li><p>참여인원 :<span>{data.person}</span></p></li>
                    <li><p>Skills :<span className='addColor'>{data.skills}</span></p></li>
                    <li><p>Link :<a href={data.link} target="_blank" rel="noopener noreferrer">{data.link}</a></p></li>
                    <div className="infoBox">
                             <p>{data.data}</p>
                             <p>{data.data02}</p>
                             <p>{data.data03}</p>
                    </div>
  
                </ul>
            </div>
        ))}
   
        </div>
      </div>
    )
}

export default Project;