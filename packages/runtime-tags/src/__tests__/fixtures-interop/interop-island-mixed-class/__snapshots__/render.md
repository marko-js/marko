# Render
```html
<button
  id="tags"
>
  Tags 0
</button>
<div
  id="greeting"
>
  Hello from class
</div>
<button
  id="class"
>
  0
</button>
```

# Update
```js
container.querySelector("#tags").click();
```
```html
<button
  id="tags"
>
  Tags 1
</button>
<div
  id="greeting"
>
  Hello from class
</div>
<button
  id="class"
>
  0
</button>
```
## Change
```
UPDATE: #tags::text@5 "0" => "1"
```

# Update
```js
container.querySelector("#class").click();
```
```html
<button
  id="tags"
>
  Tags 1
</button>
<div
  id="greeting"
>
  Hello from class
</div>
<button
  id="class"
>
  1
</button>
```
## Change
```
UPDATE: #class::text "0" => "1"
```

# Update
```js
container.querySelector("#tags").click();
```
```html
<button
  id="tags"
>
  Tags 2
</button>
<div
  id="greeting"
>
  Hello from class
</div>
<button
  id="class"
>
  1
</button>
```
## Change
```
UPDATE: #tags::text@5 "1" => "2"
```
