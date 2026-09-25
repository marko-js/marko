# Render `{"tag":"section"}`
```html
<button>
  0
</button>
<p
  data-n="0"
>
  params:object
</p>
<p
  data-n="0"
>
  <span>
    other:object:
  </span>
</p>
<p />
<p
  data-n="0"
>
  params:object
</p>
<p
  data-n="0"
>
  <span>
    other:object:
  </span>
</p>
<p />
<section
  data-n="0"
>
  <span>
    other:object:
  </span>
</section>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
<p
  data-n="1"
>
  params:object
</p>
<p
  data-n="1"
>
  <span>
    other:object:
  </span>
</p>
<p>
  <span>
    other:object:
  </span>
</p>
<p
  data-n="1"
>
  params:object
</p>
<p
  data-n="1"
>
  <span>
    other:object:
  </span>
</p>
<p>
  <span>
    other:object:
  </span>
</p>
<section
  data-n="1"
>
  <span>
    other:object:
  </span>
</section>
```
## Change
```
UPDATE: button::text "0" => "1"
UPDATE: p:nth-of-type(1)[data-n] "0" => "1"
UPDATE: p:nth-of-type(2)[data-n] "0" => "1"
INSERT: p:nth-of-type(3) > span
UPDATE: p:nth-of-type(3) > span::text@6 "" => "object"
UPDATE: p:nth-of-type(4)[data-n] "0" => "1"
UPDATE: p:nth-of-type(5)[data-n] "0" => "1"
INSERT: p:nth-of-type(6) > span
UPDATE: p:nth-of-type(6) > span::text@6 "" => "object"
UPDATE: section[data-n] "0" => "1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  2
</button>
<p
  data-n="2"
>
  params:object
</p>
<p
  data-n="2"
>
  <span>
    other:object:
  </span>
</p>
<p>
  <span>
    other:object:
  </span>
</p>
<p
  data-n="2"
>
  params:object
</p>
<p
  data-n="2"
>
  <span>
    other:object:
  </span>
</p>
<p>
  <span>
    other:object:
  </span>
</p>
<section
  data-n="2"
>
  <span>
    other:object:
  </span>
</section>
```
## Change
```
UPDATE: button::text "1" => "2"
UPDATE: p:nth-of-type(1)[data-n] "1" => "2"
UPDATE: p:nth-of-type(2)[data-n] "1" => "2"
UPDATE: p:nth-of-type(4)[data-n] "1" => "2"
UPDATE: p:nth-of-type(5)[data-n] "1" => "2"
UPDATE: section[data-n] "1" => "2"
```
