# Render

# Update
```html
01234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253
```
## Change
```
INSERT: ::text("0")
INSERT: ::text("1")
INSERT: ::text("2")
INSERT: ::text("3")
INSERT: ::text("4")
INSERT: ::text("5")
INSERT: ::text("6")
INSERT: ::text("7")
INSERT: ::text("8")
INSERT: ::text("9")
INSERT: ::text("10")
INSERT: ::text("11")
INSERT: ::text("12")
INSERT: ::text("13")
INSERT: ::text("14")
INSERT: ::text("15")
INSERT: ::text("16")
INSERT: ::text("17")
INSERT: ::text("18")
INSERT: ::text("19")
INSERT: ::text("20")
INSERT: ::text("21")
INSERT: ::text("22")
INSERT: ::text("23")
INSERT: ::text("24")
INSERT: ::text("25")
INSERT: ::text("26")
INSERT: ::text("27")
INSERT: ::text("28")
INSERT: ::text("29")
INSERT: ::text("30")
INSERT: ::text("31")
INSERT: ::text("32")
INSERT: ::text("33")
INSERT: ::text("34")
INSERT: ::text("35")
INSERT: ::text("36")
INSERT: ::text("37")
INSERT: ::text("38")
INSERT: ::text("39")
INSERT: ::text("40")
INSERT: ::text("41")
INSERT: ::text("42")
INSERT: ::text("43")
INSERT: ::text("44")
INSERT: ::text("45")
INSERT: ::text("46")
INSERT: ::text("47")
INSERT: ::text("48")
INSERT: ::text("49")
INSERT: ::text("50")
INSERT: ::text("51")
INSERT: ::text("52")
INSERT: ::text("53")
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
INSERT: button
INSERT: button::text("ERROR! ")
INSERT: button::text("0")
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
