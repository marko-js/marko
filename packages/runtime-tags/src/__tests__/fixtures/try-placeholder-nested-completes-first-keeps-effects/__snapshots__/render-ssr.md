# Render
```html
outer
```

# Update
```html
outer
<button>
  0
</button>
```
## Change
```
INSERT: button
INSERT: button::text("0")
```

# Update
```html
outer
<button>
  0
</button>
```
## Change
```
INSERT: t > button:nth-of-type(1)::text("0")
```

# Update
```html
<button>
  0
</button>
<button>
  0
</button>
<button>
  0
</button>
<button>
  0
</button>
```
## Change
```
REMOVE: ::text("outer")
INSERT: button:nth-of-type(1), button:nth-of-type(2), button:nth-of-type(3)
INSERT: button:nth-of-type(1)::text("0")
```

# Update
```js
document.querySelectorAll("button")[0].click();
```
```html
<button>
  1
</button>
<button>
  1
</button>
<button>
  1
</button>
<button>
  1
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text "0" => "1"
UPDATE: button:nth-of-type(2)::text "0" => "1"
UPDATE: button:nth-of-type(3)::text "0" => "1"
UPDATE: button:nth-of-type(4)::text "0" => "1"
```

# Update
```js
document.querySelectorAll("button")[1].click();
```
```html
<button>
  2
</button>
<button>
  2
</button>
<button>
  2
</button>
<button>
  2
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text "1" => "2"
UPDATE: button:nth-of-type(2)::text "1" => "2"
UPDATE: button:nth-of-type(3)::text "1" => "2"
UPDATE: button:nth-of-type(4)::text "1" => "2"
```

# Update
```js
document.querySelectorAll("button")[2].click();
```
```html
<button>
  3
</button>
<button>
  3
</button>
<button>
  3
</button>
<button>
  3
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text "2" => "3"
UPDATE: button:nth-of-type(2)::text "2" => "3"
UPDATE: button:nth-of-type(3)::text "2" => "3"
UPDATE: button:nth-of-type(4)::text "2" => "3"
```

# Update
```js
document.querySelectorAll("button")[3].click();
```
```html
<button>
  4
</button>
<button>
  4
</button>
<button>
  4
</button>
<button>
  4
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text "3" => "4"
UPDATE: button:nth-of-type(2)::text "3" => "4"
UPDATE: button:nth-of-type(3)::text "3" => "4"
UPDATE: button:nth-of-type(4)::text "3" => "4"
```
