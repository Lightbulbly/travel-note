const axios = require("axios");

export default function axioscall(countryName) {
  const ninja_api_key = process.env.REACT_APP_NINJA_API_KEY;
  //const weather_api_key = process.env.REACT_APP_WEATHER_API_KEY;
  


  function standardize(input) {
    // console.log("here", input);
    let i = input.trim().toLowerCase();
    // console.log("here", i);
    return i;
  }

  function validUrl(input) {
    let sInput = standardize(input);
    let result = "";
    for (let i = 0; i < sInput.length; i++) {
      if (sInput[i] === " ") {
        result += "+";
      } else {
        result += sInput[i];
      }
    }
    return result;
  }

  const validatedUrl = validUrl(countryName);
  const api_ninja_country = `https://api.api-ninjas.com/v1/country?name=${validatedUrl}`;
  //const api_country_flag = `https://countryflagsapi.com/:png/${countryName}`;

    return axios
      .get(api_ninja_country, {
        headers: {
          "X-Api-Key": ninja_api_key,
        },
      })
      .then((res) => {
        console.log(res.data[0]);
      });
    
    axios
    .get(api_ninja_country, {
      headers: {
        "X-Api-Key": ninja_api_key,
      },
    })
    .then((res) => {
      return axios.get(`http://api.weatherapi.com/v1/current.json?key=${weather_api_key}&q=${res.data[0].capital}`)
    })
    .then((res) => {
      console.log(res.data[0]);
    });

    
}
