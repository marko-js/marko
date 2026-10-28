# Render `{"label":"one","on":true}`
```html
<p
  class="x"
>
  one 0
</p>
<button>
  +
</button>
```

# Update `{"label":"two","on":true}`
```html
<p
  class="x"
>
  two 0
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: .x::text@0 "one" => "two"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p
  class="x"
>
  two 1
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: .x::text@4 "0" => "1"
```

# Update `{"label":"three","on":false}`
```html
<p
  class="x"
>
  three 1
</p>
<button>
  +
</button>
```
## Change
```
REMOVE: style::text(".x { color: red }")
INSERT: style::text(".x { color: blue }")
UPDATE: .x::text@0 "two" => "three"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p
  class="x"
>
  three 2
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: .x::text@6 "1" => "2"
```

# Update `{"label":"four","on":true}`
```html
<p
  class="x"
>
  four 2
</p>
<button>
  +
</button>
```
## Change
```
REMOVE: style::text(".x { color: blue }")
INSERT: style::text(".x { color: red }")
UPDATE: .x::text@0 "three" => "four"
```
