# Task: Temperature converter

Build a single page with Marko 6 (the tags API). The app is served by @marko/run's dev server; `marko` and `@marko/run` are already installed. Create the page at `src/routes/+page.marko`.

## Requirements
- A numeric input field with `id="celsius"` holds the temperature in Celsius. Its initial value is 20.
- An element with `id="fahrenheit"` always shows the equivalent Fahrenheit as a number (formula: C * 9 / 5 + 32). For the initial 20 it shows 68.
- When the user types a different number into the input, the Fahrenheit display updates live.
- A button with `id="warmer"` adds 1 to the Celsius value (numerically) when clicked; both the input and the Fahrenheit display update.

## Output
Return every file you create (paths relative to the app root).
