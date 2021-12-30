import { Given, Then, When } from "@cucumber/cucumber";
import { Actor } from "@serenity-js/core";
import { ChangeApiConfig } from "@serenity-js/rest";
import { GetWeather } from "../tasks/GetWeather";
import { VerifyWeatherDetails } from "../tasks/VerifyWeatherDetails";
const dotenv = require('dotenv')

Given(
  '{actor} is at the weather services url',
  async (actor: Actor) =>
    await actor.attemptsTo(
      ChangeApiConfig.setUrlTo(process.env.WEATHER_SERVICE_BASE_URL)
    )
)

When(
  '{pronoun} request for weather forecasts for city {string}',
  async (actor: Actor, city: string) => {
    const encodedCity = city.replace(" ", "%20")
    await actor.attemptsTo(GetWeather.usingCity(encodedCity))
  }
)


Then(
  '{pronoun} is able to get the weather forecasts information',
  async (actor: Actor) => {
    await actor.attemptsTo(
     VerifyWeatherDetails.hasSuccessfulStatus(actor),
    )
  }
)
