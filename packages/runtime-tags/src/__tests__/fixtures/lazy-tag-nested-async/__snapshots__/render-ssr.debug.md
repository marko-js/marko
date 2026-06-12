# Render `{"value":1}`
```html
<div
  id="before"
>
  before
</div>
<button
  id="child"
>
  child:1
</button>
```

# Update
```html
<div
  id="before"
>
  before
</div>
<button
  id="child"
>
  child:1
</button>
<span
  id="child-await"
>
  10
</span>
<button
  id="grand"
>
  grand:1:1
</button>
```
## Change
```
INSERT: #child + #child-await
INSERT: #child-await::text("10")
INSERT: #child-await + #grand
INSERT: #grand::text("grand:")
INSERT: #grand::text@0 + ::text("1")
INSERT: #grand::text@6 + ::text(":")
INSERT: #grand::text@7 + ::text("1")
```

# Update
```html
<div
  id="before"
>
  before
</div>
<button
  id="child"
>
  child:1
</button>
<span
  id="child-await"
>
  10
</span>
<button
  id="grand"
>
  grand:1:1
</button>
<span
  id="grand-await"
>
  20
</span>
<div
  id="after"
>
  after
</div>
```
## Change
```
INSERT: #grand + #grand-await
INSERT: #grand-await::text("20")
INSERT: #grand-await + #after
INSERT: #after::text("after")
```

# Update
```js
container.querySelector("#child").click();
```
```html
<div
  id="before"
>
  before
</div>
<button
  id="child"
>
  child:2
</button>
<span
  id="child-await"
>
  10
</span>
<button
  id="grand"
>
  grand:1:2
</button>
<span
  id="grand-await"
>
  20
</span>
<div
  id="after"
>
  after
</div>
```
## Change
```
UPDATE: #child::text@6 "1" => "2"
UPDATE: #grand::text@8 "1" => "2"
```

# Update
```js
container.querySelector("#grand").click();
```
```html
<div
  id="before"
>
  before
</div>
<button
  id="child"
>
  child:2
</button>
<span
  id="child-await"
>
  10
</span>
<button
  id="grand"
>
  grand:2:2
</button>
<span
  id="grand-await"
>
  20
</span>
<div
  id="after"
>
  after
</div>
```
## Change
```
UPDATE: #grand::text@6 "1" => "2"
```
