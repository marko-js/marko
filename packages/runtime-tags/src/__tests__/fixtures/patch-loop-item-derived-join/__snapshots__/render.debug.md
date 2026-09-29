# Render `{"prefix":"x","items":["a","b"]}`
```html
<button
  class="n"
>
  x0
</button>
<ul>
  <li>
    a:x0
  </li>
  <li>
    b:x0
  </li>
</ul>
```

# Update
```js
document.querySelector(".n").click();
```
```html
<button
  class="n"
>
  x1
</button>
<ul>
  <li>
    a:x1
  </li>
  <li>
    b:x1
  </li>
</ul>
```
## Change
```
UPDATE: .n::text "x0" => "x1"
UPDATE: ul > li:nth-of-type(1)::text@2 "x0" => "x1"
UPDATE: ul > li:nth-of-type(2)::text@2 "x0" => "x1"
```

# Update `{"prefix":"y","items":["c","d"]}`
```html
<button
  class="n"
>
  y1
</button>
<ul>
  <li>
    c:y1
  </li>
  <li>
    d:y1
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)::text@0 "a" => "c"
UPDATE: ul > li:nth-of-type(2)::text@0 "b" => "d"
UPDATE: .n::text "x1" => "y1"
UPDATE: ul > li:nth-of-type(1)::text@2 "x1" => "y1"
UPDATE: ul > li:nth-of-type(2)::text@2 "x1" => "y1"
```

# Update
```js
assert.deepEqual(
[...document.querySelectorAll("li")].map((li) => li.textContent),
["c:y1", "d:y1"],
  );
```
