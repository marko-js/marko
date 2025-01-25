# Render
```html
<html>
  <head />
  <body>
    <div>
      <button
        id="count"
      >
        0
        <!--M_*3 #text/1-->
      </button>
      <!--M_*3 #button/0-->
      <!--M_$3-->
    </div>
    <!--M_|0 #text/0 1-->
    <button
      id="changeTag"
    />
    <!--M_*0 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:{tagName:"div","#text/0!":_.a={},"#text/0(":"div"},1:_.a,2:{"#childScope/0":_.b={count:0}},3:_.b}),3,"__tests__/tags/counter.marko_0_count",0,"__tests__/template.marko_0_tagName",0];M._.w()
    </script>
  </body>
</html>
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
        id="count"
      >
        1
        <!--M_*3 #text/1-->
      </button>
      <!--M_*3 #button/0-->
      <!--M_$3-->
    </div>
    <!--M_|0 #text/0 1-->
    <button
      id="changeTag"
    />
    <!--M_*0 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:{tagName:"div","#text/0!":_.a={},"#text/0(":"div"},1:_.a,2:{"#childScope/0":_.b={count:0}},3:_.b}),3,"__tests__/tags/counter.marko_0_count",0,"__tests__/template.marko_0_tagName",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/button/#text "0" => "1"
```

# Render
```js
container.querySelector("#changeTag").click();
```
```html
<html>
  <head />
  <body>
    <span>
      <button
        id="count"
      >
        0
      </button>
    </span>
    <!--M_|0 #text/0 1-->
    <button
      id="changeTag"
    />
    <!--M_*0 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:{tagName:"div","#text/0!":_.a={},"#text/0(":"div"},1:_.a,2:{"#childScope/0":_.b={count:0}},3:_.b}),3,"__tests__/tags/counter.marko_0_count",0,"__tests__/template.marko_0_tagName",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/span
REMOVE div after html/body/span
INSERT html/body/span/button
UPDATE html/body/span/button/#text " " => "0"
```

# Render
```js
container.querySelector("#count").click();
```
```html
<html>
  <head />
  <body>
    <span>
      <button
        id="count"
      >
        1
      </button>
    </span>
    <!--M_|0 #text/0 1-->
    <button
      id="changeTag"
    />
    <!--M_*0 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:{tagName:"div","#text/0!":_.a={},"#text/0(":"div"},1:_.a,2:{"#childScope/0":_.b={count:0}},3:_.b}),3,"__tests__/tags/counter.marko_0_count",0,"__tests__/template.marko_0_tagName",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/button/#text "0" => "1"
```