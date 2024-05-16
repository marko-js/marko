# Render {}
```html
<html>
  <head />
  <body>
    <!--M[1-->
    <div>
      <button
        id="count"
      >
        0
        <!--M*3 #text/1-->
      </button>
      <!--M*3 #button/0-->
    </div>
    <!--M]0 #text/0-->
    <button
      id="changeTag"
    />
    <!--M*0 #button/1-->
    <script>
      (M$h=[]).push(_=&gt;(_.c={0:{tagName:"div","#text/0!":_.a={"#scope":1},"#text/0(":"div","#scope":0},1:_.a,2:{"#childScope/0":_.b={"#scope":3,count:0},"#scope":2},3:_.b}),[3,"packages/translator-tags/src/__tests__/fixtures/dynamic-tag-with-updating-body/components/counter.marko_0_count",0,"packages/translator-tags/src/__tests__/fixtures/dynamic-tag-with-updating-body/template.marko_0_tagName",])
    </script>
  </body>
</html>
```

# Mutations
```
removed #document/html0/body1/#comment0 before #document/html0
inserted #document/html0/body1/#comment0
```


# Render 
container.querySelector("#count").click()

```html
<html>
  <head />
  <body>
    <!--M[1-->
    <div>
      <button
        id="count"
      >
        1
        <!--M*3 #text/1-->
      </button>
      <!--M*3 #button/0-->
    </div>
    <!--M]0 #text/0-->
    <button
      id="changeTag"
    />
    <!--M*0 #button/1-->
    <script>
      (M$h=[]).push(_=&gt;(_.c={0:{tagName:"div","#text/0!":_.a={"#scope":1},"#text/0(":"div","#scope":0},1:_.a,2:{"#childScope/0":_.b={"#scope":3,count:0},"#scope":2},3:_.b}),[3,"packages/translator-tags/src/__tests__/fixtures/dynamic-tag-with-updating-body/components/counter.marko_0_count",0,"packages/translator-tags/src/__tests__/fixtures/dynamic-tag-with-updating-body/template.marko_0_tagName",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div1/button0/#text0: "0" => "1"
```


# Render 
container.querySelector("#changeTag").click()

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
    <!--M]0 #text/0-->
    <button
      id="changeTag"
    />
    <!--M*0 #button/1-->
    <script>
      (M$h=[]).push(_=&gt;(_.c={0:{tagName:"div","#text/0!":_.a={"#scope":1},"#text/0(":"div","#scope":0},1:_.a,2:{"#childScope/0":_.b={"#scope":3,count:0},"#scope":2},3:_.b}),[3,"packages/translator-tags/src/__tests__/fixtures/dynamic-tag-with-updating-body/components/counter.marko_0_count",0,"packages/translator-tags/src/__tests__/fixtures/dynamic-tag-with-updating-body/template.marko_0_tagName",])
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/span0
removed #comment after #document/html0/body1/span0
removed div after #document/html0/body1/span0
inserted #document/html0/body1/span0/button0
```


# Render 
container.querySelector("#count").click()

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
    <!--M]0 #text/0-->
    <button
      id="changeTag"
    />
    <!--M*0 #button/1-->
    <script>
      (M$h=[]).push(_=&gt;(_.c={0:{tagName:"div","#text/0!":_.a={"#scope":1},"#text/0(":"div","#scope":0},1:_.a,2:{"#childScope/0":_.b={"#scope":3,count:0},"#scope":2},3:_.b}),[3,"packages/translator-tags/src/__tests__/fixtures/dynamic-tag-with-updating-body/components/counter.marko_0_count",0,"packages/translator-tags/src/__tests__/fixtures/dynamic-tag-with-updating-body/template.marko_0_tagName",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/span0/button0/#text0: "0" => "1"
```