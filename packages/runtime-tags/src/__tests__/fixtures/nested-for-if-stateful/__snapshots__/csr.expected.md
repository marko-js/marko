# Render
```html
<!---->
<!---->
<button>
  Increment 0
</button>
<!---->
<!---->
<button>
  Increment 0
</button>
<!---->
<!---->
<button>
  Increment 0
</button>
<!---->
<!---->
```

# Mutations
```
INSERT #comment0, #comment1, button0, #comment2, #comment3, button1, #comment4, #comment5, button2, #comment6, #comment7
```

# Render
```js
container.querySelectorAll("button")[buttonIndex].click();
buttonIndex = (buttonIndex + 1) % 3;
```
```html
<!---->
<!---->
<button>
  Confirm 1
</button>
<!---->
<!---->
<button>
  Increment 0
</button>
<!---->
<!---->
<button>
  Increment 0
</button>
<!---->
<!---->
```

# Mutations
```
INSERT button0
REMOVE button after button0
UPDATE button0/#text1 "" => "1"
```

# Render
```js
container.querySelectorAll("button")[buttonIndex].click();
buttonIndex = (buttonIndex + 1) % 3;
```
```html
<!---->
<!---->
<button>
  Confirm 1
</button>
<!---->
<!---->
<button>
  Confirm 1
</button>
<!---->
<!---->
<button>
  Increment 0
</button>
<!---->
<!---->
```

# Mutations
```
INSERT button1
REMOVE button after button1
UPDATE button1/#text1 "" => "1"
```

# Render
```js
container.querySelectorAll("button")[buttonIndex].click();
buttonIndex = (buttonIndex + 1) % 3;
```
```html
<!---->
<!---->
<button>
  Confirm 1
</button>
<!---->
<!---->
<button>
  Confirm 1
</button>
<!---->
<!---->
<button>
  Confirm 1
</button>
<!---->
<!---->
```

# Mutations
```
INSERT button2
REMOVE button after button2
UPDATE button2/#text1 "" => "1"
```

# Render
```js
container.querySelectorAll("button")[buttonIndex].click();
buttonIndex = (buttonIndex + 1) % 3;
```
```html
<!---->
<!---->
<button>
  Increment 1
</button>
<!---->
<!---->
<button>
  Confirm 1
</button>
<!---->
<!---->
<button>
  Confirm 1
</button>
<!---->
<!---->
```

# Mutations
```
INSERT button0
REMOVE button after button0
UPDATE button0/#text1 "" => "1"
```

# Render
```js
container.querySelectorAll("button")[buttonIndex].click();
buttonIndex = (buttonIndex + 1) % 3;
```
```html
<!---->
<!---->
<button>
  Increment 1
</button>
<!---->
<!---->
<button>
  Increment 1
</button>
<!---->
<!---->
<button>
  Confirm 1
</button>
<!---->
<!---->
```

# Mutations
```
INSERT button1
REMOVE button after button1
UPDATE button1/#text1 "" => "1"
```

# Render
```js
container.querySelectorAll("button")[buttonIndex].click();
buttonIndex = (buttonIndex + 1) % 3;
```
```html
<!---->
<!---->
<button>
  Increment 1
</button>
<!---->
<!---->
<button>
  Increment 1
</button>
<!---->
<!---->
<button>
  Increment 1
</button>
<!---->
<!---->
```

# Mutations
```
INSERT button2
REMOVE button after button2
UPDATE button2/#text1 "" => "1"
```

# Render
```js
container.querySelectorAll("button")[buttonIndex].click();
buttonIndex = (buttonIndex + 1) % 3;
```
```html
<!---->
<!---->
<button>
  Confirm 2
</button>
<!---->
<!---->
<button>
  Increment 1
</button>
<!---->
<!---->
<button>
  Increment 1
</button>
<!---->
<!---->
```

# Mutations
```
INSERT button0
REMOVE button after button0
UPDATE button0/#text1 "" => "2"
```

# Render
```js
container.querySelectorAll("button")[buttonIndex].click();
buttonIndex = (buttonIndex + 1) % 3;
```
```html
<!---->
<!---->
<button>
  Confirm 2
</button>
<!---->
<!---->
<button>
  Confirm 2
</button>
<!---->
<!---->
<button>
  Increment 1
</button>
<!---->
<!---->
```

# Mutations
```
INSERT button1
REMOVE button after button1
UPDATE button1/#text1 "" => "2"
```

# Render
```js
container.querySelectorAll("button")[buttonIndex].click();
buttonIndex = (buttonIndex + 1) % 3;
```
```html
<!---->
<!---->
<button>
  Confirm 2
</button>
<!---->
<!---->
<button>
  Confirm 2
</button>
<!---->
<!---->
<button>
  Confirm 2
</button>
<!---->
<!---->
```

# Mutations
```
INSERT button2
REMOVE button after button2
UPDATE button2/#text1 "" => "2"
```