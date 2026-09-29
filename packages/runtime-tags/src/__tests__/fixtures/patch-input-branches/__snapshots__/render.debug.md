# Render `{"name":"world","show":true,"items":[1,2]}`
```html
<div
  class="wrap"
>
  <h1>
    Hello world
  </h1>
  <p>
    shown
  </p>
  <li>
    1
  </li>
  <li>
    2
  </li>
</div>
```

# Update `{"name":"marko","show":true,"items":[1,2,3]}`
```html
<div
  class="wrap"
>
  <h1>
    Hello marko
  </h1>
  <p>
    shown
  </p>
  <li>
    1
  </li>
  <li>
    2
  </li>
  <li>
    3
  </li>
</div>
```
## Change
```
UPDATE: .wrap > h1::text@6 "world" => "marko"
INSERT: .wrap > li:nth-of-type(2) + li
```

# Update `{"name":"marko","show":false,"items":[3]}`
```html
<div
  class="wrap"
>
  <h1>
    Hello marko
  </h1>
  <li>
    3
  </li>
</div>
```
## Change
```
REMOVE: .wrap > h1 + p
UPDATE: .wrap > li::text "1" => "3"
REMOVE: .wrap > li + li
REMOVE: .wrap > li + li
```

# Update `{"name":"mark","show":true,"items":[3]}`
```html
<div
  class="wrap"
>
  <h1>
    Hello mark
  </h1>
  <p>
    shown
  </p>
  <li>
    3
  </li>
</div>
```
## Change
```
UPDATE: .wrap > h1::text@6 "marko" => "mark"
INSERT: .wrap > h1 + p
```
