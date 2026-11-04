# Render `{"show":false}`
```html
<button>
  0
</button>
<button>
  0
</button>
```

# Update `{"show":true}`
```html
<button>
  0
</button>
<span>
  1
</span>
<button>
  0
</button>
<span>
  0
</span>
```
## Change
```
INSERT: button:nth-of-type(1) + span
INSERT: button:nth-of-type(2) + span
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
<span>
  1
</span>
<button>
  0
</button>
<span>
  0
</span>
```
## Change
```
UPDATE: button:nth-of-type(1)::text "0" => "1"
```
