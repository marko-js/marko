# Render `{"label":"a"}`
```html
<button>
  *1
</button>
<button>
  2
</button>
<p>
  a
</p>
```

# Update
```js
document.querySelector("button:last-of-type").click();
```
```html
<button>
  1
</button>
<button>
  *2
</button>
<p>
  a
</p>
```
## Change
```
UPDATE: button:nth-of-type(1)::text "*" => ""
UPDATE: button:nth-of-type(2)::text@0 "" => "*"
```

# Update `{"label":"b"}`
```html
<button>
  1
</button>
<button>
  *2
</button>
<p>
  b
</p>
```
## Change
```
UPDATE: p::text "a" => "b"
```
