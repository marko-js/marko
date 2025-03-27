# Render
```html
<html>
  <head />
  <body>
    <button
      class="inc"
    />
    <!--M_*1 #button/0-->
    <button
      class="toggle"
    />
    <!--M_*1 #button/1-->
    <!--M_[2-->
    The count is 
    <!---->
    0
    <!--M_*2 #text/0-->
    <!--M_]1 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,_.a={show:!0,count:0,"ConditionalRenderer:#text/2":0,"ConditionalScope:#text/2":_.b={}},_.b],_.b._=_.a,_.c),1,"__tests__/template.marko_0_show",1,"__tests__/template.marko_0_count"];M._.w()
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
    />
    <!--M_*1 #button/0-->
    <button
      class="toggle"
    />
    <!--M_*1 #button/1-->
    <!--M_[2-->
    The count is 
    <!---->
    1
    <!--M_*2 #text/0-->
    <!--M_]1 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,_.a={show:!0,count:0,"ConditionalRenderer:#text/2":0,"ConditionalScope:#text/2":_.b={}},_.b],_.b._=_.a,_.c),1,"__tests__/template.marko_0_show",1,"__tests__/template.marko_0_count"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/#text1 "0" => "1"
```

# Render
```js
container.querySelector("button.toggle").click();
```
```html
<html>
  <head />
  <body>
    <button
      class="inc"
    />
    <!--M_*1 #button/0-->
    <button
      class="toggle"
    />
    <!--M_*1 #button/1-->
    <!--M_]1 #text/2-->
    <!--M_*2 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,_.a={show:!0,count:0,"ConditionalRenderer:#text/2":0,"ConditionalScope:#text/2":_.b={}},_.b],_.b._=_.a,_.c),1,"__tests__/template.marko_0_show",1,"__tests__/template.marko_0_count"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment2 after html/body/#comment3
INSERT html/body/#comment2
REMOVE #comment after html/body/#comment2
REMOVE #text after html/body/#comment2
REMOVE #comment after html/body/#comment2
REMOVE #text after html/body/#comment2
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
    />
    <!--M_*1 #button/0-->
    <button
      class="toggle"
    />
    <!--M_*1 #button/1-->
    <!--M_]1 #text/2-->
    <!--M_*2 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,_.a={show:!0,count:0,"ConditionalRenderer:#text/2":0,"ConditionalScope:#text/2":_.b={}},_.b],_.b._=_.a,_.c),1,"__tests__/template.marko_0_show",1,"__tests__/template.marko_0_count"];M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("button.toggle").click();
```
```html
<html>
  <head />
  <body>
    <button
      class="inc"
    />
    <!--M_*1 #button/0-->
    <button
      class="toggle"
    />
    <!--M_*1 #button/1-->
    The count is 2
    <!--M_*2 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,_.a={show:!0,count:0,"ConditionalRenderer:#text/2":0,"ConditionalScope:#text/2":_.b={}},_.b],_.b._=_.a,_.c),1,"__tests__/template.marko_0_show",1,"__tests__/template.marko_0_count"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text0, html/body/#text1
REMOVE #comment after html/body/#text1
UPDATE html/body/#text1 "" => "2"
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
    />
    <!--M_*1 #button/0-->
    <button
      class="toggle"
    />
    <!--M_*1 #button/1-->
    The count is 3
    <!--M_*2 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,_.a={show:!0,count:0,"ConditionalRenderer:#text/2":0,"ConditionalScope:#text/2":_.b={}},_.b],_.b._=_.a,_.c),1,"__tests__/template.marko_0_show",1,"__tests__/template.marko_0_count"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/#text1 "2" => "3"
```