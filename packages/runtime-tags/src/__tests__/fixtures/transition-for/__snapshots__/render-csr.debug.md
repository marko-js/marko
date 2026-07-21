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
LOADING...
```
## Change
```
INSERT: ul + ::text("LOADING...")
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
INSERT: ul + :is(::text("resolved: "), ::text("1"))
REMOVE: ::text@10 + ::text("LOADING...")
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
