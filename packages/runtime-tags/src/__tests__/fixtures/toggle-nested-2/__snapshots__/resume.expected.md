# Render
```html
<html>
  <head />
  <body>
    <div>
      <button
        id="outer"
      />
      <!--M_*1 #button/0-->
      <!--M_[2-->
      <button
        id="inner"
      />
      <!--M_*2 #button/0-->
      <button
        id="count"
      >
        0
        <!--M_*3 #text/1-->
      </button>
      <!--M_*3 #button/0-->
      <!--M_|2 #text/1 3-->
      <!--M_]1 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={1:_.a={outer:!0,inner:!0,count:0,"#text/1(":_._["__tests__/template.marko_1_renderer"],"#text/1!":_.b={"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.c={}}},2:_.b,3:_.c},_.b._=_.a,_.c._=_.b,_.d),3,"__tests__/template.marko_2_count/subscriber",3,"__tests__/template.marko_2_count",2,"__tests__/template.marko_1_inner",1,"__tests__/template.marko_0_outer",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/#text
```

# Render
```js
container.querySelector("#count").click();
```
```html
<html>
  <head />
  <body>
    <div>
      <button
        id="outer"
      />
      <!--M_*1 #button/0-->
      <!--M_[2-->
      <button
        id="inner"
      />
      <!--M_*2 #button/0-->
      <button
        id="count"
      >
        1
        <!--M_*3 #text/1-->
      </button>
      <!--M_*3 #button/0-->
      <!--M_|2 #text/1 3-->
      <!--M_]1 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={1:_.a={outer:!0,inner:!0,count:0,"#text/1(":_._["__tests__/template.marko_1_renderer"],"#text/1!":_.b={"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.c={}}},2:_.b,3:_.c},_.b._=_.a,_.c._=_.b,_.d),3,"__tests__/template.marko_2_count/subscriber",3,"__tests__/template.marko_2_count",2,"__tests__/template.marko_1_inner",1,"__tests__/template.marko_0_outer",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/button2/#text "0" => "1"
```

# Render
```js
container.querySelector("#count").click();
```
```html
<html>
  <head />
  <body>
    <div>
      <button
        id="outer"
      />
      <!--M_*1 #button/0-->
      <!--M_[2-->
      <button
        id="inner"
      />
      <!--M_*2 #button/0-->
      <button
        id="count"
      >
        2
        <!--M_*3 #text/1-->
      </button>
      <!--M_*3 #button/0-->
      <!--M_|2 #text/1 3-->
      <!--M_]1 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={1:_.a={outer:!0,inner:!0,count:0,"#text/1(":_._["__tests__/template.marko_1_renderer"],"#text/1!":_.b={"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.c={}}},2:_.b,3:_.c},_.b._=_.a,_.c._=_.b,_.d),3,"__tests__/template.marko_2_count/subscriber",3,"__tests__/template.marko_2_count",2,"__tests__/template.marko_1_inner",1,"__tests__/template.marko_0_outer",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/button2/#text "1" => "2"
```

# Render
```js
container.querySelector("#inner").click();
```
```html
<html>
  <head />
  <body>
    <div>
      <button
        id="outer"
      />
      <!--M_*1 #button/0-->
      <!--M_[2-->
      <button
        id="inner"
      />
      <!--M_*2 #button/0-->
      <!--M_|2 #text/1 3-->
      <!--M_*3 #button/0-->
      <!--M_]1 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={1:_.a={outer:!0,inner:!0,count:0,"#text/1(":_._["__tests__/template.marko_1_renderer"],"#text/1!":_.b={"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.c={}}},2:_.b,3:_.c},_.b._=_.a,_.c._=_.b,_.d),3,"__tests__/template.marko_2_count/subscriber",3,"__tests__/template.marko_2_count",2,"__tests__/template.marko_1_inner",1,"__tests__/template.marko_0_outer",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/div/#comment3 after html/body/div/#comment4
INSERT html/body/div/#comment3
REMOVE button after html/body/div/#comment2
```

