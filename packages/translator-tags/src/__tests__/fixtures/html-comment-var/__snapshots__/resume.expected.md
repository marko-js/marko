# Render {}
```html
<html>
  <head />
  <body>
    <div>
      <!--Body Text-->
      <!--M*1 #comment/0-->
      ‍
      <!--M*0 #text/1-->
    </div>
    <span>
      <!--Body Text-->
      <!--M*2 #comment/0-->
      ‍
      <!--M*0 #text/3-->
    </span>
    <script>
      (M$h=[]).push(_=&gt;(_.d={0:_.a={"#childScope/0":_.b={},"#childScope/2":_.c={}},1:_.b,2:_.c},_.b["/"]=_._["packages/translator-tags/src/__tests__/fixtures/html-comment-var/template.marko_0_divName"](_.a),_.c["/"]=_._["packages/translator-tags/src/__tests__/fixtures/html-comment-var/template.marko_0_spanName"](_.a),_.d),[1,"packages/translator-tags/src/__tests__/fixtures/html-comment-var/components/parent-el.marko_0",2,"packages/translator-tags/src/__tests__/fixtures/html-comment-var/components/parent-el.marko_0",])
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render "ASYNC"
```html
<html>
  <head />
  <body>
    <div>
      <!--Body Text-->
      <!--M*1 #comment/0-->
      DIV
      <!--M*0 #text/1-->
    </div>
    <span>
      <!--Body Text-->
      <!--M*2 #comment/0-->
      SPAN
      <!--M*0 #text/3-->
    </span>
    <script>
      (M$h=[]).push(_=&gt;(_.d={0:_.a={"#childScope/0":_.b={},"#childScope/2":_.c={}},1:_.b,2:_.c},_.b["/"]=_._["packages/translator-tags/src/__tests__/fixtures/html-comment-var/template.marko_0_divName"](_.a),_.c["/"]=_._["packages/translator-tags/src/__tests__/fixtures/html-comment-var/template.marko_0_spanName"](_.a),_.d),[1,"packages/translator-tags/src/__tests__/fixtures/html-comment-var/components/parent-el.marko_0",2,"packages/translator-tags/src/__tests__/fixtures/html-comment-var/components/parent-el.marko_0",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div0/#text2: "‍" => "DIV"
#document/html0/body1/span1/#text2: "‍" => "SPAN"
```