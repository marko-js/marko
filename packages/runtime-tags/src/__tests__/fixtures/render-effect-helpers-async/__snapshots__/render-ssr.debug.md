# Render
```html
<button>
  step
</button>
<div
  class="active"
  data-n="0"
>
  n=0
</div>
<div
  class="base"
/>
<div
  class="a"
/>
<div
  style="width:0px"
/>
<div
  style="color:red"
/>
<div
  style="color:red;opacity:0"
/>
<script
  type="importmap"
>
  
  { "imports": { "0": "https://markojs.com" } }

</script>
<div>
  <b>
    html 0
  </b>
</div>
<div
  data-a="0"
  title="t0"
/>
<div
  data-a="0"
  data-fixed="x"
  title="t0"
/>
<img
  data-a="0"
  src="x.png"
  title="t0"
/>
<img
  alt="y"
  data-a="0"
  title="t0"
/>
<div>
  chunk 0
</div>
<input
  checked=""
  type="checkbox"
/>
<input
  checked=""
  type="checkbox"
/>
<input
  checked=""
  type="radio"
  value="a"
/>
<input
  type="radio"
  value="b"
/>
<input
  value="hi"
/>
<input
  value="v0"
/>
<input
  type="text"
  value="d0"
/>
<input
  type="search"
  value="h0"
/>
<select>
  <option
    selected=""
    value="one"
  >
    one
  </option>
  <option
    value="two"
  >
    two
  </option>
</select>
<select>
  <option
    selected=""
    value="one"
  >
    one
  </option>
  <option
    value="two"
  >
    two
  </option>
</select>
<details>
  <summary>
    s
  </summary>
   body
</details>
<details
  open=""
>
  <summary>
    s2
  </summary>
   b2
</details>
<dialog>
  d
</dialog>
<dialog
  open=""
>
  d2
</dialog>
```

