# Render
```html
<button
  id="outer"
>
  Toggle Outer
</button>
<button
  id="middle"
>
  Toggle Middle
</button>
<button
  id="inner"
>
  Toggle Inner
</button>
<pre>
  
Outer mounted
Middle mounted
Inner mounted
</pre>
<div>
  <div>
    Outer a
  </div>
  <span>
    Outer a
  </span>
  <p>
    Outer a
  </p>
  <div>
    <div>
      Middle a
    </div>
    <span>
      Middle a
    </span>
    <p>
      Middle a
    </p>
    <div>
      Inner a
    </div>
    <span>
      Inner a
    </span>
    <p>
      Inner a
    </p>
  </div>
</div>
<!---->
```

# Mutations
```
INSERT button0, button1, button2, pre, div, #comment
INSERT #text
REMOVE #text in pre
INSERT #text
REMOVE #text in pre
INSERT pre/#text
```

# Render
```js
container.querySelector("button#inner").click();
```
```html
<button
  id="outer"
>
  Toggle Outer
</button>
<button
  id="middle"
>
  Toggle Middle
</button>
<button
  id="inner"
>
  Toggle Inner
</button>
<pre>
  
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
</pre>
<div>
  <div>
    Outer a
  </div>
  <span>
    Outer a
  </span>
  <p>
    Outer a
  </p>
  <div>
    <div>
      Middle a
    </div>
    <span>
      Middle a
    </span>
    <p>
      Middle a
    </p>
  </div>
</div>
<!---->
```

# Mutations
```
INSERT div/div1/#text
REMOVE div after div/div1/#text
REMOVE span after div/div1/#text
REMOVE p after div/div1/#text
REMOVE #text in pre
INSERT pre/#text
```

# Render
```js
container.querySelector("button#middle").click();
```
```html
<button
  id="outer"
>
  Toggle Outer
</button>
<button
  id="middle"
>
  Toggle Middle
</button>
<button
  id="inner"
>
  Toggle Inner
</button>
<pre>
  
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
</pre>
<div>
  <div>
    Outer a
  </div>
  <span>
    Outer a
  </span>
  <p>
    Outer a
  </p>
</div>
<!---->
```

# Mutations
```
INSERT div/#text
REMOVE div after div/#text
REMOVE #text in pre
INSERT pre/#text
```

# Render
```js
container.querySelector("button#outer").click();
```
```html
<button
  id="outer"
>
  Toggle Outer
</button>
<button
  id="middle"
>
  Toggle Middle
</button>
<button
  id="inner"
>
  Toggle Inner
</button>
<pre>
  
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
</pre>
<!---->
```

# Mutations
```
INSERT #text
REMOVE div after #text
REMOVE #text in pre
INSERT pre/#text
```

# Render
```js
container.querySelector("button#inner").click();
```
```html
<button
  id="outer"
>
  Toggle Outer
</button>
<button
  id="middle"
>
  Toggle Middle
</button>
<button
  id="inner"
>
  Toggle Inner
</button>
<pre>
  
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
</pre>
<!---->
```


# Render
```js
container.querySelector("button#middle").click();
```
```html
<button
  id="outer"
>
  Toggle Outer
</button>
<button
  id="middle"
>
  Toggle Middle
</button>
<button
  id="inner"
>
  Toggle Inner
</button>
<pre>
  
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
</pre>
<!---->
```


# Render
```js
container.querySelector("button#outer").click();
```
```html
<button
  id="outer"
>
  Toggle Outer
</button>
<button
  id="middle"
>
  Toggle Middle
</button>
<button
  id="inner"
>
  Toggle Inner
</button>
<pre>
  
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
Outer mounted
Middle mounted
Inner mounted
</pre>
<div>
  <div>
    Outer a
  </div>
  <span>
    Outer a
  </span>
  <p>
    Outer a
  </p>
  <div>
    <div>
      Middle a
    </div>
    <span>
      Middle a
    </span>
    <p>
      Middle a
    </p>
    <div>
      Inner a
    </div>
    <span>
      Inner a
    </span>
    <p>
      Inner a
    </p>
  </div>
</div>
<!---->
```

# Mutations
```
INSERT div
REMOVE #text after div
INSERT div/div1
REMOVE #text after div/div1
UPDATE div/div0/#text0 "" => "Outer"
UPDATE div/span/#text0 "" => "Outer"
UPDATE div/p/#text0 "" => "Outer"
INSERT div/div1/div1, div/div1/span1, div/div1/p1
REMOVE #text after div/div1/p1
UPDATE div/div1/div0/#text0 "" => "Middle"
UPDATE div/div1/span0/#text0 "" => "Middle"
UPDATE div/div1/p0/#text0 "" => "Middle"
UPDATE div/div1/div1/#text0 "" => "Inner"
UPDATE div/div1/span1/#text0 "" => "Inner"
UPDATE div/div1/p1/#text0 "" => "Inner"
REMOVE #text in pre
INSERT #text
REMOVE #text in pre
INSERT #text
REMOVE #text in pre
INSERT pre/#text
```

# Render
```js
container.querySelector("button#outer").click();
```
```html
<button
  id="outer"
>
  Toggle Outer
</button>
<button
  id="middle"
>
  Toggle Middle
</button>
<button
  id="inner"
>
  Toggle Inner
</button>
<pre>
  
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
</pre>
<!---->
```

# Mutations
```
INSERT #text
REMOVE div after #text
REMOVE #text in pre
INSERT #text
REMOVE #text in pre
INSERT #text
REMOVE #text in pre
INSERT pre/#text
```