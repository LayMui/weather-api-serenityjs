import { Ensure, equals } from "@serenity-js/assertions";
import { Actor, Property, Task } from "@serenity-js/core";
import { LastResponse } from "@serenity-js/rest";

export const VerifyWeatherDetails = {
  hasSuccessfulStatus: (actor: Actor) =>
    Task.where(
      `#actor verify weather details is successful`,
      Ensure.that(LastResponse.status(), equals(200)),
    )   
}