# Render `{"show":false,"label":"a","promise":{}}`
```html
<button
  class="swap"
>
  swap
</button>
```

# Update `{"show":true,"label":"b","promise":{}}`
```html
<button
  class="swap"
>
  swap
</button>
<p>
  red
</p>
<span>
  red|red|red|red
</span>
<button
  class="set"
>
  set
</button>
```
## Change
```
INSERT: .swap + :is(p, span, .set)
UPDATE: p::text " " => "red"
INSERT: span::text("red|red|red|red")
```

# Update
```js
document.querySelector("button.set").click();
```
```html
<button
  class="swap"
>
  swap
</button>
<p>
  red
</p>
<span>
  z?|red|y|y
</span>
<button
  class="set"
>
  set
</button>
```
## Change
```
REMOVE: span::text("red|red|red|red")
INSERT: span::text("z?|red|y|y")
```

# Update
```js
document.querySelector("button.swap").click();
```
```html
<button
  class="swap"
>
  swap
</button>
<p>
  green
</p>
<span>
  z?|green|y|y
</span>
<button
  class="set"
>
  set
</button>
```
## Change
```
UPDATE: p::text "red" => "green"
REMOVE: span::text("z?|red|y|y")
INSERT: span::text("z?|green|y|y")
```
