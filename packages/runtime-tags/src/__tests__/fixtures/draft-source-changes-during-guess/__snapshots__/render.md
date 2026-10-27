# Render
```html
<button>
  1
</button>
<button>
  source
</button>
```

# Update
```js
click(document, 0);
click(document, 1);
```
```html
<button>
  5
</button>
<button>
  source
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text "1" => "5"
```

# Update
```html
<button>
  2
</button>
<button>
  source
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text "5" => "2"
```