# Render
```js
container.querySelector("#inner").click();
```
```html
<html>
  <head />
  <body>
    <div>
      <button
        id="outer"
      />
      <!--M_*1 #button/0-->
      <!--M_[2-->
      <button
        id="inner"
      />
      <!--M_*2 #button/0-->
      <button
        id="count"
      >
        2
      </button>
      <!--M_*3 #button/0-->
      <!--M_]1 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={1:_.a={outer:!0,inner:!0,count:0,"#text/1(":_._["__tests__/template.marko_1_renderer"],"#text/1!":_.b={"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.c={}}},2:_.b,3:_.c},_.b._=_.a,_.c._=_.b,_.d),3,"__tests__/template.marko_2_count/subscriber",3,"__tests__/template.marko_2_count",2,"__tests__/template.marko_1_inner",1,"__tests__/template.marko_0_outer",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/button2
REMOVE #comment after html/body/div/#comment2
UPDATE html/body/div/button2/#text " " => "2"
```

# Render
```js
container.querySelector("#count").click();
```
```html
<html>
  <head />
  <body>
    <div>
      <button
        id="outer"
      />
      <!--M_*1 #button/0-->
      <!--M_[2-->
      <button
        id="inner"
      />
      <!--M_*2 #button/0-->
      <button
        id="count"
      >
        3
      </button>
      <!--M_*3 #button/0-->
      <!--M_]1 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={1:_.a={outer:!0,inner:!0,count:0,"#text/1(":_._["__tests__/template.marko_1_renderer"],"#text/1!":_.b={"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.c={}}},2:_.b,3:_.c},_.b._=_.a,_.c._=_.b,_.d),3,"__tests__/template.marko_2_count/subscriber",3,"__tests__/template.marko_2_count",2,"__tests__/template.marko_1_inner",1,"__tests__/template.marko_0_outer",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/button2/#text "2" => "3"
```

# Render
```js
container.querySelector("#outer").click();
```
```html
<html>
  <head />
  <body>
    <div>
      <button
        id="outer"
      />
      <!--M_*1 #button/0-->
      <!--M_]1 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={1:_.a={outer:!0,inner:!0,count:0,"#text/1(":_._["__tests__/template.marko_1_renderer"],"#text/1!":_.b={"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.c={}}},2:_.b,3:_.c},_.b._=_.a,_.c._=_.b,_.d),3,"__tests__/template.marko_2_count/subscriber",3,"__tests__/template.marko_2_count",2,"__tests__/template.marko_1_inner",1,"__tests__/template.marko_0_outer",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/div/#comment1 after #text
INSERT html/body/div/#comment1
REMOVE #comment after html/body/div/#comment0
REMOVE button after html/body/div/#comment0
REMOVE #comment after html/body/div/#comment0
REMOVE button after html/body/div/#comment0
REMOVE #comment after html/body/div/#comment0
REMOVE #text after html/body/div/#comment0
```

# Render
```js
container.querySelector("#outer").click();
```
```html
<html>
  <head />
  <body>
    <div>
      <button
        id="outer"
      />
      <!--M_*1 #button/0-->
      <button
        id="inner"
      />
      <button
        id="count"
      >
        3
      </button>
      <!---->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={1:_.a={outer:!0,inner:!0,count:0,"#text/1(":_._["__tests__/template.marko_1_renderer"],"#text/1!":_.b={"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.c={}}},2:_.b,3:_.c},_.b._=_.a,_.c._=_.b,_.d),3,"__tests__/template.marko_2_count/subscriber",3,"__tests__/template.marko_2_count",2,"__tests__/template.marko_1_inner",1,"__tests__/template.marko_0_outer",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/button1, #text, html/body/div/#comment1
REMOVE #comment after html/body/div/#comment0
INSERT html/body/div/button2
REMOVE #text after html/body/div/button1
UPDATE html/body/div/button2/#text " " => "3"
```

# Render
```js
container.querySelector("#count").click();
```
```html
<html>
  <head />
  <body>
    <div>
      <button
        id="outer"
      />
      <!--M_*1 #button/0-->
      <button
        id="inner"
      />
      <button
        id="count"
      >
        4
      </button>
      <!---->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={1:_.a={outer:!0,inner:!0,count:0,"#text/1(":_._["__tests__/template.marko_1_renderer"],"#text/1!":_.b={"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.c={}}},2:_.b,3:_.c},_.b._=_.a,_.c._=_.b,_.d),3,"__tests__/template.marko_2_count/subscriber",3,"__tests__/template.marko_2_count",2,"__tests__/template.marko_1_inner",1,"__tests__/template.marko_0_outer",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/button2/#text "3" => "4"
```