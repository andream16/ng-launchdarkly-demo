# NgLaunchdarklyDemo

Angular LaunchDarkly Demo.

## How it works

Any time you start the application with `npm start` a new random user key will be generated. 
[LaunchDarkly](https://launchdarkly.com/) `amex` tag is configured to show amex cards 60% of times. So, everytime the page is a refreshed and a new user is generated, there's 60% chance that the user will see the feature.
