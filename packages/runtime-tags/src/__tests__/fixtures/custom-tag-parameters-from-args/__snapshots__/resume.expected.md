# Render
```html
<html>
  <head />
  <body>
    <button
      class="inc"
    >
      1
      <!--M_*2 #text/1-->
      ,
      <!---->
      10
      <!--M_*2 #text/2-->
    </button>
    <!--M_*2 #button/0-->
    <!--M_[3-->
    <div>
      Counts: 
      <!---->
      1
      <!--M_*3 #text/0-->
      ,
      <!---->
      10
      <!--M_*3 #text/1-->
    </div>
    <!--M_]2 #text/3-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={2:{x:1,y:10,"#text/3!":_.b={},"#text/3(":_._["__tests__/template.marko_1_renderer"](_.a={})},3:_.b}),2,"__tests__/tags/custom-tag.marko_0_x_y",0];M._.w()
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
    <button
      class="inc"
    >
      2
      <!--M_*2 #text/1-->
      ,
      <!---->
      11
      <!--M_*2 #text/2-->
    </button>
    <!--M_*2 #button/0-->
    <!--M_[3-->
    <div>
      Counts: 
      <!---->
      2
      <!--M_*3 #text/0-->
      ,
      <!---->
      11
      <!--M_*3 #text/1-->
    </div>
    <!--M_]2 #text/3-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={2:{x:1,y:10,"#text/3!":_.b={},"#text/3(":_._["__tests__/template.marko_1_renderer"](_.a={})},3:_.b}),2,"__tests__/tags/custom-tag.marko_0_x_y",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text0 "1" => "2"
UPDATE html/body/button/#text2 "10" => "11"
UPDATE html/body/div/#text1 "1" => "2"
UPDATE html/body/div/#text3 "10" => "11"
```

# Render
```js
container.querySelector("button").click();
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
      ,
      <!---->
      12
      <!--M_*2 #text/2-->
    </button>
    <!--M_*2 #button/0-->
    <!--M_[3-->
    <div>
      Counts: 
      <!---->
      3
      <!--M_*3 #text/0-->
      ,
      <!---->
      12
      <!--M_*3 #text/1-->
    </div>
    <!--M_]2 #text/3-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={2:{x:1,y:10,"#text/3!":_.b={},"#text/3(":_._["__tests__/template.marko_1_renderer"](_.a={})},3:_.b}),2,"__tests__/tags/custom-tag.marko_0_x_y",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text0 "2" => "3"
UPDATE html/body/button/#text2 "11" => "12"
UPDATE html/body/div/#text1 "2" => "3"
UPDATE html/body/div/#text3 "11" => "12"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <button
      class="inc"
    >
      4
      <!--M_*2 #text/1-->
      ,
      <!---->
      13
      <!--M_*2 #text/2-->
    </button>
    <!--M_*2 #button/0-->
    <!--M_[3-->
    <div>
      Counts: 
      <!---->
      4
      <!--M_*3 #text/0-->
      ,
      <!---->
      13
      <!--M_*3 #text/1-->
    </div>
    <!--M_]2 #text/3-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={2:{x:1,y:10,"#text/3!":_.b={},"#text/3(":_._["__tests__/template.marko_1_renderer"](_.a={})},3:_.b}),2,"__tests__/tags/custom-tag.marko_0_x_y",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text0 "3" => "4"
UPDATE html/body/button/#text2 "12" => "13"
UPDATE html/body/div/#text1 "3" => "4"
UPDATE html/body/div/#text3 "12" => "13"
```