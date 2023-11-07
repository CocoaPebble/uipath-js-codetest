class Temperature {
  constructor() {
    this.Friday = 0;
    this.Saturday = 0;
    this.Sunday = 0;
  }

  static assignTemp(temperature) {
    return typeof temperature === "number" ? temperature : 0;
  }

  static getTemperature(obj) {
    const temperatures = new Temperature();
    const weather = obj.weather;

    // check if weather is an array
    if (!Array.isArray(weather)) {
      throw new Error("weather is not an array");
    }

    weather.forEach((item) => {
      const dayForecast = item.day;
      const temperature = item.temp;

      switch (dayForecast) {
        case "forecast_friday":
          temperatures.Friday = Temperature.assignTemp(temperature);
          break;
        case "forecast_saturday":
          temperatures.Saturday = Temperature.assignTemp(temperature);
          break;
        case "forecast_sunday":
          temperatures.Sunday = Temperature.assignTemp(temperature);
          break;
        default:
          console.log("Invalid day forecast");
          break;
      }
    });

    return temperatures;
  }
}



// Unit test for the Temperature class
// const assert = require("assert");

// const mockData = {
//   weather: [
//     {day: "forecast_friday", temp: 20},
//     {day: "forecast_saturday", temp: 25},
//     {day: "forecast_sunday", temp: 30},
//   ]
// }

// function testTemperature() {
//   const temperatures = Temperature.getTemperature(mockData);
//   assert.strictEqual(temperatures.Friday, 20);
//   assert.strictEqual(temperatures.Saturday, 25);
//   assert.strictEqual(temperatures.Sunday, 30);

//   console.log("Temperature unit test passed");
// }
// testTemperature();

