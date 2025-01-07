import React from 'react';
import work01 from '../assets/media/work/work01.png';
import work02 from '../assets/media/work/work02.png';
import work03 from '../assets/media/work/work03.png';
import work04 from '../assets/media/work/work04.png';
import work05 from '../assets/media/work/work05.png';
import work06 from '../assets/media/work/work06.png';
import work07 from '../assets/media/work/work07.png';
import work08 from '../assets/media/work/work08.png';
import workDB from '../json/work.json';

const Work = () => {

    const imgObj = [
        work01,
        work02,
        work03,
        work04,
        work05,
        work06,
        work07,
        work08
    ]

    return(
     <div id="work">
        <h1 className='titles'>Work</h1>
        <div className="data-content">
          { workDB.work.map((v, index) => (
          <ul key={'list' + index} className={`active${index+1}`} style={{backgroundImage : `url(${imgObj[index]})`}}>
            <a href={v.link} target="_blank" rel="noopener noreferrer">
                <li><h3>{v.title}</h3></li>
                <li><p>{v.skills}</p></li>
            </a>
            </ul>
          ))}
        </div>
     </div>
    )
}

export default Work;