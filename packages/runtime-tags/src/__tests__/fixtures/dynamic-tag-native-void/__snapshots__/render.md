# Render `{"show":false}`
```html
<br />
<p>
  0
</p>
<img
  src="x.png"
/>
<input
  name="a"
/>
<meta
  content="description"
/>
<textarea>
  count & 0
</textarea>
<if>
  core tag name
</if>
<custom>
  custom tag name
</custom>
<div>
  before0
  <button>
    inc
  </button>
</div>
```

# Update
```js
document.querySelector("button").click();
```
```html
<br />
<p>
  1
</p>
<img
  src="x.png"
/>
<input
  name="a"
/>
<meta
  content="description"
/>
<textarea
  default-value="count & 1"
>
  count & 0
</textarea>
<if>
  core tag name
</if>
<custom>
  custom tag name
</custom>
<div>
  before1
  <button>
    inc
  </button>
</div>
```
## Change
```
UPDATE: p::text "0" => "1"
REMOVE: textarea::text("count & 0")
INSERT: textarea::text("count & 1")
REMOVE: title::text("count 0")
INSERT: title::text("count 1")
UPDATE: div::text@6 "0" => "1"
```
