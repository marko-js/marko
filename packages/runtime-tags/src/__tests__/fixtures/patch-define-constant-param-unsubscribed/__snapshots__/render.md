# Render
```html
<span>
  x! 0
</span>
<span>
  x! 0
</span>
<span>
  x! 0
</span>
<button>
  t
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<span>
  x! 1
</span>
<span>
  x! 1
</span>
<span>
  x! 1
</span>
<button>
  t
</button>
```
## Change
```
UPDATE: span:nth-of-type(1)::text@3 "0" => "1"
UPDATE: span:nth-of-type(2)::text@3 "0" => "1"
UPDATE: span:nth-of-type(3)::text@3 "0" => "1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<span>
  x! 2
</span>
<span>
  x! 2
</span>
<span>
  x! 2
</span>
<button>
  t
</button>
```
## Change
```
UPDATE: span:nth-of-type(1)::text@3 "1" => "2"
UPDATE: span:nth-of-type(2)::text@3 "1" => "2"
UPDATE: span:nth-of-type(3)::text@3 "1" => "2"
```
