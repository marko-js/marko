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

# Mutations
```
INSERT div
```

# Render
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

# Mutations
```
REMOVE div/div0/#text2 before div/div0/#text0
INSERT div/div0/#text2
REMOVE div/div1/#text2 before div/div1/#text0
INSERT div/div1/#text2
REMOVE div/div2/#text2 before div/div2/#text0
INSERT div/div2/#text2
REMOVE div/div3/#text2 before div/div3/#text0
INSERT div/div3/#text2
UPDATE div/div4/#text0 "first" => "second"
UPDATE div/div4/#text1 "second" => "third"
UPDATE div/div4/#text2 "third" => "first"
```

# Render
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

# Mutations
```
REMOVE div/div0/#text2 before div/div0/#text0
INSERT div/div0/#text2
REMOVE div/div1/#text2 before div/div1/#text0
INSERT div/div1/#text2
REMOVE div/div2/#text2 before div/div2/#text0
INSERT div/div2/#text2
REMOVE div/div3/#text2 before div/div3/#text0
INSERT div/div3/#text2
UPDATE div/div4/#text0 "second" => "third"
UPDATE div/div4/#text1 "third" => "first"
UPDATE div/div4/#text2 "first" => "second"
```

# Render
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

# Mutations
```
REMOVE div/div0/#text2 before div/div0/#text0
INSERT div/div0/#text2
REMOVE div/div1/#text2 before div/div1/#text0
INSERT div/div1/#text2
REMOVE div/div2/#text2 before div/div2/#text0
INSERT div/div2/#text2
REMOVE div/div3/#text2 before div/div3/#text0
INSERT div/div3/#text2
UPDATE div/div4/#text0 "third" => "first"
UPDATE div/div4/#text1 "first" => "second"
UPDATE div/div4/#text2 "second" => "third"
```