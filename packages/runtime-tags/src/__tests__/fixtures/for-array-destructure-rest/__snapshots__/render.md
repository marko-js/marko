# Render
```html
<ul>
  <li>
    0: first=1 rest0=2 rest1=3 len=2
  </li>
  <li>
    1: first=4 rest0=5 rest1=6 len=2
  </li>
</ul>
<button>
  update
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
<ul>
  <li>
    0: first=7 rest0=8 rest1=9 len=3
  </li>
</ul>
<button>
  update
</button>
```
## Change
```
UPDATE: ul > li::text@31 "2" => "3"
UPDATE: ul > li::text@9 "1" => "7"
UPDATE: ul > li::text@17 "2" => "8"
UPDATE: ul > li::text@25 "3" => "9"
REMOVE: ul > li + li
```
