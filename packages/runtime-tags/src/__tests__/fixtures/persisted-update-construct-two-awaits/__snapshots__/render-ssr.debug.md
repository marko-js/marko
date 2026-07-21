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
document.querySelector("button.count").click();
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

# Update update frame 1 of 3
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
REMOVE: .count + p
INSERT: .count + .loading
```

# Update update frame 2 of 3

# Update `{"$global":{"persisted":true,"persistedCrossRoute":true,"view":"reports","topic":"sales"}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<p
  class="report"
>
  report for sales
</p>
<p
  class="summary"
>
  summary of sales
</p>
```
## Change
```
INSERT: .count + :is(.report, .summary)
REMOVE: .summary + p
```
