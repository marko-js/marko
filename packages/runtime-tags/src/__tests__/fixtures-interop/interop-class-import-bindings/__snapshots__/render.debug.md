# Render
```html
<button
  id="class"
>
  0
</button>
<p>
  Card: named
</p>
<p>
  Card: mixed
</p>
<p>
  Card: alias
</p>
<p>
  Card: lowercase
</p>
Namespace: namespace
<p>
  Default: default alias
</p>
<p>
  Default: default
</p>
<button
  data-parent="0"
  id="direct"
>
  0
</button>
<button
  data-parent="0"
  id="named-tags"
>
  0
</button>
```

# Update
```js
(document.querySelector("#named-tags")).click();
```
```html
<button
  id="class"
>
  0
</button>
<p>
  Card: named
</p>
<p>
  Card: mixed
</p>
<p>
  Card: alias
</p>
<p>
  Card: lowercase
</p>
Namespace: namespace
<p>
  Default: default alias
</p>
<p>
  Default: default
</p>
<button
  data-parent="0"
  id="direct"
>
  0
</button>
<button
  data-parent="0"
  id="named-tags"
>
  1
</button>
```
## Change
```
UPDATE: #named-tags::text "0" => "1"
```

# Update
```js
(document.querySelector("#class")).click();
```
```html
<button
  id="class"
>
  1
</button>
<p>
  Card: named
</p>
<p>
  Card: mixed
</p>
<p>
  Card: alias
</p>
<p>
  Card: lowercase
</p>
Namespace: namespace
<p>
  Default: default alias
</p>
<p>
  Default: default
</p>
<button
  data-parent="1"
  id="direct"
>
  0
</button>
<button
  data-parent="1"
  id="named-tags"
>
  1
</button>
```
## Change
```
UPDATE: #direct[data-parent] "0" => "1"
UPDATE: #named-tags[data-parent] "0" => "1"
UPDATE: #class::text "0" => "1"
```

# Update
```js
(document.querySelector("#direct")).click();
```
```html
<button
  id="class"
>
  1
</button>
<p>
  Card: named
</p>
<p>
  Card: mixed
</p>
<p>
  Card: alias
</p>
<p>
  Card: lowercase
</p>
Namespace: namespace
<p>
  Default: default alias
</p>
<p>
  Default: default
</p>
<button
  data-parent="1"
  id="direct"
>
  1
</button>
<button
  data-parent="1"
  id="named-tags"
>
  1
</button>
```
## Change
```
UPDATE: #direct::text "0" => "1"
```

# Update
```js
(document.querySelector("#named-tags")).click();
```
```html
<button
  id="class"
>
  1
</button>
<p>
  Card: named
</p>
<p>
  Card: mixed
</p>
<p>
  Card: alias
</p>
<p>
  Card: lowercase
</p>
Namespace: namespace
<p>
  Default: default alias
</p>
<p>
  Default: default
</p>
<button
  data-parent="1"
  id="direct"
>
  1
</button>
<button
  data-parent="1"
  id="named-tags"
>
  2
</button>
```
## Change
```
UPDATE: #named-tags::text "1" => "2"
```

# Update
```js
(document.querySelector("#class")).click();
```
```html
<button
  id="class"
>
  2
</button>
<p>
  Card: named
</p>
<p>
  Card: mixed
</p>
<p>
  Card: alias
</p>
<p>
  Card: lowercase
</p>
Namespace: namespace
<p>
  Default: default alias
</p>
<p>
  Default: default
</p>
<button
  data-parent="2"
  id="direct"
>
  1
</button>
<button
  data-parent="2"
  id="named-tags"
>
  2
</button>
```
## Change
```
UPDATE: #direct[data-parent] "1" => "2"
UPDATE: #named-tags[data-parent] "1" => "2"
UPDATE: #class::text "1" => "2"
```
