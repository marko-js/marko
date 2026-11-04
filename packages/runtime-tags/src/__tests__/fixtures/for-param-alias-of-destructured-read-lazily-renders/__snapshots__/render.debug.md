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
<div>
  world
</div>
<button
  class="log"
>
  log
</button>
```

# Update
```js
document.querySelectorAll(".log")[1].click();
```
## Console
```
LOG "world"
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
<div>
  now
</div>
<button
  class="log"
>
  log
</button>
```
## Change
```
UPDATE: div:nth-of-type(1)::text "hello" => "bye"
UPDATE: div:nth-of-type(2)::text "world" => "now"
```

# Update
```js
document.querySelectorAll(".log")[1].click();
```
## Console
```
LOG "now"
```
