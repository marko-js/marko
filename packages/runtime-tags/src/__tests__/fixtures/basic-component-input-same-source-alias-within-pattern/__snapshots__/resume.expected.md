# Render
```html
<html>
  <head />
  <body>
    <button>
      0
      <!--M_*2 #text/1-->
       
      <!---->
      0
      <!--M_*2 #text/2-->
    </button>
    <!--M_*2 #button/0-->
    <button>
      0
      <!--M_*3 #text/1-->
       
      <!---->
      0
      <!--M_*3 #text/2-->
    </button>
    <!--M_*3 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d=[0,_.a={clickCount:0,"#childScope/0":_.b={},"#childScope/1":_.c={}},_.b,_.c],_.b.onClick=_._["__tests__/template.marko_0/onClick"](_.a),_.c.onClick=_._["__tests__/template.marko_0/onClick2"](_.a),_.d),"__tests__/tags/my-button.marko_0_onClick",2,3];M._.w()
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
      <!--M_*2 #text/1-->
       
      <!---->
      1
      <!--M_*2 #text/2-->
    </button>
    <!--M_*2 #button/0-->
    <button>
      1
      <!--M_*3 #text/1-->
       
      <!---->
      1
      <!--M_*3 #text/2-->
    </button>
    <!--M_*3 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d=[0,_.a={clickCount:0,"#childScope/0":_.b={},"#childScope/1":_.c={}},_.b,_.c],_.b.onClick=_._["__tests__/template.marko_0/onClick"](_.a),_.c.onClick=_._["__tests__/template.marko_0/onClick2"](_.a),_.d),"__tests__/tags/my-button.marko_0_onClick",2,3];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button0/#text0 "0" => "1"
UPDATE html/body/button0/#text2 "0" => "1"
UPDATE html/body/button1/#text0 "0" => "1"
UPDATE html/body/button1/#text2 "0" => "1"
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
      <!--M_*2 #text/1-->
       
      <!---->
      2
      <!--M_*2 #text/2-->
    </button>
    <!--M_*2 #button/0-->
    <button>
      2
      <!--M_*3 #text/1-->
       
      <!---->
      2
      <!--M_*3 #text/2-->
    </button>
    <!--M_*3 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d=[0,_.a={clickCount:0,"#childScope/0":_.b={},"#childScope/1":_.c={}},_.b,_.c],_.b.onClick=_._["__tests__/template.marko_0/onClick"](_.a),_.c.onClick=_._["__tests__/template.marko_0/onClick2"](_.a),_.d),"__tests__/tags/my-button.marko_0_onClick",2,3];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button0/#text0 "1" => "2"
UPDATE html/body/button0/#text2 "1" => "2"
UPDATE html/body/button1/#text0 "1" => "2"
UPDATE html/body/button1/#text2 "1" => "2"
```