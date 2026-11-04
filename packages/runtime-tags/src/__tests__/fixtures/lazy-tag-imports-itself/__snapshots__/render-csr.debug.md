# Render
```html
<button>
  under 2:0
</button>
```

# Update
```html
<button>
  under 2:0
</button>
<button>
  under 1:0
</button>
```
## Change
```
INSERT: button:nth-of-type(1) + button
```

# Update
```html
<button>
  under 2:0
</button>
<button>
  under 1:0
</button>
<button>
  under 0:0
</button>
```
## Change
```
INSERT: button:nth-of-type(2) + button
```

# Update
```js
for (const b of document.querySelectorAll("button"))
b.click();
```
```html
<button>
  under 2:1
</button>
<button>
  under 1:1
</button>
<button>
  under 0:1
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text@8 "0" => "1"
UPDATE: button:nth-of-type(2)::text@8 "0" => "1"
UPDATE: button:nth-of-type(3)::text@8 "0" => "1"
```

# Update
```js
for (const b of document.querySelectorAll("button"))
b.click();
```
```html
<button>
  under 2:2
</button>
<button>
  under 1:2
</button>
<button>
  under 0:2
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text@8 "1" => "2"
UPDATE: button:nth-of-type(2)::text@8 "1" => "2"
UPDATE: button:nth-of-type(3)::text@8 "1" => "2"
```
