# Render
```html
<div
  class="value"
>
  v function
</div>
<div
  class="renamed"
>
  v function
</div>
<button
  class="param"
>
  param
</button>
<button
  class="const"
>
  const
</button>
<button
  class="for"
>
  for
</button>
<button
  class="define"
>
  define
</button>
<button
  class="let"
>
  let
</button>
<button
  class="renamed-param"
>
  renamed
</button>
```

# Update
```js
document.querySelector(selector).click();
```
```html
<div
  class="value"
>
  param1 function
</div>
<div
  class="renamed"
>
  v function
</div>
<button
  class="param"
>
  param
</button>
<button
  class="const"
>
  const
</button>
<button
  class="for"
>
  for
</button>
<button
  class="define"
>
  define
</button>
<button
  class="let"
>
  let
</button>
<button
  class="renamed-param"
>
  renamed
</button>
```
## Change
```
UPDATE: .value::text@0 "v" => "param1"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<div
  class="value"
>
  const function
</div>
<div
  class="renamed"
>
  v function
</div>
<button
  class="param"
>
  param
</button>
<button
  class="const"
>
  const
</button>
<button
  class="for"
>
  for
</button>
<button
  class="define"
>
  define
</button>
<button
  class="let"
>
  let
</button>
<button
  class="renamed-param"
>
  renamed
</button>
```
## Change
```
UPDATE: .value::text@0 "param1" => "const"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<div
  class="value"
>
  for function
</div>
<div
  class="renamed"
>
  v function
</div>
<button
  class="param"
>
  param
</button>
<button
  class="const"
>
  const
</button>
<button
  class="for"
>
  for
</button>
<button
  class="define"
>
  define
</button>
<button
  class="let"
>
  let
</button>
<button
  class="renamed-param"
>
  renamed
</button>
```
## Change
```
UPDATE: .value::text@0 "const" => "for"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<div
  class="value"
>
  define function
</div>
<div
  class="renamed"
>
  v function
</div>
<button
  class="param"
>
  param
</button>
<button
  class="const"
>
  const
</button>
<button
  class="for"
>
  for
</button>
<button
  class="define"
>
  define
</button>
<button
  class="let"
>
  let
</button>
<button
  class="renamed-param"
>
  renamed
</button>
```
## Change
```
UPDATE: .value::text@0 "for" => "define"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<div
  class="value"
>
  let function
</div>
<div
  class="renamed"
>
  v function
</div>
<button
  class="param"
>
  param
</button>
<button
  class="const"
>
  const
</button>
<button
  class="for"
>
  for
</button>
<button
  class="define"
>
  define
</button>
<button
  class="let"
>
  let
</button>
<button
  class="renamed-param"
>
  renamed
</button>
```
## Change
```
UPDATE: .value::text@0 "define" => "let"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<div
  class="value"
>
  let function
</div>
<div
  class="renamed"
>
  renamed2 function
</div>
<button
  class="param"
>
  param
</button>
<button
  class="const"
>
  const
</button>
<button
  class="for"
>
  for
</button>
<button
  class="define"
>
  define
</button>
<button
  class="let"
>
  let
</button>
<button
  class="renamed-param"
>
  renamed
</button>
```
## Change
```
UPDATE: .renamed::text@0 "v" => "renamed2"
```
