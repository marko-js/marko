# Render
```html
<html>
  <head />
  <body>
    <button>
      1:
      <!---->
      0
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b=[0,_.a={bar:0}],_.a.$fooChange=_._["__tests__/template.marko_0/foo"](_.a),_.b),"__tests__/template.marko_0_bar_$fooChange",1];M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <button>
      1:
      <!---->
      1
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b=[0,_.a={bar:0}],_.a.$fooChange=_._["__tests__/template.marko_0/foo"](_.a),_.b),"__tests__/template.marko_0_bar_$fooChange",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text1 "0" => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <button>
      1:
      <!---->
      2
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b=[0,_.a={bar:0}],_.a.$fooChange=_._["__tests__/template.marko_0/foo"](_.a),_.b),"__tests__/template.marko_0_bar_$fooChange",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text1 "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <button>
      1:
      <!---->
      3
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b=[0,_.a={bar:0}],_.a.$fooChange=_._["__tests__/template.marko_0/foo"](_.a),_.b),"__tests__/template.marko_0_bar_$fooChange",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text1 "2" => "3"
```