# Render
```html
<div>
  <button
    class="a"
  >
    0
  </button>
   + 
  <button
    class="b"
  >
    0
  </button>
   = 0
</div>
```

# Update
```js
container.querySelector("button.a").click();
```
```html
<div>
  <button
    class="a"
  >
    10
  </button>
   + 
  <button
    class="b"
  >
    0
  </button>
   = 10
</div>
```
## Change
```
UPDATE: .a::text "0" => "10"
UPDATE: div::text@6 "0" => "10"
```

# Update
```js
container.querySelector("button.b").click();
```
```html
<div>
  <button
    class="a"
  >
    10
  </button>
   + 
  <button
    class="b"
  >
    5
  </button>
   = 15
</div>
```
## Change
```
UPDATE: .b::text "0" => "5"
UPDATE: div::text@6 "10" => "15"
```
