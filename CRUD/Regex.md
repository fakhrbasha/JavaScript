
# <h1>Regular Expression</h1>

- [0-9] -> digit
-  \d   -> digit

## EX
```bash
web\d{3}web

write web+three number+web
web123web
match
```

- D any digit but not number 
```bash
web\D{3}web

write web+three any thing not number+web

webassweb
match
```

- \w [a-zA-Z0-9_]
```bash
- web\wweb

write web+anycharornumber+web

webyweb
match

webqweb
match

web\w{2}web
web7sweb
match

```

- \W not \w 
```bash
web\W{2}web

write web+anything not  [a-zA-Z0-9_] +web


web@$web
```
- ? mean can space or nut two match
```bash
web ?web

webweb 
match

web web 
match
```
- plus -> can add once or more

```bash
web +web

web        web
match

web   web
match
```
- astric -> zero or more
```bash
web *web

webweb
match

```

## EX
```bash
web[^10-20]web

web+anything not 1-2+web

webrweb
match

```

- Dot .
```bash
.com

ahything but contain .com

ahmed.com
match

web.web
write web+ anything +web

web5web
match

webrweb
match

web.{3,5}web anything range 3-5

web7555web
match
```

# Take Care 
- if write email yahoo.com
- if write this
```bash
yahoo.com

test string
yahooacom
match

because . write anything 
mush write backslash


yahoo\.com
yahooacom
no match

yahoo\.com
yahoo.com
match
```
- if i need yahoo or gmail
```bash
(yahoo|gmail)\.com
```

- $ i don't need anything after this
```bash
(yahoo|gmail)\.com$

ahmed@gmail.com
match

ahmed@gmail.commm
not match
```

------------

------------
-------------
# Write Regex

- var x = / here / common
- var y = new RegExp(' here ')

- var x = /b/ -> must input has char b
- var x = /ab/ -> must input has char ab at same pattern
- i need a or b or c
```js
var x = /[abc]/
```
```js
var x = /[a-z_]/
// search char a-z or _

var x = /[a-z0-9#]/
// any char or number or #

var x = /web[a-z0-9#]web/

// web+any number or char or #+web


var regex = /web[a-z0-9#]web/

var str = "webaweb";
if(regex.test(str)==true){
    console.log('match');
}else{
    console.log('not match');
}
// match
// if web112web
// not match

var regex = /web[a-z0-9#]{3}web/

var str = "webavaweb";
if(regex.test(str)==true){
    console.log('match');
}else{
    console.log('not match');
}
// match
```

```js
[10-80] this not meaning range 10 - 80
that mean 1 or 0-8 or 0
```

- ^ not
```js
[^abc]
anything not a or b or c
```

- phone

```js
01[0125]

0153231133
match

0134344
not match

i need egy number contain 11 number 

01[0125][0-9]{8}
```
- but here i input ahmed01234567890ah output match

- ^ in first mean this start with ...
- $ end here -> break

```js
^01[0125][0-9]{8}$ must start 0 and end in number 11

01123456787ws 
no match

01123456787
match
```

- {0,1} -> can add once or not

```js 
^(002){0,1}01[0125][0-9]{8}$
01021329080
match

00201021329080
match

^(\+2|002){0,1}01[0125][0-9]{8}$
+201123456787
match

```

-------
-------
***ip***
```bash
[0-9]
test string 
229
```
- if don't select g for global first num has only match 
```bash
[0-9][0-9][0-9]
test string 
229
1 match
```
- if i need two or three number in first 
- 0-9 | 0-99 | 0-255
```bash
([0-9] | [0-9][0-9])
```
- number 0-9 or number 0-99
```bash
([0-9]\.|[0-9][0-9]\.)
```
- number and followed . or two number followed .
```bash
([0-9]\.|[0-9][0-9]\.)
test string 
1.
1 match
29.
1 match
```

- ip
- 199.199.199.149
```bash
^([0-9]\.|[0-9][0-9]\.|((1[0-9][0-9])|200|(2[0-4][0-9]|25[0-5]))\.){3}
```
- {3} repeat 3 
- and last one
```bash
[0-9]|(1[0-9][0-9]|200|2[0-4][0-9]|25[0-5]))
```

- final
```bash
^([0-9]\.|[0-9][0-9]\.|((1[0-9][0-9])|200|(2[0-4][0-9]|25[0-5]))\.){3}([0-9]|[0-9][0-9]|(1[0-9][0-9]|200|2[0-4][0-9]|25[0-5]))$

1[0-9][0-9]|200 -> 1 -> 200

2[0-4][0-9] -> 249 238

255
252



test string 
199.199.199.149

match

```