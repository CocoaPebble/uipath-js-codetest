const Temperature = require("./temperature");
const assert = require("assert");

console.log("Running Temperature unit test");

const mockData = {
  weather: [
    {day: "forecast_friday", temp: 20},
    {day: "forecast_saturday", temp: 25},
    {day: "forecast_sunday", temp: 30},
  ]
}

function testTemperature() {
  const temperatures = Temperature.getTemperature(mockData);
  assert.strictEqual(temperatures.Friday, 20);
  assert.strictEqual(temperatures.Saturday, 25);
  assert.strictEqual(temperatures.Sunday, 30);

  console.log("Temperature unit test passed");
}
testTemperature();