# Render `{"show":false,"label":"a","promise":{}}`
```html
<button
  class="prefix"
>
  prefix
</button>
<button
  class="swap"
>
  swap
</button>
```

# Update
```js
document.querySelector("button.prefix").click();
```
```html
<button
  class="prefix"
>
  prefix
</button>
<span
  id="cM_0"
/>
<span
  id="cM_1"
/>
<span
  id="cM_2"
/>
<span
  id="cM_3"
/>
<span
  id="cM_4"
/>
<span
  id="cM_5"
/>
<span
  id="cM_6"
/>
<span
  id="cM_7"
/>
<span
  id="cM_8"
/>
<span
  id="cM_9"
/>
<button
  class="swap"
>
  swap
</button>
```
## Change
```
INSERT: .prefix + :is(#cM_0, #cM_1, #cM_2, #cM_3, #cM_4, #cM_5, #cM_6, #cM_7, #cM_8, #cM_9)
```

# Update `{"show":true,"label":"b}","promise":{}}`

# Update
```html
<button
  class="prefix"
>
  prefix
</button>
<span
  id="cM_0"
/>
<span
  id="cM_1"
/>
<span
  id="cM_2"
/>
<span
  id="cM_3"
/>
<span
  id="cM_4"
/>
<span
  id="cM_5"
/>
<span
  id="cM_6"
/>
<span
  id="cM_7"
/>
<span
  id="cM_8"
/>
<span
  id="cM_9"
/>
<button
  class="swap"
>
  swap
</button>
<p>
  a
</p>
```
## Change
```
INSERT: .swap + :is(.cM_a, p)
REMOVE: .cM_a::text(".cM_a~*{}")
INSERT: .cM_a::text(".cM_a~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bawait-19caller-19state-19created-19style-19groups-1btags-1bshow-19await-1amarko_0:a;}")
REMOVE: .cM_a::text(".cM_a~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bawait-19caller-19state-19created-19style-19groups-1btags-1bshow-19await-1amarko_0:a;}")
INSERT: .cM_a::text(".cM_a~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bawait-19caller-19state-19created-19style-19groups-1btags-1bshow-19await-1amarko_0:a;--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bawait-19caller-19state-19created-19style-19groups-1btags-1bshow-19await-1amarko_2:a;}")
UPDATE: p::text " " => "a"
REMOVE: .cM_a::text(".cM_a~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bawait-19caller-19state-19created-19style-19groups-1btags-1bshow-19await-1amarko_0:a;--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bawait-19caller-19state-19created-19style-19groups-1btags-1bshow-19await-1amarko_2:a;}")
INSERT: .cM_a::text(".cM_a~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bawait-19caller-19state-19created-19style-19groups-1btags-1bshow-19await-1amarko_0:a;--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bawait-19caller-19state-19created-19style-19groups-1btags-1bshow-19await-1amarko_2:a;--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bawait-19caller-19state-19created-19style-19groups-1btags-1bshow-19await-1amarko_1:b\\};}")
```

# Update
```js
document.querySelector("button.swap").click();
```
```html
<button
  class="prefix"
>
  prefix
</button>
<span
  id="cM_0"
/>
<span
  id="cM_1"
/>
<span
  id="cM_2"
/>
<span
  id="cM_3"
/>
<span
  id="cM_4"
/>
<span
  id="cM_5"
/>
<span
  id="cM_6"
/>
<span
  id="cM_7"
/>
<span
  id="cM_8"
/>
<span
  id="cM_9"
/>
<button
  class="swap"
>
  swap
</button>
<p>
  swapped
</p>
```
## Change
```
REMOVE: .cM_a::text(".cM_a~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bawait-19caller-19state-19created-19style-19groups-1btags-1bshow-19await-1amarko_0:a;--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bawait-19caller-19state-19created-19style-19groups-1btags-1bshow-19await-1amarko_2:a;--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bawait-19caller-19state-19created-19style-19groups-1btags-1bshow-19await-1amarko_1:b\\};}")
INSERT: .cM_a::text(".cM_a~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bawait-19caller-19state-19created-19style-19groups-1btags-1bshow-19await-1amarko_0:swapped;--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bawait-19caller-19state-19created-19style-19groups-1btags-1bshow-19await-1amarko_2:a;--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bawait-19caller-19state-19created-19style-19groups-1btags-1bshow-19await-1amarko_1:b\\};}")
REMOVE: .cM_a::text(".cM_a~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bawait-19caller-19state-19created-19style-19groups-1btags-1bshow-19await-1amarko_0:swapped;--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bawait-19caller-19state-19created-19style-19groups-1btags-1bshow-19await-1amarko_2:a;--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bawait-19caller-19state-19created-19style-19groups-1btags-1bshow-19await-1amarko_1:b\\};}")
INSERT: .cM_a::text(".cM_a~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bawait-19caller-19state-19created-19style-19groups-1btags-1bshow-19await-1amarko_0:swapped;--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bawait-19caller-19state-19created-19style-19groups-1btags-1bshow-19await-1amarko_2:swapped;--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bawait-19caller-19state-19created-19style-19groups-1btags-1bshow-19await-1amarko_1:b\\};}")
UPDATE: p::text "a" => "swapped"
```
