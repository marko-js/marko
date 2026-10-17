# Render
```html
<button>
  translate
</button>
<ul
  id="list"
>
  <li>
    <em>
      one
    </em>
  </li>
  <li>
    <em>
      two
    </em>
  </li>
</ul>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  translate
</button>
<ul
  id="list"
>
  <li>
    <em>
      uno
    </em>
  </li>
  <li>
    <em>
      dos
    </em>
  </li>
</ul>
```
## Change
```
UPDATE: #list > li:nth-of-type(1) > em::text "one" => "uno"
UPDATE: #list > li:nth-of-type(2) > em::text "two" => "dos"
```
