# Render `{"show":true,"items":["a","b","c"]}`
```html
<div
  class="c0"
>
  <span>
    0
  </span>
</div>
<ul
  class="c0"
>
  <li>
    a:0
  </li>
  <li>
    b:0
  </li>
  <li>
    c:0
  </li>
</ul>
<p
  class="c0"
>
  <b>
    0
  </b>
</p>
<button>
  inc
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div
  class="c1"
>
  <span>
    1
  </span>
</div>
<ul
  class="c1"
>
  <li>
    a:1
  </li>
  <li>
    b:1
  </li>
  <li>
    c:1
  </li>
</ul>
<p
  class="c1"
>
  <b>
    1
  </b>
</p>
x
<button>
  inc
</button>
```
## Change
```
UPDATE: div[class] "c0" => "c1"
UPDATE: ul[class] "c0" => "c1"
UPDATE: p[class] "c0" => "c1"
UPDATE: p > b::text "0" => "1"
INSERT: p + ::text("x")
UPDATE: div > span::text "0" => "1"
UPDATE: ul > li:nth-of-type(1)::text@2 "0" => "1"
UPDATE: ul > li:nth-of-type(2)::text@2 "0" => "1"
UPDATE: ul > li:nth-of-type(3)::text@2 "0" => "1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<div
  class="c2"
>
  <span>
    2
  </span>
</div>
<ul
  class="c2"
>
  <li>
    a:2
  </li>
  <li>
    b:2
  </li>
  <li>
    c:2
  </li>
</ul>
<p
  class="c2"
>
  <b>
    2
  </b>
</p>
xx
<button>
  inc
</button>
```
## Change
```
UPDATE: div[class] "c1" => "c2"
UPDATE: ul[class] "c1" => "c2"
UPDATE: p[class] "c1" => "c2"
UPDATE: p > b::text "1" => "2"
INSERT: ::text@0 + ::text("x")
UPDATE: div > span::text "1" => "2"
UPDATE: ul > li:nth-of-type(1)::text@2 "1" => "2"
UPDATE: ul > li:nth-of-type(2)::text@2 "1" => "2"
UPDATE: ul > li:nth-of-type(3)::text@2 "1" => "2"
```
