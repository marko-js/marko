# Render
```html
<div>
  <div
    class="by-string"
  >
    firstsecondthird
  </div>
  <div
    class="by-function"
  >
    firstsecondthird
  </div>
  <div
    class="by-unknown-string"
  >
    firstsecondthird
  </div>
  <div
    class="by-unknown-function"
  >
    firstsecondthird
  </div>
  <div
    class="by-unknown-missing"
  >
    firstsecondthird
  </div>
  <button>
    Rotate
  </button>
</div>
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  <div
    class="by-string"
  >
    secondthirdfirst
  </div>
  <div
    class="by-function"
  >
    secondthirdfirst
  </div>
  <div
    class="by-unknown-string"
  >
    secondthirdfirst
  </div>
  <div
    class="by-unknown-function"
  >
    secondthirdfirst
  </div>
  <div
    class="by-unknown-missing"
  >
    secondthirdfirst
  </div>
  <button>
    Rotate
  </button>
</div>
```
## Change
```
REMOVE: .by-string::text("first")
INSERT: .by-string::text@6 + ::text("first")
REMOVE: .by-function::text("first")
INSERT: .by-function::text@6 + ::text("first")
REMOVE: .by-unknown-string::text("first")
INSERT: .by-unknown-string::text@6 + ::text("first")
REMOVE: .by-unknown-function::text("first")
INSERT: .by-unknown-function::text@6 + ::text("first")
UPDATE: .by-unknown-missing::text@0 "first" => "second"
UPDATE: .by-unknown-missing::text@6 "second" => "third"
UPDATE: .by-unknown-missing::text@11 "third" => "first"
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  <div
    class="by-string"
  >
    thirdfirstsecond
  </div>
  <div
    class="by-function"
  >
    thirdfirstsecond
  </div>
  <div
    class="by-unknown-string"
  >
    thirdfirstsecond
  </div>
  <div
    class="by-unknown-function"
  >
    thirdfirstsecond
  </div>
  <div
    class="by-unknown-missing"
  >
    thirdfirstsecond
  </div>
  <button>
    Rotate
  </button>
</div>
```
## Change
```
REMOVE: .by-string::text("second")
INSERT: .by-string::text@5 + ::text("second")
REMOVE: .by-function::text("second")
INSERT: .by-function::text@5 + ::text("second")
REMOVE: .by-unknown-string::text("second")
INSERT: .by-unknown-string::text@5 + ::text("second")
REMOVE: .by-unknown-function::text("second")
INSERT: .by-unknown-function::text@5 + ::text("second")
UPDATE: .by-unknown-missing::text@0 "second" => "third"
UPDATE: .by-unknown-missing::text@5 "third" => "first"
UPDATE: .by-unknown-missing::text@10 "first" => "second"
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  <div
    class="by-string"
  >
    firstsecondthird
  </div>
  <div
    class="by-function"
  >
    firstsecondthird
  </div>
  <div
    class="by-unknown-string"
  >
    firstsecondthird
  </div>
  <div
    class="by-unknown-function"
  >
    firstsecondthird
  </div>
  <div
    class="by-unknown-missing"
  >
    firstsecondthird
  </div>
  <button>
    Rotate
  </button>
</div>
```
## Change
```
REMOVE: .by-string::text("third")
INSERT: .by-string::text@5 + ::text("third")
REMOVE: .by-function::text("third")
INSERT: .by-function::text@5 + ::text("third")
REMOVE: .by-unknown-string::text("third")
INSERT: .by-unknown-string::text@5 + ::text("third")
REMOVE: .by-unknown-function::text("third")
INSERT: .by-unknown-function::text@5 + ::text("third")
UPDATE: .by-unknown-missing::text@0 "third" => "first"
UPDATE: .by-unknown-missing::text@5 "first" => "second"
UPDATE: .by-unknown-missing::text@11 "second" => "third"
```
