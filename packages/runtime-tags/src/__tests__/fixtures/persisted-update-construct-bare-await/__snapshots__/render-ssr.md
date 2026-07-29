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

# Update update frame 1 of 2
```html
<button
  class="count"
>
  clicked 1
</button>
```
## Change
```
REMOVE: .count + p
```

# Update `{"$global":{"persisted":true,"persistedCrossRoute":true,"view":"reports","range":"day"}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<p
  class="report"
>
  report for day
</p>
```
## Change
```
INSERT: .count + .report
UPDATE: .report::text " " => "report for day"
```
