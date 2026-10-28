# Render `{"show":false,"x":"a"}`
```html
<p>
  0:a
</p>
<button>
  +
</button>
```

# Update `{"show":true,"x":"b"}`
```html
<div>
  <em>
    b
  </em>
</div>
<p>
  0:b
</p>
<button>
  +
</button>
```
## Change
```
INSERT: div
UPDATE: p::text "0:a" => "0:b"
```

# Update
```js
d.querySelector("button").click();
```
```html
<div>
  <em>
    b
  </em>
</div>
<p>
  1:b
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "0:b" => "1:b"
```

# Update `{"show":true,"x":"c"}`
```html
<div>
  <em>
    c
  </em>
</div>
<p>
  1:c
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: div > em::text "b" => "c"
UPDATE: p::text "1:b" => "1:c"
```
