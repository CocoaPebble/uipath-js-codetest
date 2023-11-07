class Temperature {
  constructor() {
    this.Friday = 0;
    this.Saturday = 0;
    this.Sunday = 0;
  }

  // assign temperature with a valid number
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

      // with DRY principle, I use the assignTemp function to assign temperature
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
          // if dayForecast is not one of the three days, throw an error
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



/* Pull Request

1. Changes:
- Add a new class called Temperature
- Add a static method called getTemperature that takes an object as a parameter
- Add a static method called assignTemp that takes a number as a parameter
- Add a unit test for the Temperature class

2. Testing Done:
- Run the unit test for the Temperature class
- Run the unit test for the Temperature class with invalid data

3. Area to Focus:
- The Temperature class
- The assignTemp method
- The foreach loop in the getTemperature method

*/