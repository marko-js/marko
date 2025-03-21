# Render
```html
<html>
  <head />
  <body>
    <button>
      <!--M_[3-->
      0
      <!--M_*3 #text/0-->
      <!--M_]2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.f={1:_.a={clickCount:0,"ClosureScopes:clickCount":_.g=new Set,"#childScope/0":_.e={"EventAttributes:#button/0":_.b={},attrs:_.c={},"ConditionalScope:#text/1":_.d={"ClosureSignalIndex:clickCount":0},"ConditionalRenderer:#text/1":"__tests__/template.marko_1_renderer"}},2:_.e,3:_.d},_.b.click=_.c.onClick=_._["__tests__/template.marko_0/onClick"](_.a),_.d._=_.a,(_.g).add(_.d),_.f),2,"__tests__/tags/FancyButton.marko_0_attrs"];M._.w()
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
      <!--M_[3-->
      1
      <!--M_*3 #text/0-->
      <!--M_]2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.f={1:_.a={clickCount:0,"ClosureScopes:clickCount":_.g=new Set,"#childScope/0":_.e={"EventAttributes:#button/0":_.b={},attrs:_.c={},"ConditionalScope:#text/1":_.d={"ClosureSignalIndex:clickCount":0},"ConditionalRenderer:#text/1":"__tests__/template.marko_1_renderer"}},2:_.e,3:_.d},_.b.click=_.c.onClick=_._["__tests__/template.marko_0/onClick"](_.a),_.d._=_.a,(_.g).add(_.d),_.f),2,"__tests__/tags/FancyButton.marko_0_attrs"];M._.w()
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
      <!--M_[3-->
      2
      <!--M_*3 #text/0-->
      <!--M_]2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.f={1:_.a={clickCount:0,"ClosureScopes:clickCount":_.g=new Set,"#childScope/0":_.e={"EventAttributes:#button/0":_.b={},attrs:_.c={},"ConditionalScope:#text/1":_.d={"ClosureSignalIndex:clickCount":0},"ConditionalRenderer:#text/1":"__tests__/template.marko_1_renderer"}},2:_.e,3:_.d},_.b.click=_.c.onClick=_._["__tests__/template.marko_0/onClick"](_.a),_.d._=_.a,(_.g).add(_.d),_.f),2,"__tests__/tags/FancyButton.marko_0_attrs"];M._.w()
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
      <!--M_[3-->
      3
      <!--M_*3 #text/0-->
      <!--M_]2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.f={1:_.a={clickCount:0,"ClosureScopes:clickCount":_.g=new Set,"#childScope/0":_.e={"EventAttributes:#button/0":_.b={},attrs:_.c={},"ConditionalScope:#text/1":_.d={"ClosureSignalIndex:clickCount":0},"ConditionalRenderer:#text/1":"__tests__/template.marko_1_renderer"}},2:_.e,3:_.d},_.b.click=_.c.onClick=_._["__tests__/template.marko_0/onClick"](_.a),_.d._=_.a,(_.g).add(_.d),_.f),2,"__tests__/tags/FancyButton.marko_0_attrs"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "2" => "3"
```