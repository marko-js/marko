# Render {}
```html
<html>
  <head />
  <body>
    <button
      class="inc"
    />
    <!--M#0 #button/0-->
    <button
      class="toggle"
    />
    <!--M#0 #button/1-->
    <span>
      0
      <!--M#1 #text/0-->
    </span>
    <!--M|0 #text/2 1-->
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={show:!0,count:0,"#text/2!":j={},"#text/2(":b("packages/translator/src/__tests__/fixtures/basic-conditional-counter/template.marko_1_renderer")},1:j},j._=h,k),[0,"packages/translator/src/__tests__/fixtures/basic-conditional-counter/template.marko_0_show",0,"packages/translator/src/__tests__/fixtures/basic-conditional-counter/template.marko_0_count",])
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
    <!--M#0 #button/0-->
    <button
      class="toggle"
    />
    <!--M#0 #button/1-->
    <span>
      1
      <!--M#1 #text/0-->
    </span>
    <!--M|0 #text/2 1-->
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={show:!0,count:0,"#text/2!":j={},"#text/2(":b("packages/translator/src/__tests__/fixtures/basic-conditional-counter/template.marko_1_renderer")},1:j},j._=h,k),[0,"packages/translator/src/__tests__/fixtures/basic-conditional-counter/template.marko_0_show",0,"packages/translator/src/__tests__/fixtures/basic-conditional-counter/template.marko_0_count",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/span4/#text0: "0" => "1"
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
    <!--M#0 #button/0-->
    <button
      class="toggle"
    />
    <!--M#0 #button/1-->
    <!--M|0 #text/2 1-->
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={show:!0,count:0,"#text/2!":j={},"#text/2(":b("packages/translator/src/__tests__/fixtures/basic-conditional-counter/template.marko_1_renderer")},1:j},j._=h,k),[0,"packages/translator/src/__tests__/fixtures/basic-conditional-counter/template.marko_0_show",0,"packages/translator/src/__tests__/fixtures/basic-conditional-counter/template.marko_0_count",])
    </script>
  </body>
</html>
```

# Mutations
```
removed #document/html0/body1/#comment4 after span
inserted #document/html0/body1/#comment4
removed span after #document/html0/body1/#comment4
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
    <!--M#0 #button/0-->
    <button
      class="toggle"
    />
    <!--M#0 #button/1-->
    <!--M|0 #text/2 1-->
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={show:!0,count:0,"#text/2!":j={},"#text/2(":b("packages/translator/src/__tests__/fixtures/basic-conditional-counter/template.marko_1_renderer")},1:j},j._=h,k),[0,"packages/translator/src/__tests__/fixtures/basic-conditional-counter/template.marko_0_show",0,"packages/translator/src/__tests__/fixtures/basic-conditional-counter/template.marko_0_count",])
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
    <!--M#0 #button/0-->
    <button
      class="toggle"
    />
    <!--M#0 #button/1-->
    <span>
      2
    </span>
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={show:!0,count:0,"#text/2!":j={},"#text/2(":b("packages/translator/src/__tests__/fixtures/basic-conditional-counter/template.marko_1_renderer")},1:j},j._=h,k),[0,"packages/translator/src/__tests__/fixtures/basic-conditional-counter/template.marko_0_show",0,"packages/translator/src/__tests__/fixtures/basic-conditional-counter/template.marko_0_count",])
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/span4
removed #comment after #document/html0/body1/span4
#document/html0/body1/span4/#text0: " " => "2"
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
    <!--M#0 #button/0-->
    <button
      class="toggle"
    />
    <!--M#0 #button/1-->
    <span>
      3
    </span>
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={show:!0,count:0,"#text/2!":j={},"#text/2(":b("packages/translator/src/__tests__/fixtures/basic-conditional-counter/template.marko_1_renderer")},1:j},j._=h,k),[0,"packages/translator/src/__tests__/fixtures/basic-conditional-counter/template.marko_0_show",0,"packages/translator/src/__tests__/fixtures/basic-conditional-counter/template.marko_0_count",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/span4/#text0: "2" => "3"
```