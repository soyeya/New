import React , {useState, useEffect} from 'react';
import axios from 'axios';
import icon01 from '../assets/media/icon01.png';
import icon02 from '../assets/media/icon02.png';
import icon03 from '../assets/media/icon03.png';
import video01 from '../assets/media/video/paddingVideo.mp4';
import video02 from '../assets/media/video/coatOutfit.mp4';
import video03 from '../assets/media/video/jacketOutfit.mp4';
import video04 from '../assets/media/video/cardiganOutfit.mp4';
import video05 from '../assets/media/video/knitOutfit.mp4';
import video06 from '../assets/media/video/mtmOutfit.mp4';
import video07 from '../assets/media/video/tshirtOutfit.mp4';

const Ootd = () => {

 const [today, setToday] = useState(false);
 const [nowDay, setNowDay] = useState([]);
 const [dates, setDates] = useState();
 const [years, setYears] = useState();
 const [month, setMonth] = useState();
 const [days, setDays] = useState();
 const [tdTime, setTdTime] = useState();
 const [tdSKY, setTdSKY] = useState([]);
 const [tdImg, setTdImg] = useState([]);
 const [tdWINDY , setTdWINDY] = useState([]);
 const [tdTMP, setTdTMP] = useState([]);
 const [ootdVideo, setOotdVideo] = useState([]);
 const [links, setLinks] = useState([]);
 
 //데이터관련
 const [tdPTY , setTdPTY] = useState([]);


 const callApi = async() => {

    const allDay = `${years}${month}${dates}`;
    const SERVICE_KEY = `hCr1xoQTCWhxD5hktHYI1emeSSYCaKZ3qxnIiYFjeRuvMwOPeCmCQIq05U675nqtmg%2Fa5kTah%2FH5jvlu2lisGQ%3D%3D`;
    const API_URL = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${SERVICE_KEY}&numOfRows=10&pageNo=1&dataType=JSON&base_date=${allDay}&base_time=${tdTime}&nx=60&ny=127`;

    const Days_array = [ "일요일",  "월요일" , "화요일" , "수요일" , "목요일" , "금요일", "토요일"];
    setNowDay(`${years}년 ${month}월 ${dates}일 ${Days_array[days]}`)

    //data불러오기
        try{
        const res = await axios.get(API_URL);
        const data = await res.data.response.body;

        //상세데이터
        const TMP = JSON.stringify(data.items.item[0].fcstValue);
        const PTY = JSON.stringify(data.items.item[6].fcstValue);
        const SKY = JSON.stringify(data.items.item[5].fcstValue);
        const WINDY = JSON.stringify(data.items.item[4].fcstValue);

            //값추출
        const tdTmp = Number(TMP.substring(1, TMP.length -1));
        const tdPty = Number(PTY.trim().split("").sort().join("").slice(2));
        const tdSky = Number(SKY.trim().split("").sort().join("").slice(2));
        const tdWindy = Number(WINDY.trim("").substring(1, WINDY.length - 1));
    
        const ootdLink = [
            "https://www.pinterest.co.kr/search/pins/?rs=ac&len=2&q=padding%20fashion&eq=padding%20fas&etslf=9182",
            "https://www.pinterest.co.kr/search/pins/?rs=ac&len=2&q=coat%20outfit&eq=coat&etslf=6905",
            "https://www.pinterest.co.kr/search/pins/?rs=ac&len=2&q=jacket%20outfit&eq=jaket%20outfit&etslf=5986",
            "https://www.pinterest.co.kr/search/pins/?rs=ac&len=2&q=knit%20outfit&eq=knit%20out&etslf=4285",
            "https://www.pinterest.co.kr/search/pins/?rs=ac&len=2&q=mtm%20outfit&eq=mtm&etslf=4747",
            "https://www.pinterest.co.kr/search/pins/?rs=ac&len=2&q=cardigan%20outfit&eq=cardian&etslf=4495",
            "https://www.pinterest.co.kr/search/pins/?rs=ac&len=2&q=t%20shirt%20outfit&eq=t-shirt&etslf=36008"
          ]
        //강수량_비올확률
        if(tdPty === 0){
        setTdPTY("없음");
        }else if(tdPty === 1){
        setTdPTY("있음");
        }else if(tdPty === 2){
        setTdPTY("비 또는 눈");
        }else if(tdPty === 3){
        setTdPTY("눈내림");
        }else if(tdPty === 4){
        setTdPTY("소나기");
        }


        //하늘상태
        if(tdSky === 1){
        setTdSKY("맑음");
        setTdImg(icon01);
        
        }else if(tdSky === 3){
        setTdSKY("구름많음");
        setTdImg(icon02);
        
        }else if(tdSky === 4){
        setTdSKY("흐림");
        setTdImg(icon03);
        
        }
        //바람상태 
        if(tdWindy < 4){
        setTdWINDY(`약한바람 연기흐름에 따라 풍향감지가능`);
        }
        else if(tdWindy < 9){
        setTdWINDY(`약간 강한바람 안면에 감촉을 느끼면서 나뭇잎이 조금 흔들리는정도`);
        }else if(tdWindy < 14){
        setTdWINDY(`강한바람 나뭇가지와 깃발이 가볍에 흔들리는 정도`);
        }else{
        setTdWINDY(`매우 강한바람 먼지가 일고 작은나무 전체가 흔들리는 정도`);
        }

        //온도
        setTdTMP(tdTmp + "℃");

            //ootd_선택

    if(tdTmp <= 4){
        setOotdVideo(video01);
        setLinks(ootdLink[0]);
    }else if(tdTmp === 5 || tdTmp < 9){
        setOotdVideo(video02);
        setLinks(ootdLink[1]);
    }else if(tdTmp === 9 || tdTmp < 12){
        setOotdVideo(video03);
        setLinks(ootdLink[2]);
    }else if(tdTmp === 12 || tdTmp < 17){
        setOotdVideo(video04);
        setLinks(ootdLink[3]);
    }else if(tdTmp === 17 || tdTmp < 20){
        setOotdVideo(video05);
        setLinks(ootdLink[4]);
    }else if(tdTmp === 20 || tdTmp < 23){
        setOotdVideo(video06);
        setLinks(ootdLink[5]);
    }else if(tdTmp === 23 || tdTmp < 28){
        setOotdVideo(video07);
        setLinks(ootdLink[6]);
    }else if( tdTmp >= 28){
        setOotdVideo(video07);
        setLinks(ootdLink[7]);
    }
        

         }catch(err){
             return err;
         }

 
}
   const weatherInfo = () => {

     const todayNow = new Date();
     let datesNow =  todayNow.getDate();
     const yearsNow = todayNow.getFullYear();
     let monthNow =  todayNow.getMonth() + 1;
     const daysNow =  todayNow.getDay();
     let tdTimeNow = Number(todayNow.getHours() + "00");

     const monthFixed = () => {

        if(monthNow < 10) {return monthNow = '0' + monthNow}
        else { return month; }
     }
     
     monthFixed();
     
     const dates_fix = () => {
         if(datesNow < 10){ return datesNow = "0" + datesNow;
         }else{ return datesNow; }
      }
      
      dates_fix();


        if(tdTimeNow <= 200 || tdTimeNow < 500){
           setTdTime("0200");
        }else if( tdTimeNow <= 500 || tdTimeNow < 800){
            setTdTime("0500");
        }else if(tdTimeNow <= 800 || tdTimeNow < 1000){
            setTdTime("0800");
        }else if(tdTimeNow <= 1000 || tdTimeNow < 1400){
          setTdTime("1100");
        }else if(tdTimeNow <= 1400 || tdTimeNow < 1700){
          setTdTime("1400");
        }else if(tdTimeNow <= 1700 || tdTimeNow < 2000){
           setTdTime("1700");
        }else if(tdTimeNow <= 2000 || tdTimeNow < 2300){
          setTdTime("2000");
        }else if(tdTimeNow >= 2300){
         setTdTime("2300");
        }else{
          setTdTime("2300");
        }
     
     

     if(!today){
         return setToday(todayNow),
         setDates(datesNow),
         setYears(yearsNow),
         setMonth(monthNow),
         setDays(daysNow),
         setTdTime(tdTimeNow);
     }


     callApi();




   }
  
    useEffect(() => {

       weatherInfo();

       window.addEventListener("load", weatherInfo);

    },[today,nowDay, dates, years, month, days, tdTime, tdPTY, tdSKY, tdWINDY, tdTMP])
    
    return(
        <div id="ootd">
          <h1 className='titles'>Ootd</h1>
          <div className="data-content">
             <div className="weatheInfo">
                <ul>
                    <li><img src={tdImg} alt="weather-icon" /></li>
                </ul>
                <ul>
                    <li><h3>{nowDay}</h3></li>
                    <li>지금 서울은 <span>{tdSKY ? tdSKY : '불러오는 중...'}</span></li>
                    <li>온도는 <span>{tdTMP ? tdTMP : '불러오는 중...'}</span></li>
                    <li><span>비소식</span> {tdPTY ? tdPTY : '불러오는 중...'}</li>
                    <li><p>{tdWINDY ? tdWINDY : '불러오는 중...'}</p></li>
                </ul>
             </div>
             <div className="ootdInfo">
                <ul>
                    <li><strong>Today's Weather With Ootd</strong></li>
                    <li>
                        <div className="ootdVideo">
                             <a href={links} target="_blank" rel="noopener noreferrer"><video src={ootdVideo} autoPlay loop muted></video></a>
                        </div>
                    </li>
                </ul>
             </div>
          </div>
        </div>
    )
}

export default Ootd;