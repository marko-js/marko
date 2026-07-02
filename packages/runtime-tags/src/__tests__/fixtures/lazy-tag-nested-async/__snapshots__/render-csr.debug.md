# Render `{"value":1}`
```html
<div
  id="before"
>
  before
</div>
<div
  id="after"
>
  after
</div>
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
<div
  id="after"
>
  after
</div>
```
## Change
```
INSERT: #before + #child
UPDATE: #child::text@6 "" => "1"
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
<div
  id="after"
>
  after
</div>
```
## Change
```
INSERT: #child + #child-await
UPDATE: #child-await::text " " => "10"
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
<div
  id="after"
>
  after
</div>
```
## Change
```
INSERT: #child-await + #grand
UPDATE: #grand::text@8 "" => "1"
UPDATE: #grand::text@6 "" => "1"
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
UPDATE: #grand-await::text " " => "20"
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
