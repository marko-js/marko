# Render `{"label":"one","on":true}`
```html
<ul>
  <li>
    a=one
  </li>
  <li>
    b=0
  </li>
  <li>
    0
  </li>
  <li>
    1
  </li>
</ul>
<button>
  +
</button>
```

# Update `{"label":"two","on":true}`
```html
<ul>
  <li>
    a=two
  </li>
  <li>
    b=0
  </li>
  <li>
    0
  </li>
  <li>
    1
  </li>
</ul>
<button>
  +
</button>
```
## Change
```
UPDATE: ul > li:nth-of-type(3)::text "0" => "0"
UPDATE: ul > li:nth-of-type(4)::text "1" => "1"
UPDATE: ul > li:nth-of-type(1)::text@2 "one" => "two"
```

# Update
```js
document.querySelector("button").click();
```
```html
<ul>
  <li>
    a=two
  </li>
  <li>
    b=1
  </li>
  <li>
    0
  </li>
  <li>
    1
  </li>
</ul>
<button>
  +
</button>
```
## Change
```
UPDATE: ul > li:nth-of-type(2)::text@2 "0" => "1"
```

# Update `{"label":"three","on":false}`
```html
<ul>
  <li>
    a=three
  </li>
  <li>
    b=1
  </li>
  <li>
    0
  </li>
</ul>
<button>
  +
</button>
```
## Change
```
UPDATE: ul > li:nth-of-type(3)::text "0" => "0"
REMOVE: ul > li:nth-of-type(3) + li
UPDATE: ul > li:nth-of-type(1)::text@2 "two" => "three"
```

# Update
```js
document.querySelector("button").click();
```
```html
<ul>
  <li>
    a=three
  </li>
  <li>
    b=2
  </li>
  <li>
    0
  </li>
</ul>
<button>
  +
</button>
```
## Change
```
UPDATE: ul > li:nth-of-type(2)::text@2 "1" => "2"
```

# Update `{"label":"four","on":true}`
```html
<ul>
  <li>
    a=four
  </li>
  <li>
    b=2
  </li>
  <li>
    0
  </li>
  <li>
    1
  </li>
</ul>
<button>
  +
</button>
```
## Change
```
UPDATE: ul > li:nth-of-type(3)::text "0" => "0"
INSERT: ul > li:nth-of-type(3) + li
UPDATE: ul > li:nth-of-type(1)::text@2 "three" => "four"
```
