# Render
```html
<button>
  a 3:0
</button>
<button>
  b 2:0
</button>
<button>
  a 1:0
</button>
<button>
  b 0:0
</button>
```

# Update
```js
for (const b of document.querySelectorAll("button"))
b.click();
```
```html
<button>
  a 3:1
</button>
<button>
  b 2:1
</button>
<button>
  a 1:1
</button>
<button>
  b 0:1
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text@4 "0" => "1"
UPDATE: button:nth-of-type(2)::text@4 "0" => "1"
UPDATE: button:nth-of-type(3)::text@4 "0" => "1"
UPDATE: button:nth-of-type(4)::text@4 "0" => "1"
```

# Update
```js
for (const b of document.querySelectorAll("button"))
b.click();
```
```html
<button>
  a 3:2
</button>
<button>
  b 2:2
</button>
<button>
  a 1:2
</button>
<button>
  b 0:2
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text@4 "1" => "2"
UPDATE: button:nth-of-type(2)::text@4 "1" => "2"
UPDATE: button:nth-of-type(3)::text@4 "1" => "2"
UPDATE: button:nth-of-type(4)::text@4 "1" => "2"
```
