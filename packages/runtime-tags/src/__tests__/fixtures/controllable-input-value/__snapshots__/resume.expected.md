# Render
```html
<html>
  <head />
  <body>
    <input
      type="text"
      value="hello"
    />
    <!--M_*0 #input/0-->
    <span>
      hello
      <!--M_*0 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:_.a={"#input/0=":2,value:"hello"}},_.a["#input/0;"]=_._["__tests__/template.marko_0/valueChange"](_.a),_.b),0,"__tests__/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```


# Render
```js
const input = container.querySelector("input");
const window = input.ownerDocument.defaultView;
input.value = value;
input.dispatchEvent(new window.Event("input", {
  bubbles: true
}));
```
```html
<html>
  <head />
  <body>
    <input
      type="text"
      value="w"
    />
    <!--M_*0 #input/0-->
    <span>
      w
      <!--M_*0 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:_.a={"#input/0=":2,value:"hello"}},_.a["#input/0;"]=_._["__tests__/template.marko_0/valueChange"](_.a),_.b),0,"__tests__/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text "hello" => "w"
```

# Render
```js
const input = container.querySelector("input");
const window = input.ownerDocument.defaultView;
input.value = value;
input.dispatchEvent(new window.Event("input", {
  bubbles: true
}));
```
```html
<html>
  <head />
  <body>
    <input
      type="text"
      value="wor"
    />
    <!--M_*0 #input/0-->
    <span>
      wor
      <!--M_*0 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:_.a={"#input/0=":2,value:"hello"}},_.a["#input/0;"]=_._["__tests__/template.marko_0/valueChange"](_.a),_.b),0,"__tests__/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text "w" => "wor"
```

# Render
```js
const input = container.querySelector("input");
const window = input.ownerDocument.defaultView;
input.value = value;
input.dispatchEvent(new window.Event("input", {
  bubbles: true
}));
```
```html
<html>
  <head />
  <body>
    <input
      type="text"
      value="world"
    />
    <!--M_*0 #input/0-->
    <span>
      world
      <!--M_*0 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:_.a={"#input/0=":2,value:"hello"}},_.a["#input/0;"]=_._["__tests__/template.marko_0/valueChange"](_.a),_.b),0,"__tests__/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text "wor" => "world"
```