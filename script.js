const api = {
    endpoint:"https://api.openweathermap.org/data/2.5/",
    key:"b2b1725962c3f3c18d64073590bcac1f"
}

const input = document.querySelector("#input");
input.addEventListener("keypress",enter);

function enter(e){
    if(e.keyCode===13){
        getInfo(input.value);
    } 
}

async function getInfo(data){
  const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`)
  const result = await res.json();
  displayResult(result);
}

 function displayResult(result){
     let city = document.querySelector("#city");
     city.textContent = `${result.name}, ${result.sys.country}`;

     getOurDate();
     
     let temperature = document.querySelector("#temperature");
     temperature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;
     
     let feelsLike = document.querySelector("#feelsLike");
     feelsLike.innerHTML = `${Math.round(result.main.feels_like)}<span>°</span>`;

     let condition = document.querySelector("#condition");
     condition.textContent = `${result.weather[0].main}`;

     let variation = document.querySelector("#variation");
     variation.innerHTML = "Min:" +`${Math.round(result.main.temp_min)}<span>°</span>` + "Max:"+ `${Math.round(result.main.temp_max)}<span>°</span>`;
 }

    function getOurDate(){
    const myDate = new Date;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let day = days[myDate.getDay()];
    
    let todayDate = myDate.getDate();

    let month = months[myDate.getMonth()];
    
    let year =  myDate.getFullYear();

    let showDate = document.querySelector("#date");
    showDate.textContent = `${day}`+ " " +`${todayDate}`+ " " +`${month}`+ " " +`${year}`
    
    }

gsap.from("#city",{duration:3,opacity:0,delay:0.5})
gsap.from("#date",{duration:4,opacity:0,delay:1})
gsap.from("#temperature",{duration:4,opacity:0,delay:1.7})
gsap.from("#feelsLike",{duration:4,opacity:0,delay:2.3})
gsap.from("#condition",{duration:4,opacity:0,delay:2.8})
gsap.from("#variation",{duration:4,opacity:0,delay:3.3})
gsap.from("#input",{duration:3,opacity:0,delay:3.8,scale:2})
