# Render `{"show":false,"promise":{},"label":"L"}`
```html
<button
  class="swap"
>
  swap
</button>
```

# Update `{"show":true,"promise":{},"label":"L"}`
```html
<button
  class="swap"
>
  swap
</button>
<p>
  a
</p>
```
## Change
```
INSERT: .swap + p
UPDATE: p::text " " => "a"
INSERT: #document > html > head > title
INSERT: #document > html > head > title::text("a:L")
```

# Update `{"show":true,"promise":{},"label":"M"}`
```html
<button
  class="swap"
>
  swap
</button>
<p>
  a
</p>
```
## Change
```
REMOVE: #document > html > head > title::text("a:L")
INSERT: #document > html > head > title::text("a:M")
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
  swapped
</p>
```
## Change
```
UPDATE: p::text "a" => "swapped"
REMOVE: #document > html > head > title::text("a:M")
INSERT: #document > html > head > title::text("swapped:M")
```
