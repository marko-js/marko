# Render
```html
<html>
  <head />
  <body>
    <button
      class="inc"
    >
      0
      <!--M_*2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <div>
      Marko 1
      <!--M_*1 #text/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={"#scopeOffset/1":3,name:"Marko",data:1,"#childScope/0":_.b={input_extra:1,x:0}},2:_.b},_.b["#TagVariable"]=_._["__tests__/template.marko_0_data/var"](_.a),_.c),2,"__tests__/tags/child.marko_0_x"];M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("button.inc").click();
```
```html
<html>
  <head />
  <body>
    <button
      class="inc"
    >
      1
      <!--M_*2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <div>
      Marko 2
      <!--M_*1 #text/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={"#scopeOffset/1":3,name:"Marko",data:1,"#childScope/0":_.b={input_extra:1,x:0}},2:_.b},_.b["#TagVariable"]=_._["__tests__/template.marko_0_data/var"](_.a),_.c),2,"__tests__/tags/child.marko_0_x"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "0" => "1"
UPDATE html/body/div/#text "Marko 1" => "Marko 2"
```

# Render
```js
container.querySelector("button.inc").click();
```
```html
<html>
  <head />
  <body>
    <button
      class="inc"
    >
      2
      <!--M_*2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <div>
      Marko 3
      <!--M_*1 #text/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={"#scopeOffset/1":3,name:"Marko",data:1,"#childScope/0":_.b={input_extra:1,x:0}},2:_.b},_.b["#TagVariable"]=_._["__tests__/template.marko_0_data/var"](_.a),_.c),2,"__tests__/tags/child.marko_0_x"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "1" => "2"
UPDATE html/body/div/#text "Marko 2" => "Marko 3"
```

# Render
```js
container.querySelector("button.inc").click();
```
```html
<html>
  <head />
  <body>
    <button
      class="inc"
    >
      3
      <!--M_*2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <div>
      Marko 4
      <!--M_*1 #text/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={"#scopeOffset/1":3,name:"Marko",data:1,"#childScope/0":_.b={input_extra:1,x:0}},2:_.b},_.b["#TagVariable"]=_._["__tests__/template.marko_0_data/var"](_.a),_.c),2,"__tests__/tags/child.marko_0_x"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "2" => "3"
UPDATE html/body/div/#text "Marko 3" => "Marko 4"
```