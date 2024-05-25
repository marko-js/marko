# Render {}
```html
<html>
  <head />
  <body>
    <button
      class="inc"
    />
    <!--M*0 #button/0-->
    <button
      class="toggle"
    />
    <!--M*0 #button/1-->
    <!--M[1-->
    The count is 
    <!---->
    0
    <!--M*1 #text/0-->
    <!--M]0 #text/2-->
    <script>
      (M$h=[]).push(_=&gt;(_.c={0:_.a={show:!0,count:0,"#text/2!":_.b={}},1:_.b},_.a["#text/2("]=_._["packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_1_renderer"](_.a),_.b._=_.a,_.c),[0,"packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_0_show",0,"packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_0_count",])
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("button.inc").click()

```html
<html>
  <head />
  <body>
    <button
      class="inc"
    />
    <!--M*0 #button/0-->
    <button
      class="toggle"
    />
    <!--M*0 #button/1-->
    <!--M[1-->
    The count is 
    <!---->
    1
    <!--M*1 #text/0-->
    <!--M]0 #text/2-->
    <script>
      (M$h=[]).push(_=&gt;(_.c={0:_.a={show:!0,count:0,"#text/2!":_.b={}},1:_.b},_.a["#text/2("]=_._["packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_1_renderer"](_.a),_.b._=_.a,_.c),[0,"packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_0_show",0,"packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_0_count",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/#text7: "0" => "1"
```


# Render 
container.querySelector("button.toggle").click()

```html
<html>
  <head />
  <body>
    <button
      class="inc"
    />
    <!--M*0 #button/0-->
    <button
      class="toggle"
    />
    <!--M*0 #button/1-->
    <!--M]0 #text/2-->
    <script>
      (M$h=[]).push(_=&gt;(_.c={0:_.a={show:!0,count:0,"#text/2!":_.b={}},1:_.b},_.a["#text/2("]=_._["packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_1_renderer"](_.a),_.b._=_.a,_.c),[0,"packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_0_show",0,"packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_0_count",])
    </script>
  </body>
</html>
```

# Mutations
```
removed #document/html0/body1/#comment4 after #comment
inserted #document/html0/body1/#comment4
removed #comment after #document/html0/body1/#comment4
removed #text after #document/html0/body1/#comment4
removed #comment after #document/html0/body1/#comment4
removed #text after #document/html0/body1/#comment4
removed #comment after #document/html0/body1/#comment4
```


# Render 
container.querySelector("button.inc").click()

```html
<html>
  <head />
  <body>
    <button
      class="inc"
    />
    <!--M*0 #button/0-->
    <button
      class="toggle"
    />
    <!--M*0 #button/1-->
    <!--M]0 #text/2-->
    <script>
      (M$h=[]).push(_=&gt;(_.c={0:_.a={show:!0,count:0,"#text/2!":_.b={}},1:_.b},_.a["#text/2("]=_._["packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_1_renderer"](_.a),_.b._=_.a,_.c),[0,"packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_0_show",0,"packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_0_count",])
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("button.toggle").click()

```html
<html>
  <head />
  <body>
    <button
      class="inc"
    />
    <!--M*0 #button/0-->
    <button
      class="toggle"
    />
    <!--M*0 #button/1-->
    The count is 2
    <script>
      (M$h=[]).push(_=&gt;(_.c={0:_.a={show:!0,count:0,"#text/2!":_.b={}},1:_.b},_.a["#text/2("]=_._["packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_1_renderer"](_.a),_.b._=_.a,_.c),[0,"packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_0_show",0,"packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_0_count",])
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/#text4
inserted #document/html0/body1/#text5
removed #comment after #document/html0/body1/#text5
#document/html0/body1/#text5: "" => "2"
```


# Render 
container.querySelector("button.inc").click()

```html
<html>
  <head />
  <body>
    <button
      class="inc"
    />
    <!--M*0 #button/0-->
    <button
      class="toggle"
    />
    <!--M*0 #button/1-->
    The count is 3
    <script>
      (M$h=[]).push(_=&gt;(_.c={0:_.a={show:!0,count:0,"#text/2!":_.b={}},1:_.b},_.a["#text/2("]=_._["packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_1_renderer"](_.a),_.b._=_.a,_.c),[0,"packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_0_show",0,"packages/translator-tags/src/__tests__/fixtures/basic-conditional-counter-multiple-nodes/template.marko_0_count",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/#text5: "2" => "3"
```