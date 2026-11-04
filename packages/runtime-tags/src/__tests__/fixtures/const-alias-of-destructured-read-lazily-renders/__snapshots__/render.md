# Render
```html
<button
  class="change"
>
  change
</button>
<div>
  hello
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
LOG "hello"
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
  bye
</div>
<button
  class="log"
>
  log
</button>
```
## Change
```
UPDATE: div::text "hello" => "bye"
```

# Update
```js
document.querySelector(".log").click();
```
## Console
```
LOG "bye"
```
