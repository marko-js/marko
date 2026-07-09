# Render `{"$global":{"persisted":true,"view":"home"}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<p
  class="home"
>
  welcome home
</p>
```

# Update
```js
container.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 1
</button>
<p
  class="home"
>
  welcome home
</p>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update `{"$global":{"persisted":true,"persistedSeed":true,"persistedFragment":true,"view":"reports","topic":"sales"}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<p
  class="loading"
>
  loading…
</p>
```
## Change
```
INSERT: .loading
REMOVE: .count + p
```

# Update
```js
container.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 2
</button>
<p
  class="loading"
>
  loading…
</p>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
```

# Update `{"$global":{"persisted":true,"persistedSeed":true,"persistedFragment":true,"view":"home"}}`
```html
<button
  class="count"
>
  clicked 2
</button>
<p
  class="home"
>
  welcome home
</p>
```
## Change
```
INSERT: .home
REMOVE: .count + p
```

# Update
```js
container.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 3
</button>
<p
  class="home"
>
  welcome home
</p>
```
## Change
```
UPDATE: .count::text@8 "2" => "3"
```

# Update `{"$global":{"persisted":true,"persistedSeed":true,"persistedFragment":true,"view":"reports","topic":"growth"}}`
```html
<button
  class="count"
>
  clicked 3
</button>
<p
  class="report"
>
  report for growth
</p>
```
## Change
```
INSERT: .report
REMOVE: .count + p
```

# Update
```js
container.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 4
</button>
<p
  class="report"
>
  report for growth
</p>
```
## Change
```
UPDATE: .count::text@8 "3" => "4"
```
