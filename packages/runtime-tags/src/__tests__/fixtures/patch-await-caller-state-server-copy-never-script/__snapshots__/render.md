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
  a
</p>
<span
  class="s"
>
  ran
</span>
```
## Change
```
INSERT: .swap + :is(p, .s)
UPDATE: p::text " " => "a"
INSERT: .s::text("ran")
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
<span
  class="s"
>
  ran
</span>
```
## Change
```
UPDATE: p::text "a" => "swapped"
```
