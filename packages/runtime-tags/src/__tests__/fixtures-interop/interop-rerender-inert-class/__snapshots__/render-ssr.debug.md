# Render
```html
<button
  id="tags"
>
  Tags
</button>
<div
  id="display"
>
  hi
</div>
```

# Update
```js
container.querySelector("#tags").click();
```
```html
<button
  id="tags"
>
  Tags
</button>
<div
  id="display"
>
  hi!
</div>
```
## Change
```
INSERT: #tags + #display
INSERT: #display::text("hi!")
REMOVE: #display + #display
```

# Update
```js
container.querySelector("#tags").click();
```
```html
<button
  id="tags"
>
  Tags
</button>
<div
  id="display"
>
  hi!!
</div>
```
## Change
```
UPDATE: #display::text "hi!" => "hi!!"
```
