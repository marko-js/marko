# Render `{"rows":[{"id":1,"label":"a"},{"id":2,"label":"b"},{"id":3,"label":"c"}],"selected":2}`
```html
<button
  class="flip"
>
  flip
</button>
<ul>
  <li>
    a
  </li>
  <li
    class="sel"
  >
    b
  </li>
  <li>
    c
  </li>
</ul>
```

# Update
```js
container.querySelector("button.flip").click();
```
```html
<button
  class="flip"
>
  flip
</button>
<ul>
  <li>
    a
  </li>
  <li>
    b
  </li>
  <li>
    c
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(2)[class] "sel" => null
```

# Update
```js
container.querySelector("button.flip").click();
```
```html
<button
  class="flip"
>
  flip
</button>
<ul>
  <li>
    a
  </li>
  <li
    class="sel"
  >
    b
  </li>
  <li>
    c
  </li>
</ul>
```
## Change
```
UPDATE: .sel[class] null => "sel"
```
