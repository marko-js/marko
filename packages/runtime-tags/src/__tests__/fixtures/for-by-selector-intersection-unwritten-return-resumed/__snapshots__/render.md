# Render `{"short":false}`
```html
<span
  class="on"
>
  1
</span>
<span>
  2
</span>
<span>
  3
</span>
<button
  id="shrink"
>
  shrink
</button>
<button
  id="grow"
>
  grow
</button>
```

# Update
```js
document.querySelector("#shrink").click();
```
```html
<span
  class=""
>
  1
</span>
<span>
  2
</span>
<button
  id="shrink"
>
  shrink
</button>
<button
  id="grow"
>
  grow
</button>
```
## Change
```
REMOVE: span
UPDATE: span:nth-of-type(1)[class] "on" => ""
```

# Update
```js
document.querySelector("#grow").click();
```
```html
<span
  class=""
>
  1
</span>
<span>
  2
</span>
<span
  class="on"
>
  3
</span>
<button
  id="shrink"
>
  shrink
</button>
<button
  id="grow"
>
  grow
</button>
```
## Change
```
INSERT: .on
UPDATE: .on[class] null => "on"
```
