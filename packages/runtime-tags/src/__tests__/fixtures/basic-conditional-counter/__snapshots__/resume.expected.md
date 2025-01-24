# Render {}
```html
<html>
  <head />
  <body>
    <button
      class="inc"
    />
    <!--M_*0 #button/0-->
    <button
      class="toggle"
    />
    <!--M_*0 #button/1-->
    <span>
      0
      <!--M_*1 #text/0-->
    </span>
    <!--M_|0 #text/2 1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={show:!0,count:0,"#text/2(":_._["__tests__/template.marko_1_renderer"],"#text/2!":_.b={}},1:_.b},_.b._=_.a,_.c),0,"__tests__/template.marko_0_show",0,"__tests__/template.marko_0_count",0];M._.w()
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
    <!--M_*0 #button/0-->
    <button
      class="toggle"
    />
    <!--M_*0 #button/1-->
    <span>
      1
      <!--M_*1 #text/0-->
    </span>
    <!--M_|0 #text/2 1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={show:!0,count:0,"#text/2(":_._["__tests__/template.marko_1_renderer"],"#text/2!":_.b={}},1:_.b},_.b._=_.a,_.c),0,"__tests__/template.marko_0_show",0,"__tests__/template.marko_0_count",0];M._.w()
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
    <!--M_*0 #button/0-->
    <button
      class="toggle"
    />
    <!--M_*0 #button/1-->
    <!--M_|0 #text/2 1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={show:!0,count:0,"#text/2(":_._["__tests__/template.marko_1_renderer"],"#text/2!":_.b={}},1:_.b},_.b._=_.a,_.c),0,"__tests__/template.marko_0_show",0,"__tests__/template.marko_0_count",0];M._.w()
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
    <!--M_*0 #button/0-->
    <button
      class="toggle"
    />
    <!--M_*0 #button/1-->
    <!--M_|0 #text/2 1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={show:!0,count:0,"#text/2(":_._["__tests__/template.marko_1_renderer"],"#text/2!":_.b={}},1:_.b},_.b._=_.a,_.c),0,"__tests__/template.marko_0_show",0,"__tests__/template.marko_0_count",0];M._.w()
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
    <!--M_*0 #button/0-->
    <button
      class="toggle"
    />
    <!--M_*0 #button/1-->
    <span>
      2
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={show:!0,count:0,"#text/2(":_._["__tests__/template.marko_1_renderer"],"#text/2!":_.b={}},1:_.b},_.b._=_.a,_.c),0,"__tests__/template.marko_0_show",0,"__tests__/template.marko_0_count",0];M._.w()
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
    <!--M_*0 #button/0-->
    <button
      class="toggle"
    />
    <!--M_*0 #button/1-->
    <span>
      3
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={show:!0,count:0,"#text/2(":_._["__tests__/template.marko_1_renderer"],"#text/2!":_.b={}},1:_.b},_.b._=_.a,_.c),0,"__tests__/template.marko_0_show",0,"__tests__/template.marko_0_count",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/span4/#text0: "2" => "3"
```