Feature: Get Weather Forecast
In order to request weather data for the next 30 days
As a API weather services consumer James
James wants to get the weather forecasts for a city.

Background:
    Given James is at the weather services url

Rule: Get weather forecasts for a city
@test
Scenario Outline: Able to get weather forecasts for a city
    When he request for weather forecasts for city "<city>"
    Then he is able to get the weather forecasts information

    Examples:
    | city          |
    | San Francisco | 

