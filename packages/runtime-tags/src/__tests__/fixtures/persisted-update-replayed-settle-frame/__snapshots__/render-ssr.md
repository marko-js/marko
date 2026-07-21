# Render `{"note":"first","tick":4,"$global":{"persisted":true}}`
```html
<button
  class="clicks"
>
  clicked 0
</button>
<section>
  loading…
</section>
```

# Update update frame 1 of 3
```html
<button
  class="clicks"
>
  clicked 0
</button>
<section>
  loading…
</section>
```
## Change
```
REMOVE: section::text("loading…")
INSERT: section::text("loading…")
```

# Update update frame 2 of 3
```html
<button
  class="clicks"
>
  clicked 0
</button>
<section>
  <button
    class="taps"
  >
    second tapped 
  </button>
</section>
```
## Change
```
INSERT: section > .taps
REMOVE: .taps + ::text("loading…")
```

# Update `{"note":"second","tick":7,"$global":{"persisted":true}}`

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
<section>
  <button
    class="taps"
  >
    second tapped 
  </button>
</section>
```
## Change
```
UPDATE: .clicks::text@8 "0" => "1"
```

# Update
```html
<button
  class="clicks"
>
  clicked 1
</button>
<section>
  <button
    class="taps"
  >
    second tapped 
  </button>
</section>
```
## Change
```
INSERT: t > button::text("first")
INSERT: t > button::text@0 + ::text(" tapped ")
INSERT: t > button::text@5 + ::text("0")
```
