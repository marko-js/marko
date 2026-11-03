# Render
```html
<button
  class="change"
>
  change
</button>
<div>
  {"a":"hello"}
</div>
<button
  class="log"
>
  log
</button>
```

# Update
```js
document.querySelector(".log").click();
```
## Console
```
LOG { a: 'hello' }
```

# Update
```js
document.querySelector(".change").click();
```
```html
<button
  class="change"
>
  change
</button>
<div>
  {"a":"bye"}
</div>
<button
  class="log"
>
  log
</button>
```
## Change
```
UPDATE: div::text "{\"a\":\"hello\"}" => "{\"a\":\"bye\"}"
```

# Update
```js
document.querySelector(".log").click();
```
## Console
```
LOG { a: 'bye' }
```
