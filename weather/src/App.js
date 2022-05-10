import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './components/WeatherBox.js';
import WeatherButton from './components/WeatherButton.js';
//import ClipLoader from "react-spinners/ClipLoader";

// 1. 앱이 실행되자마자 현재위치 기반의 날씨가 보인다.
// 2. 날씨정보에는 도시, 섭씨, 화씨, 날씨상태
// 3. 5개의 버튼이 있다. (1개는 현재위치, 4개는 다르 도시)
// 4. 도시버튼을 클릭할때 마다 도시별 날씨가 나온다.
// 5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
// 6. 데이터를 들고오는 동안 로딩 스피너가 돈다.
 
function App() {

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('')
  const cities = ['paris', 'london', 'tokyo']

  const getCurrentLocation = () => {
    // 현재위치 가져오는 코드
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude; 
      getWeatherByCurrentlocation(lat, lon)
      console.log('현재위치', lat, lon);
    });
  }

  const getWeatherByCurrentlocation = async(lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=099ae4b82d40d26dec90e305d2c1ea1b&units=metric` 
    // 여기가 비동기 
    // await이 그냥 기다림 / fetch가 저 백틱안에 있는걸 문자열로 가져온다 
    let response = await fetch(url)
    let data = await response.json();
    console.log(data)
    setWeather(data)
  }

  const getWeatherByCity = async() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=099ae4b82d40d26dec90e305d2c1ea1b&units=metric`
    let response = await fetch(url)
    let data = await response.json();
    console.log(data)
    setWeather(data)
  }

  // 상황에 맞춰서 호출을 달리해주자
  useEffect(()=> {
    if(city == ""){
      getCurrentLocation();
    } else {
      getWeatherByCity(city)
    }
  }, [city])

  // 1. ui가 랜더링 될때
  // 2. 배열에 있는 state값이 바뀔때마다 
  // useEffect( () => {
  //   console.log(city)
  //   getWeatherByCity(city)
  // },[city])


  return (
    <div className='container'>
      <WeatherBox weather={weather} />
      <WeatherButton cities={cities} setCity={setCity} />
      {/* <ClipLoader size={50} /> */}
    </div>
  );
}

export default App;
