# Render
```html
<ul>
  <li>
    <button
      class="show"
    >
      a
    </button>
  </li>
  <li>
    <button
      class="show"
    >
      b
    </button>
  </li>
</ul>
<button
  class="relabel"
>
  relabel
</button>
<p />
```

# Update
```js
document.querySelector(selector).click();
```
```html
<ul>
  <li>
    <button
      class="show"
    >
      a!
    </button>
  </li>
  <li>
    <button
      class="show"
    >
      b
    </button>
  </li>
</ul>
<button
  class="relabel"
>
  relabel
</button>
<p />
```
## Change
```
UPDATE: ul > li:nth-of-type(1) > button::text "a" => "a!"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<ul>
  <li>
    <button
      class="show"
    >
      a!
    </button>
  </li>
  <li>
    <button
      class="show"
    >
      b
    </button>
  </li>
</ul>
<button
  class="relabel"
>
  relabel
</button>
<p>
  a!
</p>
```
## Change
```
UPDATE: p::text "" => "a!"
```
