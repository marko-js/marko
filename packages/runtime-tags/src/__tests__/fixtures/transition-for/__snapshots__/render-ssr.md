# Render
```html
<button>
  inc
</button>
<ul>
  <li>
    0
  </li>
</ul>
LOADING...
```

# Update
```html
<button>
  inc
</button>
<ul>
  <li>
    0
  </li>
</ul>
resolved: 1
```
## Change
```
REMOVE: ::text("LOADING...")
INSERT: ul + :is(::text("resolved: "), ::text("1"))
```

# Update
```js
container.querySelector("button").click();
```

# Update
```html
<button>
  inc
</button>
<ul>
  <li>
    0
  </li>
  <li>
    1
  </li>
</ul>
resolved: 2
```
## Change
```
INSERT: ul > li:nth-of-type(1) + li
UPDATE: ::text@10 "1" => "2"
```