# Update
```html
<button>
  step
</button>
<div
  class="active"
  data-n="0"
>
  n=0
</div>
<div
  class="base"
/>
<div
  class="a"
/>
<div
  style="width:0px"
/>
<div
  style="color:red"
/>
<div
  style="color:red;opacity:0"
/>
<script
  type="importmap"
>
  
  { "imports": { "0": "https://markojs.com" } }

</script>
<div>
  <b>
    html 0
  </b>
</div>
<div
  data-a="0"
  title="t0"
/>
<div
  data-a="0"
  data-fixed="x"
  title="t0"
/>
<img
  data-a="0"
  src="x.png"
  title="t0"
/>
<img
  alt="y"
  data-a="0"
  title="t0"
/>
<div>
  chunk 0
</div>
<input
  checked=""
  type="checkbox"
/>
<input
  checked=""
  type="checkbox"
/>
<input
  checked=""
  type="radio"
  value="a"
/>
<input
  type="radio"
  value="b"
/>
<input
  value="hi"
/>
<input
  value="v0"
/>
<input
  type="text"
  value="d0"
/>
<input
  type="search"
  value="h0"
/>
<select>
  <option
    selected=""
    value="one"
  >
    one
  </option>
  <option
    value="two"
  >
    two
  </option>
</select>
<select>
  <option
    selected=""
    value="one"
  >
    one
  </option>
  <option
    value="two"
  >
    two
  </option>
</select>
<details>
  <summary>
    s
  </summary>
   body
</details>
<details
  open=""
>
  <summary>
    s2
  </summary>
   b2
</details>
<dialog>
  d
</dialog>
<dialog
  open=""
>
  d2
</dialog>
ready
```
## Change
```
INSERT: dialog:nth-of-type(2) + ::text("ready")
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  step
</button>
<div
  data-n="1"
>
  n=1
</div>
<div
  class="base odd"
/>
<div
  class="b"
/>
<div
  style="width:1px"
/>
<div
  style="color:blue"
/>
<div
  style="color:blue;opacity:1"
/>
<script
  type="importmap"
>
  
  { "imports": { "1": "https://markojs.com" } }

</script>
<div>
  <b>
    html 1
  </b>
</div>
<div
  data-a="1"
  title="t1"
/>
<div
  data-a="1"
  data-fixed="x"
  title="t1"
/>
<img
  data-a="1"
  src="x.png"
  title="t1"
/>
<img
  alt="y"
  data-a="1"
  title="t1"
/>
<div />
<input
  default-checked=""
  type="checkbox"
/>
<input
  checked=""
  type="checkbox"
/>
<input
  checked=""
  type="radio"
  value="a"
/>
<input
  default-checked=""
  type="radio"
  value="b"
/>
<input
  value="hi"
/>
<input
  default-value="v1"
  value="v0"
/>
<input
  type="hidden"
  value="d0"
/>
<input
  type="search"
  value="h0"
/>
<select>
  <option
    selected=""
    value="one"
  >
    one
  </option>
  <option
    value="two"
  >
    two
  </option>
</select>
<select>
  <option
    selected=""
    value="one"
  >
    one
  </option>
  <option
    default-selected=""
    value="two"
  >
    two
  </option>
</select>
<details>
  <summary>
    s
  </summary>
   body
</details>
<details
  open=""
>
  <summary>
    s2
  </summary>
   b2
</details>
<dialog>
  d
</dialog>
<dialog
  open=""
>
  d2
</dialog>
ready
```
## Change
```
UPDATE: div:nth-of-type(1)[data-n] "0" => "1"
UPDATE: div:nth-of-type(1)::text@2 "0" => "1"
UPDATE: div:nth-of-type(4)[style] "width:0px" => "width:1px"
REMOVE: script::text("\n  { \"imports\": { \"0\": \"https://markojs.com\" } }\n")
INSERT: script::text("\n  { \"imports\": { \"1\": \"https://markojs.com\" } }\n")
INSERT: div:nth-of-type(7) > b
REMOVE: div:nth-of-type(7) > b + b
UPDATE: input:nth-of-type(6)[value] "v0" => "v1"
UPDATE: input:nth-of-type(7)[value] "d0" => "d0"
UPDATE: div:nth-of-type(1)[class] "active" => null
UPDATE: .base.odd[class] "base" => "base odd"
UPDATE: .b[class] "a" => "b"
UPDATE: .b[class] "" => "b"
UPDATE: div:nth-of-type(5)[style] "color:red" => "color: blue;"
UPDATE: input:nth-of-type(2)[checked] "" => null
UPDATE: input:nth-of-type(4)[checked] null => ""
UPDATE: input:nth-of-type(7)[type] "text" => "hidden"
UPDATE: input:nth-of-type(7)[value] "d1" => "d0"
REMOVE: .sM_1::text(".sM_1~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1brender-19effect-19helpers-1btemplate-1amarko_0:green;}")
INSERT: .sM_1::text(".sM_1~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1brender-19effect-19helpers-1btemplate-1amarko_0:purple;}")
UPDATE: div:nth-of-type(8)[data-a] "0" => "1"
UPDATE: div:nth-of-type(8)[title] "t0" => "t1"
UPDATE: div:nth-of-type(9)[data-a] "0" => "1"
UPDATE: div:nth-of-type(9)[title] "t0" => "t1"
UPDATE: img:nth-of-type(1)[data-a] "0" => "1"
UPDATE: img:nth-of-type(1)[title] "t0" => "t1"
UPDATE: img:nth-of-type(2)[data-a] "0" => "1"
UPDATE: img:nth-of-type(2)[title] "t0" => "t1"
UPDATE: div:nth-of-type(6)[style] "color:red;opacity:0" => "color: blue; opacity: 1;"
UPDATE: div:nth-of-type(6)[style] "color: blue; opacity: 0;" => "color: blue; opacity: 1;"
REMOVE: div:nth-of-type(10) > :is(::text("chunk "), ::text("1"))
UPDATE: select:nth-of-type(2) > option:nth-of-type(1)[selected] "" => null
UPDATE: select:nth-of-type(2) > option:nth-of-type(2)[selected] null => ""
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  step
</button>
<div
  class="active"
  data-n="2"
>
  n=2
</div>
<div
  class="base"
/>
<div
  class="a"
/>
<div
  style="width:2px"
/>
<div
  style="color:red"
/>
<div
  style="color:red;opacity:2"
/>
<script
  type="importmap"
>
  
  { "imports": { "2": "https://markojs.com" } }

</script>
<div>
  <b>
    html 2
  </b>
</div>
<div
  data-a="2"
  title="t2"
/>
<div
  data-a="2"
  data-fixed="x"
  title="t2"
/>
<img
  data-a="2"
  src="x.png"
  title="t2"
/>
<img
  alt="y"
  data-a="2"
  title="t2"
/>
<div>
  chunk 2
</div>
<input
  checked=""
  type="checkbox"
/>
<input
  checked=""
  type="checkbox"
/>
<input
  checked=""
  type="radio"
  value="a"
/>
<input
  type="radio"
  value="b"
/>
<input
  value="hi"
/>
<input
  default-value="v2"
  value="v0"
/>
<input
  type="text"
  value="d2"
/>
<input
  type="search"
  value="h0"
/>
<select>
  <option
    selected=""
    value="one"
  >
    one
  </option>
  <option
    value="two"
  >
    two
  </option>
</select>
<select>
  <option
    selected=""
    value="one"
  >
    one
  </option>
  <option
    value="two"
  >
    two
  </option>
</select>
<details>
  <summary>
    s
  </summary>
   body
</details>
<details
  open=""
>
  <summary>
    s2
  </summary>
   b2
</details>
<dialog>
  d
</dialog>
<dialog
  open=""
>
  d2
</dialog>
ready
```
## Change
```
UPDATE: .active[data-n] "1" => "2"
UPDATE: .active::text@2 "1" => "2"
UPDATE: div:nth-of-type(4)[style] "width:1px" => "width:2px"
REMOVE: script::text("\n  { \"imports\": { \"1\": \"https://markojs.com\" } }\n")
INSERT: script::text("\n  { \"imports\": { \"2\": \"https://markojs.com\" } }\n")
INSERT: div:nth-of-type(7) > b
REMOVE: div:nth-of-type(7) > b + b
UPDATE: input:nth-of-type(6)[value] "v1" => "v2"
UPDATE: input:nth-of-type(7)[value] "d0" => "d2"
UPDATE: .active[class] null => "active"
UPDATE: .base[class] "base odd" => "base"
UPDATE: .a[class] "b" => "a"
UPDATE: .a[class] "b a" => "a"
UPDATE: div:nth-of-type(5)[style] "color: blue;" => "color: red;"
UPDATE: input:nth-of-type(2)[checked] null => ""
UPDATE: input:nth-of-type(4)[checked] "" => null
UPDATE: input:nth-of-type(7)[type] "hidden" => "text"
REMOVE: .sM_1::text(".sM_1~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1brender-19effect-19helpers-1btemplate-1amarko_0:purple;}")
INSERT: .sM_1::text(".sM_1~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1brender-19effect-19helpers-1btemplate-1amarko_0:green;}")
UPDATE: div:nth-of-type(8)[data-a] "1" => "2"
UPDATE: div:nth-of-type(8)[title] "t1" => "t2"
UPDATE: div:nth-of-type(9)[data-a] "1" => "2"
UPDATE: div:nth-of-type(9)[title] "t1" => "t2"
UPDATE: img:nth-of-type(1)[data-a] "1" => "2"
UPDATE: img:nth-of-type(1)[title] "t1" => "t2"
UPDATE: img:nth-of-type(2)[data-a] "1" => "2"
UPDATE: img:nth-of-type(2)[title] "t1" => "t2"
UPDATE: div:nth-of-type(6)[style] "color: blue; opacity: 1;" => "color: red; opacity: 2;"
UPDATE: div:nth-of-type(6)[style] "color: red; opacity: 1;" => "color: red; opacity: 2;"
INSERT: div:nth-of-type(10) > :is(::text("chunk "), ::text("2"))
UPDATE: select:nth-of-type(2) > option:nth-of-type(1)[selected] null => ""
UPDATE: select:nth-of-type(2) > option:nth-of-type(2)[selected] "" => null
```
