# Render

# Update
```html
01234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253
```
## Change
```
INSERT: ::text("0")
UPDATE: ::text@0 " " => "0"
INSERT: ::text("1")
UPDATE: ::text@1 " " => "1"
INSERT: ::text("2")
UPDATE: ::text@2 " " => "2"
INSERT: ::text("3")
UPDATE: ::text@3 " " => "3"
INSERT: ::text("4")
UPDATE: ::text@4 " " => "4"
INSERT: ::text("5")
UPDATE: ::text@5 " " => "5"
INSERT: ::text("6")
UPDATE: ::text@6 " " => "6"
INSERT: ::text("7")
UPDATE: ::text@7 " " => "7"
INSERT: ::text("8")
UPDATE: ::text@8 " " => "8"
INSERT: ::text("9")
UPDATE: ::text@9 " " => "9"
INSERT: ::text("10")
UPDATE: ::text@10 " " => "10"
INSERT: ::text("11")
UPDATE: ::text@12 " " => "11"
INSERT: ::text("12")
UPDATE: ::text@14 " " => "12"
INSERT: ::text("13")
UPDATE: ::text@16 " " => "13"
INSERT: ::text("14")
UPDATE: ::text@18 " " => "14"
INSERT: ::text("15")
UPDATE: ::text@20 " " => "15"
INSERT: ::text("16")
UPDATE: ::text@22 " " => "16"
INSERT: ::text("17")
UPDATE: ::text@24 " " => "17"
INSERT: ::text("18")
UPDATE: ::text@26 " " => "18"
INSERT: ::text("19")
UPDATE: ::text@28 " " => "19"
INSERT: ::text("20")
UPDATE: ::text@30 " " => "20"
INSERT: ::text("21")
UPDATE: ::text@32 " " => "21"
INSERT: ::text("22")
UPDATE: ::text@34 " " => "22"
INSERT: ::text("23")
UPDATE: ::text@36 " " => "23"
INSERT: ::text("24")
UPDATE: ::text@38 " " => "24"
INSERT: ::text("25")
UPDATE: ::text@40 " " => "25"
INSERT: ::text("26")
UPDATE: ::text@42 " " => "26"
INSERT: ::text("27")
UPDATE: ::text@44 " " => "27"
INSERT: ::text("28")
UPDATE: ::text@46 " " => "28"
INSERT: ::text("29")
UPDATE: ::text@48 " " => "29"
INSERT: ::text("30")
UPDATE: ::text@50 " " => "30"
INSERT: ::text("31")
UPDATE: ::text@52 " " => "31"
INSERT: ::text("32")
UPDATE: ::text@54 " " => "32"
INSERT: ::text("33")
UPDATE: ::text@56 " " => "33"
INSERT: ::text("34")
UPDATE: ::text@58 " " => "34"
INSERT: ::text("35")
UPDATE: ::text@60 " " => "35"
INSERT: ::text("36")
UPDATE: ::text@62 " " => "36"
INSERT: ::text("37")
UPDATE: ::text@64 " " => "37"
INSERT: ::text("38")
UPDATE: ::text@66 " " => "38"
INSERT: ::text("39")
UPDATE: ::text@68 " " => "39"
INSERT: ::text("40")
UPDATE: ::text@70 " " => "40"
INSERT: ::text("41")
UPDATE: ::text@72 " " => "41"
INSERT: ::text("42")
UPDATE: ::text@74 " " => "42"
INSERT: ::text("43")
UPDATE: ::text@76 " " => "43"
INSERT: ::text("44")
UPDATE: ::text@78 " " => "44"
INSERT: ::text("45")
UPDATE: ::text@80 " " => "45"
INSERT: ::text("46")
UPDATE: ::text@82 " " => "46"
INSERT: ::text("47")
UPDATE: ::text@84 " " => "47"
INSERT: ::text("48")
UPDATE: ::text@86 " " => "48"
INSERT: ::text("49")
UPDATE: ::text@88 " " => "49"
INSERT: ::text("50")
UPDATE: ::text@90 " " => "50"
INSERT: ::text("51")
UPDATE: ::text@92 " " => "51"
INSERT: ::text("52")
UPDATE: ::text@94 " " => "52"
INSERT: ::text("53")
UPDATE: ::text@96 " " => "53"
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
UPDATE: button::text@0 "" => "ERROR!"
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
