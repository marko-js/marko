# Render `{"label":"a"}`
```html
<button>
  clear
</button>
<button
  class="inc"
>
  inc
</button>
<span>
  a:0
</span>
<button
  class="inc"
>
  inc
</button>
<span>
  a:0
</span>
```

# Update
```js
(document.querySelector(".inc")).click();
```
```html
<button>
  clear
</button>
<button
  class="inc"
>
  inc
</button>
<span>
  a:1
</span>
<button
  class="inc"
>
  inc
</button>
<span>
  a:0
</span>
```
## Change
```
UPDATE: span:nth-of-type(1)::text@2 "0" => "1"
```

# Update `{"label":"b"}`
```html
<button>
  clear
</button>
<button
  class="inc"
>
  inc
</button>
<span>
  b:1
</span>
<button
  class="inc"
>
  inc
</button>
<span>
  b:0
</span>
```
## Change
```
UPDATE: span:nth-of-type(1)::text@0 "a" => "b"
UPDATE: span:nth-of-type(2)::text@0 "a" => "b"
```

# Update
```js
const texts = Array.from(document.querySelectorAll("span"), getText);
assert.deepEqual(texts, ["b:1", "b:0"]);
```
