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
```

# Update
```js
document.querySelector("button#inner").click();
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
```
## Change
```
REMOVE: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted")
INSERT: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed")
REMOVE: div > div > p
```

# Update
```js
document.querySelector("button#middle").click();
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
```
## Change
```
REMOVE: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed")
INSERT: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed")
REMOVE: div > div
```

# Update
```js
document.querySelector("button#outer").click();
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
```
## Change
```
REMOVE: div
REMOVE: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed")
INSERT: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed")
```

# Update
```js
document.querySelector("button#inner").click();
```

# Update
```js
document.querySelector("button#middle").click();
```

# Update
```js
document.querySelector("button#outer").click();
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
```
## Change
```
INSERT: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted")
INSERT: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted\nMiddle mounted")
REMOVE: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed")
REMOVE: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted")
REMOVE: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted\nMiddle mounted")
INSERT: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted\nMiddle mounted\nInner mounted")
INSERT: div
INSERT: div > div
INSERT: div > div > p:nth-of-type(2)
```

# Update
```js
document.querySelector("button#outer").click();
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
```
## Change
```
REMOVE: div
INSERT: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed")
INSERT: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed")
REMOVE: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted\nMiddle mounted\nInner mounted")
REMOVE: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed")
REMOVE: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed")
INSERT: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed")
```
