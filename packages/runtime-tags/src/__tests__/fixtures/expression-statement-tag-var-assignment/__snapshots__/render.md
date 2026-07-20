# Render
```html
<button
  class="up"
>
  up
</button>
<button
  class="down"
>
  down
</button>
<button
  class="change"
>
  1
</button>
```

# Update
```js
document.querySelector(".change").click();
```

# Update
```js
document.querySelector(".up").click();
```

# Update
```js
document.querySelector(".change").click();
```
```html
<button
  class="up"
>
  up
</button>
<button
  class="down"
>
  down
</button>
<button
  class="change"
>
  2
</button>
```
## Change
```
UPDATE: .change::text "1" => "2"
```

# Update
```js
document.querySelector(".change").click();
```
```html
<button
  class="up"
>
  up
</button>
<button
  class="down"
>
  down
</button>
<button
  class="change"
>
  3
</button>
```
## Change
```
UPDATE: .change::text "2" => "3"
```

# Update
```js
document.querySelector(".down").click();
```

# Update
```js
document.querySelector(".change").click();
```
```html
<button
  class="up"
>
  up
</button>
<button
  class="down"
>
  down
</button>
<button
  class="change"
>
  2
</button>
```
## Change
```
UPDATE: .change::text "3" => "2"
```

# Update
```js
document.querySelector(".change").click();
```
```html
<button
  class="up"
>
  up
</button>
<button
  class="down"
>
  down
</button>
<button
  class="change"
>
  1
</button>
```
## Change
```
UPDATE: .change::text "2" => "1"
```
