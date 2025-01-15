# Render {}
```html
<html>
  <head />
  <body>
    <textarea>
      hello
    </textarea>
    <!--M_*0 #textarea/0-->
    <span>
      hello
      <!--M_*0 #text/1-->
    </span>
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:_.a={"#textarea/0=":2,value:"hello"}},_.a["#textarea/0;"]=_._["__tests__/template.marko_0/valueChange"](_.a),_.b),0,"__tests__/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
const textarea = container.querySelector("textarea");
const window = textarea.ownerDocument.defaultView;
textarea.value = value;
textarea.dispatchEvent(new window.Event("input", {
  bubbles: true
}))

```html
<html>
  <head />
  <body>
    <textarea>
      w
    </textarea>
    <!--M_*0 #textarea/0-->
    <span>
      w
      <!--M_*0 #text/1-->
    </span>
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:_.a={"#textarea/0=":2,value:"hello"}},_.a["#textarea/0;"]=_._["__tests__/template.marko_0/valueChange"](_.a),_.b),0,"__tests__/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/span2/#text0: "hello" => "w"
```


# Render 
const textarea = container.querySelector("textarea");
const window = textarea.ownerDocument.defaultView;
textarea.value = value;
textarea.dispatchEvent(new window.Event("input", {
  bubbles: true
}))

```html
<html>
  <head />
  <body>
    <textarea>
      wor
    </textarea>
    <!--M_*0 #textarea/0-->
    <span>
      wor
      <!--M_*0 #text/1-->
    </span>
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:_.a={"#textarea/0=":2,value:"hello"}},_.a["#textarea/0;"]=_._["__tests__/template.marko_0/valueChange"](_.a),_.b),0,"__tests__/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/span2/#text0: "w" => "wor"
```


# Render 
const textarea = container.querySelector("textarea");
const window = textarea.ownerDocument.defaultView;
textarea.value = value;
textarea.dispatchEvent(new window.Event("input", {
  bubbles: true
}))

```html
<html>
  <head />
  <body>
    <textarea>
      world
    </textarea>
    <!--M_*0 #textarea/0-->
    <span>
      world
      <!--M_*0 #text/1-->
    </span>
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:_.a={"#textarea/0=":2,value:"hello"}},_.a["#textarea/0;"]=_._["__tests__/template.marko_0/valueChange"](_.a),_.b),0,"__tests__/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/span2/#text0: "wor" => "world"
```