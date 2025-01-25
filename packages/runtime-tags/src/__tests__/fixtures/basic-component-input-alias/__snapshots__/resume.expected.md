# Render
```html
<html>
  <head />
  <body>
    <button>
      0
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={clickCount:0,"#childScope/0":_.b={}},1:_.b},_.b.onClick=_._["__tests__/template.marko_0/onClick"](_.a),_.c),1,"__tests__/tags/my-button.marko_0_onClick",0];M._.w()
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
      1
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={clickCount:0,"#childScope/0":_.b={}},1:_.b},_.b.onClick=_._["__tests__/template.marko_0/onClick"](_.a),_.c),1,"__tests__/tags/my-button.marko_0_onClick",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "0" => "1"
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
      2
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={clickCount:0,"#childScope/0":_.b={}},1:_.b},_.b.onClick=_._["__tests__/template.marko_0/onClick"](_.a),_.c),1,"__tests__/tags/my-button.marko_0_onClick",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "1" => "2"
```