# Render `{"show":true,"label":"a"}`
```html
<button>
  plain
</button>
<p>
  w-a
</p>
<div>
  w-a
</div>
<i
  class="w-a"
  style="color:blue"
  title="w-a"
/>
<section>
  <!--w-a-->
</section>
<em>
  shown
</em>
```

# Update `{"show":true,"label":"b"}`
```html
<button>
  plain
</button>
<p>
  w-b
</p>
<div>
  w-b
</div>
<i
  class="w-b"
  style="color:blue"
  title="w-b"
/>
<section>
  <!--w-b-->
</section>
<em>
  shown
</em>
```
## Change
```
UPDATE: p::text "w-a" => "w-b"
INSERT: div::text("w-b")
REMOVE: div::text + ::text("w-a")
UPDATE: .w-b[title] "w-a" => "w-b"
UPDATE: .w-b[class] "w-a" => "w-b"
UPDATE: section > #comment "w-a" => "w-b"
REMOVE: title::text("w-a")
INSERT: title::text("w-b")
```

# Update `{"show":true,"label":"c"}`
```html
<button>
  plain
</button>
<p>
  w-c
</p>
<div>
  w-c
</div>
<i
  class="w-c"
  style="color:blue"
  title="w-c"
/>
<section>
  <!--w-c-->
</section>
```
## Change
```
UPDATE: p::text "w-b" => "w-c"
INSERT: div::text("w-c")
REMOVE: div::text + ::text("w-b")
UPDATE: .w-c[title] "w-b" => "w-c"
UPDATE: .w-c[class] "w-b" => "w-c"
UPDATE: section > #comment "w-b" => "w-c"
REMOVE: title::text("w-b")
INSERT: title::text("w-c")
REMOVE: section + em
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  plain
</button>
<p>
  p-c
</p>
<div>
  p-c
</div>
<i
  class="p-c"
  style="color:blue"
  title="p-c"
/>
<section>
  <!--p-c-->
</section>
<em>
  shown
</em>
```
## Change
```
UPDATE: p::text "w-c" => "p-c"
INSERT: div::text("p-c")
REMOVE: div::text + ::text("w-c")
UPDATE: .p-c[title] "w-c" => "p-c"
UPDATE: .p-c[class] "w-c" => "p-c"
UPDATE: section > #comment "w-c" => "p-c"
REMOVE: title::text("w-c")
INSERT: title::text("p-c")
INSERT: section + em
```

# Update `{"show":true,"label":"d"}`
```html
<button>
  plain
</button>
<p>
  p-d
</p>
<div>
  p-d
</div>
<i
  class="p-d"
  style="color:blue"
  title="p-d"
/>
<section>
  <!--p-d-->
</section>
<em>
  shown
</em>
```
## Change
```
UPDATE: p::text "p-c" => "p-d"
INSERT: div::text("p-d")
REMOVE: div::text + ::text("p-c")
UPDATE: .p-d[title] "p-c" => "p-d"
UPDATE: .p-d[class] "p-c" => "p-d"
UPDATE: section > #comment "p-c" => "p-d"
REMOVE: title::text("p-c")
INSERT: title::text("p-d")
```
