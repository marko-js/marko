# Render
```html
<button>
  Increment 0
</button>
<button>
  Increment 0
</button>
<button>
  Increment 0
</button>
```

# Update
```js
document.querySelectorAll("button")[buttonIndex].click();
buttonIndex = (buttonIndex + 1) % 3;
```
```html
<button>
  Confirm 1
</button>
<button>
  Increment 0
</button>
<button>
  Increment 0
</button>
```
## Change
```
REMOVE: button
INSERT: button:nth-of-type(1)
UPDATE: button:nth-of-type(1)::text@8 "" => "1"
```

# Update
```js
document.querySelectorAll("button")[buttonIndex].click();
buttonIndex = (buttonIndex + 1) % 3;
```
```html
<button>
  Confirm 1
</button>
<button>
  Confirm 1
</button>
<button>
  Increment 0
</button>
```
## Change
```
REMOVE: button
INSERT: button:nth-of-type(2)
UPDATE: button:nth-of-type(2)::text@8 "" => "1"
```

# Update
```js
document.querySelectorAll("button")[buttonIndex].click();
buttonIndex = (buttonIndex + 1) % 3;
```
```html
<button>
  Confirm 1
</button>
<button>
  Confirm 1
</button>
<button>
  Confirm 1
</button>
```
## Change
```
REMOVE: button
INSERT: button:nth-of-type(3)
UPDATE: button:nth-of-type(3)::text@8 "" => "1"
```

# Update
```js
document.querySelectorAll("button")[buttonIndex].click();
buttonIndex = (buttonIndex + 1) % 3;
```
```html
<button>
  Increment 1
</button>
<button>
  Confirm 1
</button>
<button>
  Confirm 1
</button>
```
## Change
```
REMOVE: button
INSERT: button:nth-of-type(1)
UPDATE: button:nth-of-type(1)::text@10 "" => "1"
```

# Update
```js
document.querySelectorAll("button")[buttonIndex].click();
buttonIndex = (buttonIndex + 1) % 3;
```
```html
<button>
  Increment 1
</button>
<button>
  Increment 1
</button>
<button>
  Confirm 1
</button>
```
## Change
```
REMOVE: button
INSERT: button:nth-of-type(2)
UPDATE: button:nth-of-type(2)::text@10 "" => "1"
```

# Update
```js
document.querySelectorAll("button")[buttonIndex].click();
buttonIndex = (buttonIndex + 1) % 3;
```
```html
<button>
  Increment 1
</button>
<button>
  Increment 1
</button>
<button>
  Increment 1
</button>
```
## Change
```
REMOVE: button
INSERT: button:nth-of-type(3)
UPDATE: button:nth-of-type(3)::text@10 "" => "1"
```

# Update
```js
document.querySelectorAll("button")[buttonIndex].click();
buttonIndex = (buttonIndex + 1) % 3;
```
```html
<button>
  Confirm 2
</button>
<button>
  Increment 1
</button>
<button>
  Increment 1
</button>
```
## Change
```
REMOVE: button
INSERT: button:nth-of-type(1)
UPDATE: button:nth-of-type(1)::text@8 "" => "2"
```

# Update
```js
document.querySelectorAll("button")[buttonIndex].click();
buttonIndex = (buttonIndex + 1) % 3;
```
```html
<button>
  Confirm 2
</button>
<button>
  Confirm 2
</button>
<button>
  Increment 1
</button>
```
## Change
```
REMOVE: button
INSERT: button:nth-of-type(2)
UPDATE: button:nth-of-type(2)::text@8 "" => "2"
```

# Update
```js
document.querySelectorAll("button")[buttonIndex].click();
buttonIndex = (buttonIndex + 1) % 3;
```
```html
<button>
  Confirm 2
</button>
<button>
  Confirm 2
</button>
<button>
  Confirm 2
</button>
```
## Change
```
REMOVE: button
INSERT: button:nth-of-type(3)
UPDATE: button:nth-of-type(3)::text@8 "" => "2"
```
