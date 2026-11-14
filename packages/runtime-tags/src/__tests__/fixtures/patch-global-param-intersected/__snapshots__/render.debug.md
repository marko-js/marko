# Render `{"$global":{"a":"a","serializedGlobals":["a"]}}`
```html
<button
  class="inc"
>
  +
</button>
<p>
  0a
</p>
<p>
  1a
</p>
```

# Update `{"$global":{"a":"A","serializedGlobals":["a"]}}`
```html
<button
  class="inc"
>
  +
</button>
<p>
  0A
</p>
<p>
  1A
</p>
```
## Change
```
UPDATE: p:nth-of-type(2)::text "1a" => "1A"
UPDATE: p:nth-of-type(1)::text "0a" => "0A"
```

# Update
```js
document.querySelector("button.inc").click();
```
```html
<button
  class="inc"
>
  +
</button>
<p>
  1A
</p>
<p>
  2A
</p>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "0A" => "1A"
UPDATE: p:nth-of-type(2)::text "1A" => "2A"
```
