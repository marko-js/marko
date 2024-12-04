# Render {}
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
inserted div0
```


# Render 
container.querySelector("button").click()

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
removed div0/div0/#text2 before div0/div0/#text0
inserted div0/div0/#text2
removed div0/div1/#text2 before div0/div1/#text0
inserted div0/div1/#text2
removed div0/div2/#text2 before div0/div2/#text0
inserted div0/div2/#text2
removed div0/div3/#text2 before div0/div3/#text0
inserted div0/div3/#text2
div0/div4/#text0: "first" => "second"
div0/div4/#text1: "second" => "third"
div0/div4/#text2: "third" => "first"
```


# Render 
container.querySelector("button").click()

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
removed div0/div0/#text2 before div0/div0/#text0
inserted div0/div0/#text2
removed div0/div1/#text2 before div0/div1/#text0
inserted div0/div1/#text2
removed div0/div2/#text2 before div0/div2/#text0
inserted div0/div2/#text2
removed div0/div3/#text2 before div0/div3/#text0
inserted div0/div3/#text2
div0/div4/#text0: "second" => "third"
div0/div4/#text1: "third" => "first"
div0/div4/#text2: "first" => "second"
```


# Render 
container.querySelector("button").click()

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
removed div0/div0/#text2 before div0/div0/#text0
inserted div0/div0/#text2
removed div0/div1/#text2 before div0/div1/#text0
inserted div0/div1/#text2
removed div0/div2/#text2 before div0/div2/#text0
inserted div0/div2/#text2
removed div0/div3/#text2 before div0/div3/#text0
inserted div0/div3/#text2
div0/div4/#text0: "third" => "first"
div0/div4/#text1: "first" => "second"
div0/div4/#text2: "second" => "third"
```