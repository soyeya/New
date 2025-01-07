import React , {useState, useEffect} from 'react';
import scrollImg from '../assets/media/scrollDown.png';

const Main = () => {
 
  const [alphabet, setAlphabet] = useState(false);
  const [alphabet2, setAlphabet2] = useState(false);
  const [alphabet3, setAlphabet3] = useState(false);

  useEffect(() => {

     const textEvet = () => {

        if(alphabet2 === true){
           return setTimeout(() => { setAlphabet3(true);},1500);

        }
     }

     window.addEventListener("load", () => {
         const texts01 = document.querySelectorAll(".rightCont ul li em");

         if(!alphabet){
            setAlphabet2(true);
            texts01.forEach((lists, index) => {
            setTimeout(() => {lists.classList.add("active");}, index * 100)})
        }

     })

     textEvet();

  },[alphabet,alphabet2,alphabet3])
 
  return(
    <div id="main">
      <div className="mainWrappers">
      <section className="space-content">
         <div className="leftCont">
            <div className="cubeBoxs">
                <div className="cube">
                    <div className="cubeFace cubeFace-front"><p>Hello<br/>I'm <strong>Soye</strong><br/> <strong>Front-End Developer</strong></p></div>
                    <div className="cubeFace cubeFace-back"></div>
                    <div className="cubeFace cubeFace-right"></div>
                    <div className="cubeFace cubeFace-left"></div>
                    <div className="cubeFace cubeFace-top"></div>
                    <div className="cubeFace cubeFace-bottom"></div>
                </div>
            </div>
         </div>
      </section>
      <section className="space-content">
         <div className="rightCont">
             <ul>
                <h3>Introduce <strong>주체적으로 탐구하는 프론트엔드 개발자, 박소예입니다.</strong></h3>
                <li>
                    <p><em>자</em><em>기</em><em>주</em><em>도</em><em>적</em><em>으</em><em>로</em> <em>일</em><em>합</em><em>니</em><em>다</em></p>
                    <span>디자이너, 백엔드와의 협업을 실무로 경험하고 타인과 소통하며 능동적으로 프로젝트를 진행하였습니다.</span>
                </li>
                <li>
                    <p><em>P</em><em>r</em><em>o</em><em>b</em><em>l</em><em>e</em><em>m</em> <em>S</em><em>o</em><em>l</em><em>v</em><em>i</em><em>n</em><em>g</em>
                    <em>에</em> <em>성</em><em>취</em><em>감</em><em>을</em> <em>느</em><em>낍</em><em>니</em><em>다</em>
                    </p>
                    <span>문제가 발생하면 집념있게 책임감을 다하여 일을 해결합니다.</span>
                </li>
                <li>
                    <p><em>배</em><em>움</em><em>을</em> <em>좋</em><em>아</em><em>합</em><em>니</em><em>다</em></p>
                    <span>Api연동과 관련해 양방향성 데이터 공부의 필요성을 느끼고 Mysql, Node.js를 공부하며 개인 프로젝트를 만들었습니다.</span>
                </li>
             </ul>
             <ul>
             <h3>Skills<strong>Html5, Css3. Sass. Javascript, React.js, Vue.js, Mysql, Node.js</strong></h3>
             </ul>
             <ul>
             <h3 className="smallFont">GitHub<a href="https://github.com/soyeya" target="_blank" rel="noopener noreferrer">https://github.com/soyeya</a></h3>
             </ul>
             <ul>
             <h3 className="smallFont">Devlog<a href="https://developia-yeso.tistory.com/" target="_blank" rel="noopener noreferrer">https://developia-yeso.tistory.com/</a></h3>
             </ul>
         </div>
      </section>
      <div className="scroll">
         <p>Scroll Down<img src={scrollImg} alt="scrollDown" loading='lazy'/></p>
      </div>
      </div>
    </div>
     
    )
}

export default Main;