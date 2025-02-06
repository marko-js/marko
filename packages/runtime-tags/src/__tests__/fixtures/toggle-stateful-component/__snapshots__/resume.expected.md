# Render
```html
<html>
  <head />
  <body>
    <div>
      <div>
        <button>
          0
          <!--M_*3 #text/1-->
        </button>
        <!--M_*3 #button/0-->
        <!--M_$3-->
      </div>
      <!--M_|1 #text/0 2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={1:_.a={"#text/0(":_._["__tests__/template.marko_1_renderer"],"#text/0!":_.b={}},2:_.b,3:_.c={clickCount:0}},_.a.onCount=_.c.input_onCount=_._["__tests__/template.marko_0/onCount"](_.a),_.d),3,"__tests__/tags/counter.marko_0_input_onCount_clickCount",0];M._.w()
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
    <div>
      <!--M_|1 #text/0 2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={1:_.a={"#text/0(":_._["__tests__/template.marko_1_renderer"],"#text/0!":_.b={}},2:_.b,3:_.c={clickCount:0}},_.a.onCount=_.c.input_onCount=_._["__tests__/template.marko_0/onCount"](_.a),_.d),3,"__tests__/tags/counter.marko_0_input_onCount_clickCount",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/div/#comment after div
INSERT html/body/div/#comment
REMOVE div before html/body/div/#comment
```