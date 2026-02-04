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
  <p>
    Outer
  </p>
  <div>
    <p>
      Middle
    </p>
    <p>
      Inner
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
  <p>
    Outer
  </p>
  <div>
    <p>
      Middle
    </p>
  </div>
</div>
<!---->
```

# Mutations
```
INSERT div/div/#text
REMOVE p after div/div/#text
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
  <p>
    Outer
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
  <p>
    Outer
  </p>
  <div>
    <p>
      Middle
    </p>
    <p>
      Inner
    </p>
  </div>
</div>
<!---->
```

# Mutations
```
INSERT div
REMOVE #text after div
INSERT div/div
REMOVE #text after div/div
UPDATE div/p/#text " " => "Outer"
INSERT div/div/p1
REMOVE #text after div/div/p1
UPDATE div/div/p0/#text " " => "Middle"
UPDATE div/div/p1/#text " " => "Inner"
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