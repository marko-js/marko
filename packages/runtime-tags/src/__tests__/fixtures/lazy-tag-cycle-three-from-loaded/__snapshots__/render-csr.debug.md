# Render
```html
<button>
  b 4:0
</button>
<button>
  c 3:0
</button>
<button>
  a 2:0
</button>
```

# Update
```html
<button>
  b 4:0
</button>
<button>
  c 3:0
</button>
<button>
  a 2:0
</button>
<button>
  b 1:0
</button>
<button>
  c 0:0
</button>
```
## Change
```
INSERT: button:nth-of-type(3) + :is(button, button)
UPDATE: button:nth-of-type(5)::text@2 "" => "0"
```

# Update
```js
for (const b of document.querySelectorAll("button"))
b.click();
```
```html
<button>
  b 4:1
</button>
<button>
  c 3:1
</button>
<button>
  a 2:1
</button>
<button>
  b 1:1
</button>
<button>
  c 0:1
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text@4 "0" => "1"
UPDATE: button:nth-of-type(2)::text@4 "0" => "1"
UPDATE: button:nth-of-type(3)::text@4 "0" => "1"
UPDATE: button:nth-of-type(4)::text@4 "0" => "1"
UPDATE: button:nth-of-type(5)::text@4 "0" => "1"
```

# Update
```js
for (const b of document.querySelectorAll("button"))
b.click();
```
```html
<button>
  b 4:2
</button>
<button>
  c 3:2
</button>
<button>
  a 2:2
</button>
<button>
  b 1:2
</button>
<button>
  c 0:2
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text@4 "1" => "2"
UPDATE: button:nth-of-type(2)::text@4 "1" => "2"
UPDATE: button:nth-of-type(3)::text@4 "1" => "2"
UPDATE: button:nth-of-type(4)::text@4 "1" => "2"
UPDATE: button:nth-of-type(5)::text@4 "1" => "2"
```
