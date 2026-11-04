# Render `{"a":"a","c":"c","d":"d"}`
```html
<button>
  b
</button>
<div>
  dabc
</div>
```

# Update `{"a":"A","c":"c","d":"d"}`
```html
<button>
  b
</button>
<div>
  dAbc
</div>
```
## Change
```
UPDATE: div::text "dabc" => "dAbc"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  b
</button>
<div>
  dAb!c
</div>
```
## Change
```
UPDATE: div::text "dAbc" => "dAb!c"
```

# Update `{"a":"A","c":"C","d":"D"}`
```html
<button>
  b
</button>
<div>
  DAb!C
</div>
```
## Change
```
UPDATE: div::text "dAb!c" => "DAb!C"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  b
</button>
<div>
  DAb!!C
</div>
```
## Change
```
UPDATE: div::text "DAb!C" => "DAb!!C"
```
