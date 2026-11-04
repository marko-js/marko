# Render `{"n":1,"x":"a","show":true}`
```html
<p>
  a 1
</p>
<p>
  a 1
</p>
<button>
  toggle
</button>
```
## Console
```
LOG "effect" 1 2
LOG "effect" 1 2
```

# Update `{"n":2,"x":"a","show":true}`
```html
<p>
  a 2
</p>
<p>
  a 2
</p>
<button>
  toggle
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text@2 "1" => "2"
UPDATE: p:nth-of-type(2)::text@2 "1" => "2"
```
## Console
```
LOG "effect" 2 4
LOG "effect" 2 4
```

# Update
```js
document.querySelector("button").click();
```

# Update
```js
document.querySelector("button").click();
```
## Console
```
LOG "effect" 2 4
```

# Update `{"n":3,"x":"a","show":true}`
```html
<p>
  a 3
</p>
<p>
  a 3
</p>
<button>
  toggle
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text@2 "2" => "3"
UPDATE: p:nth-of-type(2)::text@2 "2" => "3"
```
## Console
```
LOG "effect" 3 6
LOG "effect" 3 6
```
