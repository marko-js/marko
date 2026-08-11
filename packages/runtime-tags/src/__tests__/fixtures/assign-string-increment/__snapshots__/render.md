# Render
```html
<button
  id="post"
>
  post
</button>
<button
  id="pre"
>
  pre
</button>
<button
  id="dec"
>
  dec
</button>
<div>
  5:
</div>
```

# Update
```js
document.querySelector("#post").click();
```
```html
<button
  id="post"
>
  post
</button>
<button
  id="pre"
>
  pre
</button>
<button
  id="dec"
>
  dec
</button>
<div>
  6:5
</div>
```
## Change
```
UPDATE: div::text@0 "5" => "6"
UPDATE: div::text@2 "" => "5"
```

# Update
```js
document.querySelector("#pre").click();
```
```html
<button
  id="post"
>
  post
</button>
<button
  id="pre"
>
  pre
</button>
<button
  id="dec"
>
  dec
</button>
<div>
  7:7
</div>
```
## Change
```
UPDATE: div::text@0 "6" => "7"
UPDATE: div::text@2 "5" => "7"
```

# Update
```js
document.querySelector("#dec").click();
```
```html
<button
  id="post"
>
  post
</button>
<button
  id="pre"
>
  pre
</button>
<button
  id="dec"
>
  dec
</button>
<div>
  6:7
</div>
```
## Change
```
UPDATE: div::text@0 "7" => "6"
```
