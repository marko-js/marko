# Render
```html
<button
  id="tags"
>
  0
</button>
<ul
  id="list"
>
  <li>
    <button>
      one*
    </button>
    <em>
      first
    </em>
  </li>
  <li>
    <button>
      two
    </button>
    <em>
      second
    </em>
  </li>
</ul>
```

# Update
```js
(document.querySelectorAll("#list button")[1]).click();
```
```html
<button
  id="tags"
>
  1
</button>
<ul
  id="list"
>
  <li>
    <button>
      one
    </button>
    <em>
      first
    </em>
  </li>
  <li>
    <button>
      two*
    </button>
    <em>
      second
    </em>
  </li>
</ul>
```
## Change
```
UPDATE: #tags::text "0" => "1"
UPDATE: #list > li:nth-of-type(1) > button::text "*" => ""
UPDATE: #list > li:nth-of-type(2) > button::text@3 "" => "*"
```
