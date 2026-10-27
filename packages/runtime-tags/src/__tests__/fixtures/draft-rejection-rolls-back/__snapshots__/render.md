# Render
```html
<button>
  1 
</button>
<button>
  sync
</button>
```

# Update
```js
click(document, 0);
```
```html
<button>
  5 
</button>
<button>
  sync
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text@0 "1" => "5"
```

# Update
```html
<button>
  1 failed
</button>
<button>
  sync
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text@0 "5" => "1"
UPDATE: button:nth-of-type(1)::text@2 "" => "failed"
```

# Update
```js
click(document, 1);
```
```html
<button>
  1 failed now
</button>
<button>
  sync
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text@2 "failed" => "failed now"
```
