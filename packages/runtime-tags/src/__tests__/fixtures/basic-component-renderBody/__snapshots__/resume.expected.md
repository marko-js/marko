# Render
```html
<html>
  <head />
  <body>
    <button>
      0
      <!--M_*3 #text/0-->
    </button>
    <!--M_*2 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,_.a={clickCount:0,"ClosureScopes:clickCount":_.d=new Set,"#childScope/0":_.b={}},_.b,_.e={_:_.a,"ClosureSignalIndex:clickCount":0}],_.b.onClick=_._["__tests__/template.marko_0/onClick"](_.a),(_.d).add(_.e),_.c),"__tests__/tags/my-button.marko_0_onClick",2];M._.w()
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
      <!--M_*3 #text/0-->
    </button>
    <!--M_*2 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,_.a={clickCount:0,"ClosureScopes:clickCount":_.d=new Set,"#childScope/0":_.b={}},_.b,_.e={_:_.a,"ClosureSignalIndex:clickCount":0}],_.b.onClick=_._["__tests__/template.marko_0/onClick"](_.a),(_.d).add(_.e),_.c),"__tests__/tags/my-button.marko_0_onClick",2];M._.w()
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
      <!--M_*3 #text/0-->
    </button>
    <!--M_*2 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,_.a={clickCount:0,"ClosureScopes:clickCount":_.d=new Set,"#childScope/0":_.b={}},_.b,_.e={_:_.a,"ClosureSignalIndex:clickCount":0}],_.b.onClick=_._["__tests__/template.marko_0/onClick"](_.a),(_.d).add(_.e),_.c),"__tests__/tags/my-button.marko_0_onClick",2];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "1" => "2"
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
      3
      <!--M_*3 #text/0-->
    </button>
    <!--M_*2 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,_.a={clickCount:0,"ClosureScopes:clickCount":_.d=new Set,"#childScope/0":_.b={}},_.b,_.e={_:_.a,"ClosureSignalIndex:clickCount":0}],_.b.onClick=_._["__tests__/template.marko_0/onClick"](_.a),(_.d).add(_.e),_.c),"__tests__/tags/my-button.marko_0_onClick",2];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "2" => "3"
```