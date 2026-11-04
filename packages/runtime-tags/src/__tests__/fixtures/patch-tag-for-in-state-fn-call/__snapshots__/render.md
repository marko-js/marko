# Render `{"obj":{"p":1,"q":2},"sel":"p","prefix":"a"}`
```html
<span>
  a1
</span>
<button
  class="s"
>
  +
</button>
<button
  class="p"
>
  p
</button>
```

# Update
```js
document.querySelector("button.s").click();
```
```html
<span>
  a2
</span>
<button
  class="s"
>
  +
</button>
<button
  class="p"
>
  p
</button>
```
## Change
```
UPDATE: span::text "a1" => "a2"
```

# Update `{"obj":{"p":1,"q":2},"sel":"q","prefix":"a"}`
```html
<span>
  a3
</span>
<button
  class="s"
>
  +
</button>
<button
  class="p"
>
  p
</button>
```
## Change
```
REMOVE: span
INSERT: span
UPDATE: span::text " " => "a3"
```

# Update `{"obj":{"p":1,"q":2},"sel":"q","prefix":"b"}`
```html
<span>
  b3
</span>
<button
  class="s"
>
  +
</button>
<button
  class="p"
>
  p
</button>
```
## Change
```
UPDATE: span::text "a3" => "b3"
```

# Update
```js
document.querySelector("button.s").click();
```
```html
<span>
  b4
</span>
<button
  class="s"
>
  +
</button>
<button
  class="p"
>
  p
</button>
```
## Change
```
UPDATE: span::text "b3" => "b4"
```

# Update `{"obj":{"p":1,"q":2},"sel":"p","prefix":"b","dyn":true}`
```html
<span>
  a3
</span>
<button
  class="s"
>
  +
</button>
<button
  class="p"
>
  p
</button>
```
## Change
```
INSERT: span
REMOVE: span + span
UPDATE: span::text " " => "a3"
```

# Update
```js
document.querySelector("button.p").click();
```
```html
<span>
  a!3
</span>
<button
  class="s"
>
  +
</button>
<button
  class="p"
>
  p
</button>
```
## Change
```
UPDATE: span::text "a3" => "a!3"
```

# Update `{"obj":{"p":1,"q":2},"sel":"q","prefix":"c","dyn":true}`
```html
<span>
  a!4
</span>
<button
  class="s"
>
  +
</button>
<button
  class="p"
>
  p
</button>
```
## Change
```
REMOVE: span
INSERT: span
UPDATE: span::text " " => "a!4"
```

# Update
```js
document.querySelector("button.p").click();
```
```html
<span>
  a!!4
</span>
<button
  class="s"
>
  +
</button>
<button
  class="p"
>
  p
</button>
```
## Change
```
UPDATE: span::text "a!4" => "a!!4"
```

# Update
```js
document.querySelector("button.s").click();
```
```html
<span>
  a!!5
</span>
<button
  class="s"
>
  +
</button>
<button
  class="p"
>
  p
</button>
```
## Change
```
UPDATE: span::text "a!!4" => "a!!5"
```
