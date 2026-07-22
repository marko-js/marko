# Render `{"$global":{"persisted":true,"view":"home"}}`
```html
<button
  class="clicks"
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
document.querySelector("button.clicks").click();
```
```html
<button
  class="clicks"
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
UPDATE: .clicks::text@8 "0" => "1"
```

# Update update frame 1 of 2
```html
<button
  class="clicks"
>
  clicked 1
</button>
loading ratings…
```
## Change
```
REMOVE: .clicks + p
INSERT: .clicks + ::text("loading ratings…")
```

# Update `{"$global":{"persisted":true,"persistedCrossRoute":true,"view":"ratings","topic":"gadgets"}}`
```html
<button
  class="clicks"
>
  clicked 1
</button>
<div
  class="ratings"
>
  <div
    class="rating"
  >
    good for gadgets
  </div>
  <div
    class="rating"
  >
    great for gadgets
  </div>
  <div
    class="rating"
  >
    amazing for gadgets
  </div>
</div>
```
## Change
```
INSERT: .clicks + .ratings
REMOVE: .ratings + ::text("loading ratings…")
```
