# Render `{"show":false,"label":"a"}`
```html
<button
  class="n"
>
  0
</button>
<main />
<p>
  a
</p>
```

# Update `{"show":true,"label":"b"}`
```html
<button
  class="n"
>
  0
</button>
<main>
  <button>
    +
  </button>
  <span>
    b:1
  </span>
  <span>
    b:2
  </span>
</main>
<p>
  b
</p>
```
## Change
```
INSERT: main > button
UPDATE: p::text "a" => "b"
INSERT: main > button + span
INSERT: main > span:nth-of-type(1) + span
UPDATE: main > span:nth-of-type(1)::text@2 "" => "1"
UPDATE: main > span:nth-of-type(2)::text@2 "" => "2"
```

# Update
```js
document.querySelector("main button").click();
```
```html
<button
  class="n"
>
  0
</button>
<main>
  <button>
    +
  </button>
  <span>
    b:2
  </span>
  <span>
    b:3
  </span>
</main>
<p>
  b
</p>
```
## Change
```
UPDATE: main > span:nth-of-type(1)::text@2 "1" => "2"
UPDATE: main > span:nth-of-type(2)::text@2 "2" => "3"
```

# Update `{"show":true,"label":"c"}`
```html
<button
  class="n"
>
  0
</button>
<main>
  <button>
    +
  </button>
  <span>
    c:2
  </span>
  <span>
    c:3
  </span>
</main>
<p>
  c
</p>
```
## Change
```
UPDATE: p::text "b" => "c"
UPDATE: main > span:nth-of-type(1)::text@0 "b" => "c"
UPDATE: main > span:nth-of-type(2)::text@0 "b" => "c"
```
