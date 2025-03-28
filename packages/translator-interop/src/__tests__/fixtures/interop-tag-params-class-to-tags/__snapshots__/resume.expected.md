# Render
```html
<html>
  <head />
  <body>
    <button
      id="tags"
    >
      0
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <div>
      <!--M_[2-->
      <h1>
        hello
      </h1>
      <button
        id="class"
      >
        1 * 0 = 0
      </button>
      <h1>
        hello
      </h1>
      <button
        id="class"
      >
        1 * 0 = 0
      </button>
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,{m5c:"s0-0",input_content:_._.$compat_renderBody,count:0}]),1,"$compat_setScope",1,"__tests__/components/tags-layout.marko_0_count"];M._.w();$MC=(window.$MC||[]).concat({"w":[["s0",0,{},{"f":1}]],"t":["__tests__/template.marko"]})
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text0
INSERT html/body/#text5
REMOVE #comment before html/body/#text0
REMOVE #comment after html/body/#text5
INSERT html/body/div/#text0, html/body/div/#text3
REMOVE #comment after html/body/div/#text3
INSERT html/body/#text1
INSERT html/body/#text4
INSERT html/body/#text2
INSERT html/body/#text3
REMOVE #comment after html/body/#text2
REMOVE #comment after html/body/div
REMOVE html/body/#text4 after html/body/#text3
INSERT html/body/#text4
INSERT html/body/div/#text1
INSERT html/body/div/#text2
INSERT html/body/div/h11
INSERT html/body/div/h11/#text
INSERT html/body/div/button1
INSERT html/body/div/button1/#text0
INSERT html/body/div/button1/#text1
INSERT html/body/div/button1/#text2
INSERT html/body/div/button1/#text3
INSERT html/body/div/button1/#text4
```

# Render
```js
container.querySelector("#tags").click();
```
```html
<html>
  <head />
  <body>
    <button
      id="tags"
    >
      1
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <div>
      <!--M_[2-->
      <h1>
        hello
      </h1>
      <button
        id="class"
      >
        1 * 0 = 0
      </button>
      <h1>
        hello
      </h1>
      <button
        id="class"
      >
        1 * 1 = 1
      </button>
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,{m5c:"s0-0",input_content:_._.$compat_renderBody,count:0}]),1,"$compat_setScope",1,"__tests__/components/tags-layout.marko_0_count"];M._.w();$MC=(window.$MC||[]).concat({"w":[["s0",0,{},{"f":1}]],"t":["__tests__/template.marko"]})
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "0" => "1"
UPDATE html/body/div/button1/#text2 "0" => "1"
UPDATE html/body/div/button1/#text4 "0" => "1"
```

# Render
```js
container.querySelector("#class").click();
```
```html
<html>
  <head />
  <body>
    <button
      id="tags"
    >
      1
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <div>
      <!--M_[2-->
      <h1>
        hello
      </h1>
      <button
        id="class"
      >
        1 * 0 = 0
      </button>
      <h1>
        hello
      </h1>
      <button
        id="class"
      >
        1 * 1 = 1
      </button>
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,{m5c:"s0-0",input_content:_._.$compat_renderBody,count:0}]),1,"$compat_setScope",1,"__tests__/components/tags-layout.marko_0_count"];M._.w();$MC=(window.$MC||[]).concat({"w":[["s0",0,{},{"f":1}]],"t":["__tests__/template.marko"]})
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("#tags").click();
```
```html
<html>
  <head />
  <body>
    <button
      id="tags"
    >
      2
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <div>
      <!--M_[2-->
      <h1>
        hello
      </h1>
      <button
        id="class"
      >
        1 * 0 = 0
      </button>
      <h1>
        hello
      </h1>
      <button
        id="class"
      >
        1 * 2 = 2
      </button>
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,{m5c:"s0-0",input_content:_._.$compat_renderBody,count:0}]),1,"$compat_setScope",1,"__tests__/components/tags-layout.marko_0_count"];M._.w();$MC=(window.$MC||[]).concat({"w":[["s0",0,{},{"f":1}]],"t":["__tests__/template.marko"]})
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "1" => "2"
UPDATE html/body/div/button1/#text2 "1" => "2"
UPDATE html/body/div/button1/#text4 "1" => "2"
```

# Render
```js
container.querySelector("#class").click();
```
```html
<html>
  <head />
  <body>
    <button
      id="tags"
    >
      2
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <div>
      <!--M_[2-->
      <h1>
        hello
      </h1>
      <button
        id="class"
      >
        1 * 0 = 0
      </button>
      <h1>
        hello
      </h1>
      <button
        id="class"
      >
        1 * 2 = 2
      </button>
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,{m5c:"s0-0",input_content:_._.$compat_renderBody,count:0}]),1,"$compat_setScope",1,"__tests__/components/tags-layout.marko_0_count"];M._.w();$MC=(window.$MC||[]).concat({"w":[["s0",0,{},{"f":1}]],"t":["__tests__/template.marko"]})
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("#tags").click();
```
```html
<html>
  <head />
  <body>
    <button
      id="tags"
    >
      3
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <div>
      <!--M_[2-->
      <h1>
        hello
      </h1>
      <button
        id="class"
      >
        1 * 0 = 0
      </button>
      <h1>
        hello
      </h1>
      <button
        id="class"
      >
        1 * 3 = 3
      </button>
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,{m5c:"s0-0",input_content:_._.$compat_renderBody,count:0}]),1,"$compat_setScope",1,"__tests__/components/tags-layout.marko_0_count"];M._.w();$MC=(window.$MC||[]).concat({"w":[["s0",0,{},{"f":1}]],"t":["__tests__/template.marko"]})
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "2" => "3"
UPDATE html/body/div/button1/#text2 "2" => "3"
UPDATE html/body/div/button1/#text4 "2" => "3"
```