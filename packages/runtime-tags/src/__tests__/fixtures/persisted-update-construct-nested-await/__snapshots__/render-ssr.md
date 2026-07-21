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
  summary…
</p>
```
## Change
```
REMOVE: .count + p
INSERT: .count + .loading
```

# Update update frame 2 of 3
```html
<button
  class="count"
>
  clicked 1
</button>
<p
  class="summary"
>
  sales summary
</p>
<p
  class="sub"
>
  detail…
</p>
```
## Change
```
INSERT: .count + :is(.summary, .sub)
REMOVE: .sub + p
```

# Update `{"$global":{"persisted":true,"persistedCrossRoute":true,"view":"reports","topic":"sales"}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<p
  class="summary"
>
  sales summary
</p>
<p
  class="detail"
>
  sales detail
</p>
```
## Change
```
INSERT: .summary + .detail
REMOVE: .detail + p
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 2
</button>
<p
  class="summary"
>
  sales summary
</p>
<p
  class="detail"
>
  sales detail
</p>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
```
