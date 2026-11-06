# Render `{"show":true,"items":["a","b"]}`
```html
<div
  class="c1"
>
  <button>
    1
  </button>
</div>
<section
  class="c1"
>
  <b>
    1
  </b>
  <i>
    1
  </i>
</section>
<ul
  class="c1"
>
  <li>
    a 1
  </li>
  <li>
    b 1
  </li>
</ul>
0
```

# Update
```js
document.querySelector("button").click();
```
```html
<div
  class="c2"
>
  <button>
    2
  </button>
</div>
<section
  class="c2"
>
  <b>
    2
  </b>
  <i>
    2
  </i>
</section>
<ul
  class="c2"
>
  <li>
    a 2
  </li>
  <li>
    b 2
  </li>
</ul>
01
```
## Change
```
UPDATE: div[class] "c1" => "c2"
UPDATE: section[class] "c1" => "c2"
UPDATE: ul[class] "c1" => "c2"
INSERT: ::text@0 + ::text("1")
UPDATE: ul > li:nth-of-type(1)::text@2 "1" => "2"
UPDATE: ul > li:nth-of-type(2)::text@2 "1" => "2"
UPDATE: div > button::text "1" => "2"
UPDATE: section > b::text "1" => "2"
UPDATE: section > i::text "1" => "2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<div
  class="c3"
>
  <button>
    3
  </button>
</div>
<section
  class="c3"
>
  <b>
    3
  </b>
  <i>
    3
  </i>
</section>
<ul
  class="c3"
>
  <li>
    a 3
  </li>
  <li>
    b 3
  </li>
</ul>
012
```
## Change
```
UPDATE: div[class] "c2" => "c3"
UPDATE: section[class] "c2" => "c3"
UPDATE: ul[class] "c2" => "c3"
INSERT: ::text@1 + ::text("2")
UPDATE: ul > li:nth-of-type(1)::text@2 "2" => "3"
UPDATE: ul > li:nth-of-type(2)::text@2 "2" => "3"
UPDATE: div > button::text "2" => "3"
UPDATE: section > b::text "2" => "3"
UPDATE: section > i::text "2" => "3"
```
