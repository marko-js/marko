# Render `{"items":["a","b"]}`
```html
<button
  class="n"
>
  0
</button>
<ul>
  <li>
    a:0
  </li>
  <li>
    b:0
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
  1
</button>
<ul>
  <li>
    a:1
  </li>
  <li>
    b:1
  </li>
</ul>
```
## Change
```
UPDATE: .n::text "0" => "1"
UPDATE: ul > li:nth-of-type(1)::text@2 "0" => "1"
UPDATE: ul > li:nth-of-type(2)::text@2 "0" => "1"
```

# Update `{"items":["c","d"]}`
```html
<button
  class="n"
>
  1
</button>
<ul>
  <li>
    c:1
  </li>
  <li>
    d:1
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)::text@0 "a" => "c"
UPDATE: ul > li:nth-of-type(2)::text@0 "b" => "d"
```

# Update
```js
assert.deepEqual(
[...document.querySelectorAll("li")].map((li) => li.textContent),
["c:1", "d:1"],
  );
```
