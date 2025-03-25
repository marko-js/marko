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
        <!--M_*4 #text/1-->
      </button>
      <!--M_*4 #button/0-->
    </div>
    <!--M_|1 #text/0 2-->
    <button
      id="changeTag"
    />
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={1:{tagName:"div","ConditionalScope:#text/0":_.a={},"ConditionalRenderer:#text/0":"div"},2:_.a,4:{count:0,"#ClosestBranchId":2}}),4,"__tests__/tags/counter.marko_0_count",1,"__tests__/template.marko_0_tagName"];M._.w()
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
        <!--M_*4 #text/1-->
      </button>
      <!--M_*4 #button/0-->
    </div>
    <!--M_|1 #text/0 2-->
    <button
      id="changeTag"
    />
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={1:{tagName:"div","ConditionalScope:#text/0":_.a={},"ConditionalRenderer:#text/0":"div"},2:_.a,4:{count:0,"#ClosestBranchId":2}}),4,"__tests__/tags/counter.marko_0_count",1,"__tests__/template.marko_0_tagName"];M._.w()
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
    <!--M_|1 #text/0 2-->
    <button
      id="changeTag"
    />
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={1:{tagName:"div","ConditionalScope:#text/0":_.a={},"ConditionalRenderer:#text/0":"div"},2:_.a,4:{count:0,"#ClosestBranchId":2}}),4,"__tests__/tags/counter.marko_0_count",1,"__tests__/template.marko_0_tagName"];M._.w()
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
    <!--M_|1 #text/0 2-->
    <button
      id="changeTag"
    />
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={1:{tagName:"div","ConditionalScope:#text/0":_.a={},"ConditionalRenderer:#text/0":"div"},2:_.a,4:{count:0,"#ClosestBranchId":2}}),4,"__tests__/tags/counter.marko_0_count",1,"__tests__/template.marko_0_tagName"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/button/#text "0" => "1"
```