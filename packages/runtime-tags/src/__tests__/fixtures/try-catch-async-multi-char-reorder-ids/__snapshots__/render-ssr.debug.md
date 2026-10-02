# Render

# Update
```html
01234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253
```
## Change
```
INSERT: ::text("0")
INSERT: ::text@0 + ::text("1")
INSERT: ::text@1 + ::text("2")
INSERT: ::text@2 + ::text("3")
INSERT: ::text@3 + ::text("4")
INSERT: ::text@4 + ::text("5")
INSERT: ::text@5 + ::text("6")
INSERT: ::text@6 + ::text("7")
INSERT: ::text@7 + ::text("8")
INSERT: ::text@8 + ::text("9")
INSERT: ::text@9 + ::text("10")
INSERT: ::text@10 + ::text("11")
INSERT: ::text@12 + ::text("12")
INSERT: ::text@14 + ::text("13")
INSERT: ::text@16 + ::text("14")
INSERT: ::text@18 + ::text("15")
INSERT: ::text@20 + ::text("16")
INSERT: ::text@22 + ::text("17")
INSERT: ::text@24 + ::text("18")
INSERT: ::text@26 + ::text("19")
INSERT: ::text@28 + ::text("20")
INSERT: ::text@30 + ::text("21")
INSERT: ::text@32 + ::text("22")
INSERT: ::text@34 + ::text("23")
INSERT: ::text@36 + ::text("24")
INSERT: ::text@38 + ::text("25")
INSERT: ::text@40 + ::text("26")
INSERT: ::text@42 + ::text("27")
INSERT: ::text@44 + ::text("28")
INSERT: ::text@46 + ::text("29")
INSERT: ::text@48 + ::text("30")
INSERT: ::text@50 + ::text("31")
INSERT: ::text@52 + ::text("32")
INSERT: ::text@54 + ::text("33")
INSERT: ::text@56 + ::text("34")
INSERT: ::text@58 + ::text("35")
INSERT: ::text@60 + ::text("36")
INSERT: ::text@62 + ::text("37")
INSERT: ::text@64 + ::text("38")
INSERT: ::text@66 + ::text("39")
INSERT: ::text@68 + ::text("40")
INSERT: ::text@70 + ::text("41")
INSERT: ::text@72 + ::text("42")
INSERT: ::text@74 + ::text("43")
INSERT: ::text@76 + ::text("44")
INSERT: ::text@78 + ::text("45")
INSERT: ::text@80 + ::text("46")
INSERT: ::text@82 + ::text("47")
INSERT: ::text@84 + ::text("48")
INSERT: ::text@86 + ::text("49")
INSERT: ::text@88 + ::text("50")
INSERT: ::text@90 + ::text("51")
INSERT: ::text@92 + ::text("52")
INSERT: ::text@94 + ::text("53")
```

# Update
```html
01234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253
<button>
  ERROR! 0
</button>
```
## Change
```
INSERT: button::text("ERROR! ")
INSERT: button::text@0 + ::text("0")
INSERT: ::text@96 + button
```

# Update
```js
document.querySelector("button").click();
```
```html
01234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253
<button>
  ERROR! 1
</button>
```
## Change
```
UPDATE: button::text@7 "0" => "1"
```
