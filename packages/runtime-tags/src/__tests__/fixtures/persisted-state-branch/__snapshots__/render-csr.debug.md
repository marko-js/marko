# Render `{"title":"First","$global":{"persisted":true}}`
```html
<h1>
  First
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 0
</button>
<p
  class="detail"
>
  detail 0
</p>
<ul
  class="items"
>
  <li>
    a:0
  </li>
  <li>
    b:0
  </li>
</ul>
<button
  class="add"
>
  add
</button>
```

# Update
```js
document.querySelector(sel).click();
```
```html
<h1>
  First
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 1
</button>
<p
  class="detail"
>
  detail 1
</p>
<ul
  class="items"
>
  <li>
    a:1
  </li>
  <li>
    b:1
  </li>
</ul>
<button
  class="add"
>
  add
</button>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
UPDATE: .detail::text@7 "0" => "1"
UPDATE: .items > li:nth-of-type(1)::text@2 "0" => "1"
UPDATE: .items > li:nth-of-type(2)::text@2 "0" => "1"
```

# Update `{"title":"Second","$global":{"persisted":true}}`
```html
<h1>
  Second
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 1
</button>
<p
  class="detail"
>
  detail 1
</p>
<ul
  class="items"
>
  <li>
    a:1
  </li>
  <li>
    b:1
  </li>
</ul>
<button
  class="add"
>
  add
</button>
```
## Change
```
UPDATE: h1::text "First" => "Second"
```

# Update `{"title":"Second","$global":{"persisted":true}}`

# Update
```js
document.querySelector(sel).click();
```
```html
<h1>
  Second
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 2
</button>
<p
  class="detail"
>
  detail 2
</p>
<ul
  class="items"
>
  <li>
    a:2
  </li>
  <li>
    b:2
  </li>
</ul>
<button
  class="add"
>
  add
</button>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
UPDATE: .detail::text@7 "1" => "2"
UPDATE: .items > li:nth-of-type(1)::text@2 "1" => "2"
UPDATE: .items > li:nth-of-type(2)::text@2 "1" => "2"
```

# Update
```js
document.querySelector(sel).click();
```
```html
<h1>
  Second
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 2
</button>
<ul
  class="items"
>
  <li>
    a:2
  </li>
  <li>
    b:2
  </li>
</ul>
<button
  class="add"
>
  add
</button>
```
## Change
```
REMOVE: .count + p
```

# Update
```js
document.querySelector(sel).click();
```
```html
<h1>
  Second
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 2
</button>
<p
  class="detail"
>
  detail 2
</p>
<ul
  class="items"
>
  <li>
    a:2
  </li>
  <li>
    b:2
  </li>
</ul>
<button
  class="add"
>
  add
</button>
```
## Change
```
INSERT: .count + .detail
UPDATE: .detail::text@7 "" => "2"
```

# Update
```js
document.querySelector(sel).click();
```
```html
<h1>
  Second
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 3
</button>
<p
  class="detail"
>
  detail 3
</p>
<ul
  class="items"
>
  <li>
    a:3
  </li>
  <li>
    b:3
  </li>
</ul>
<button
  class="add"
>
  add
</button>
```
## Change
```
UPDATE: .count::text@8 "2" => "3"
UPDATE: .items > li:nth-of-type(1)::text@2 "2" => "3"
UPDATE: .items > li:nth-of-type(2)::text@2 "2" => "3"
UPDATE: .detail::text@7 "2" => "3"
```

# Update
```js
document.querySelector(sel).click();
```
```html
<h1>
  Second
</h1>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="count"
>
  clicked 3
</button>
<p
  class="detail"
>
  detail 3
</p>
<ul
  class="items"
>
  <li>
    a:3
  </li>
  <li>
    b:3
  </li>
  <li>
    c3:3
  </li>
</ul>
<button
  class="add"
>
  add
</button>
```
## Change
```
INSERT: .items > li:nth-of-type(2) + li
UPDATE: .items > li:nth-of-type(3)::text@3 "" => "3"
```
