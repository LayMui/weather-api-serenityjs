import { Log, Task } from '@serenity-js/core'
import { GetRequest, LastResponse, Send } from '@serenity-js/rest'

export const GetWeather = {
  usingCity: (city: string) =>
    Task.where(
      `#actor get weather forecast using city ${city}`,
      Send.a(
        GetRequest.to('/climate/month?q=' + `${city}`).using({
          headers: {
            accept: 'application/json',
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
            'x-rapidapi-key':
              '58c3ef1515mshceab5f254f25838p11d6bbjsn97955511bcf5',
              'useQueryString': true
          },
        })
      ),
      Log.the(LastResponse.body())
    ),
}
