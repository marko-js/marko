// tags/child.marko
const $template$1 = "";
const $walks$1 = "";
const $a__OR__b = /*@__PURE__*/ _or(2, ($scope) => _return($scope, {
	a: $scope.a,
	aChange: $_return($scope),
	b: $scope.b,
	bChange: $_return2($scope)
}));
const $a$1 = /*@__PURE__*/ _let("a/0", $a__OR__b);
const $b$1 = /*@__PURE__*/ _let("b/1", $a__OR__b);
function $setup$1($scope) {
	$a$1($scope, "a");
	$b$1($scope, "b");
}
const $_return2 = ($scope) => function(next) {
	$b$1($scope, next);
};
const $_return = ($scope) => function(next) {
	$a$1($scope, next);
};
_resumed["__tests__/tags/child.marko_0/_return2"] = $_return2;
_resumed["__tests__/tags/child.marko_0/_return"] = $_return;
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", "", "", /*@__PURE__*/ _return_setup($setup$1));

// template.marko
const $First_content__walks = " D%c%l";
const $First_content__template = "<button class=first><!> <!></button>";
const $Last_content__walks = " D%c%l";
const $Last_content__template = "<button class=last><!> <!></button>";
const $FirstRenamed_content__walks = " D%c%l";
const $FirstRenamed_content__template = "<button class=first-renamed><!> <!></button>";
const $LastRenamed_content__walks = " D%c%l";
const $LastRenamed_content__template = "<button class=last-renamed><!> <!></button>";
const $template = /*@__PURE__*/ ((_w0, _w1, _w2, _w3, _w4, _w5, _w6, _w7, _w8) => `${_w0}${_w1}${_w2}${_w3}<button class=a><!> <!></button><button class=b><!> <!></button><button class=c><!> <!></button><button class=d><!> <!></button>${_w4}<button class=e><!> <!> <!></button>${_w5}${_w6}${_w7}${_w8}<div><!> <!> <!> <!></div>`)("", "", "", "", "", $First_content__template, $Last_content__template, $FirstRenamed_content__template, $LastRenamed_content__template);
const $walks = /*@__PURE__*/ ((_w0, _w1, _w2, _w3, _w4, _w5, _w6, _w7, _w8) => `0${_w0}&0${_w1}&0${_w2}&0${_w3}& D%c%l D%c%l D%c%l D%c%0${_w4}&l D%c%c%l/${_w5}&/${_w6}&/${_w7}&/${_w8}&D%c%c%c%l`)("", "", "", "", "", $First_content__walks, $Last_content__walks, $FirstRenamed_content__walks, $LastRenamed_content__walks);
const $LastRenamed_content__onValue__script = _script("__tests__/template.marko_4_onValue#5", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.onValue($scope.value + "?");
}));
const $LastRenamed_content__onValue = /*@__PURE__*/ _const("onValue", ($scope) => {
	_text($scope["#text/2"], typeof $scope.onValue);
	$LastRenamed_content__onValue__script($scope);
});
const $LastRenamed_content__value = /*@__PURE__*/ _const("value", ($scope) => _text($scope["#text/1"], $scope.value));
const $LastRenamed_content__$params = ($scope, $params5) => $LastRenamed_content__$temp($scope, $params5[0]);
const $LastRenamed_content__$temp = ($scope, $temp4) => {
	$LastRenamed_content__onValue($scope, $temp4.valueChange);
	$LastRenamed_content__value($scope, $temp4.value);
};
const $FirstRenamed_content__onValue__script = _script("__tests__/template.marko_3_onValue#6", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.onValue($scope.value + "?");
}));
const $FirstRenamed_content__onValue = /*@__PURE__*/ _const("onValue", ($scope) => {
	_text($scope["#text/2"], typeof $scope.onValue);
	$FirstRenamed_content__onValue__script($scope);
});
const $FirstRenamed_content__value = /*@__PURE__*/ _const("value", ($scope) => _text($scope["#text/1"], $scope.value));
const $FirstRenamed_content__$params = ($scope, $params4) => $FirstRenamed_content__$temp($scope, $params4[0]);
const $FirstRenamed_content__$temp = ($scope, $temp3) => {
	$FirstRenamed_content__value($scope, $temp3.value);
	$FirstRenamed_content__onValue($scope, $temp3.valueChange);
};
const $Last_content__valueChange__script = _script("__tests__/template.marko_2_valueChange#5", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.valueChange($scope.value + "?");
}));
const $Last_content__valueChange = /*@__PURE__*/ _const("valueChange", ($scope) => {
	_text($scope["#text/2"], typeof $scope.valueChange);
	$Last_content__valueChange__script($scope);
});
const $Last_content__value = /*@__PURE__*/ _const("value", ($scope) => _text($scope["#text/1"], $scope.value));
const $Last_content__$params = ($scope, $params3) => $Last_content__$temp($scope, $params3[0]);
const $Last_content__$temp = ($scope, $temp2) => {
	$Last_content__valueChange($scope, $temp2.valueChange);
	$Last_content__value($scope, $temp2.value);
};
const $First_content__valueChange__script = _script("__tests__/template.marko_1_valueChange#6", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.valueChange($scope.value + "?");
}));
const $First_content__valueChange = /*@__PURE__*/ _const("valueChange", ($scope) => {
	_text($scope["#text/2"], typeof $scope.valueChange);
	$First_content__valueChange__script($scope);
});
const $First_content__value = /*@__PURE__*/ _const("value", ($scope) => _text($scope["#text/1"], $scope.value));
const $First_content__$params = ($scope, $params2) => $First_content__$temp($scope, $params2[0]);
const $First_content__$temp = ($scope, $temp) => {
	$First_content__value($scope, $temp.value);
	$First_content__valueChange($scope, $temp.valueChange);
};
const $pattern5 = _var_resume("__tests__/template.marko_0_$pattern#34/var", ($scope, $pattern) => {
	$a($scope, $pattern.a);
	$aChange3($scope, $pattern.aChange);
});
const $a = /*@__PURE__*/ _const("a", ($scope) => _text($scope["#text/9"], $scope.a));
const $aChange3__script = _script("__tests__/template.marko_0_aChange#36", ($scope) => _on($scope["#button/8"], "click", function() {
	$scope.aChange($scope.a + "!");
}));
const $aChange3 = /*@__PURE__*/ _const("aChange", ($scope) => {
	_text($scope["#text/10"], typeof $scope.aChange);
	$aChange3__script($scope);
});
const $w = /*@__PURE__*/ _let("w/50", ($scope) => {
	$First_content__value($scope["#childScope/26"], $scope.w);
	_text($scope["#text/30"], $scope.w);
});
const $x = /*@__PURE__*/ _let("x/51", ($scope) => {
	$Last_content__value($scope["#childScope/27"], $scope.x);
	_text($scope["#text/31"], $scope.x);
});
const $y = /*@__PURE__*/ _let("y/52", ($scope) => {
	$FirstRenamed_content__value($scope["#childScope/28"], $scope.y);
	_text($scope["#text/32"], $scope.y);
});
const $z = /*@__PURE__*/ _let("z/53", ($scope) => {
	$LastRenamed_content__value($scope["#childScope/29"], $scope.z);
	_text($scope["#text/33"], $scope.z);
});
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$setup$1($scope["#childScope/2"]);
	$setup$1($scope["#childScope/4"]);
	$setup$1($scope["#childScope/6"]);
	$setup$1($scope["#childScope/20"]);
	$First_content__valueChange($scope["#childScope/26"], $valueChange3($scope));
	$Last_content__valueChange($scope["#childScope/27"], $valueChange4($scope));
	$FirstRenamed_content__onValue($scope["#childScope/28"], $valueChange5($scope));
	$LastRenamed_content__onValue($scope["#childScope/29"], $valueChange6($scope));
	_var($scope, "#childScope/0", $pattern5);
	_var($scope, "#childScope/2", $pattern6);
	_var($scope, "#childScope/4", $pattern7);
	_var($scope, "#childScope/6", $pattern8);
	_var($scope, "#childScope/20", $obj);
	$w($scope, "w");
	$x($scope, "x");
	$y($scope, "y");
	$z($scope, "z");
}
const $pattern6 = _var_resume("__tests__/template.marko_0_$pattern2#37/var", ($scope, $pattern2) => {
	$bChange($scope, $pattern2.bChange);
	$b($scope, $pattern2.b);
});
const $bChange__script = _script("__tests__/template.marko_0_bChange#38", ($scope) => _on($scope["#button/11"], "click", function() {
	$scope.bChange($scope.b + "!");
}));
const $bChange = /*@__PURE__*/ _const("bChange", ($scope) => {
	_text($scope["#text/13"], typeof $scope.bChange);
	$bChange__script($scope);
});
const $b = /*@__PURE__*/ _const("b", ($scope) => _text($scope["#text/12"], $scope.b));
const $pattern7 = _var_resume("__tests__/template.marko_0_$pattern3#40/var", ($scope, $pattern3) => {
	$c($scope, $pattern3.a);
	$onC($scope, $pattern3.aChange);
});
const $c = /*@__PURE__*/ _const("c", ($scope) => _text($scope["#text/15"], $scope.c));
const $onC__script = _script("__tests__/template.marko_0_onC#42", ($scope) => _on($scope["#button/14"], "click", function() {
	$scope.onC($scope.c + "!");
}));
const $onC = /*@__PURE__*/ _const("onC", ($scope) => {
	_text($scope["#text/16"], typeof $scope.onC);
	$onC__script($scope);
});
const $pattern8 = _var_resume("__tests__/template.marko_0_$pattern4#43/var", ($scope, $pattern4) => {
	$onD($scope, $pattern4.bChange);
	$d($scope, $pattern4.b);
});
const $onD__script = _script("__tests__/template.marko_0_onD#44", ($scope) => _on($scope["#button/17"], "click", function() {
	$scope.onD($scope.d + "!");
}));
const $onD = /*@__PURE__*/ _const("onD", ($scope) => {
	_text($scope["#text/19"], typeof $scope.onD);
	$onD__script($scope);
});
const $d = /*@__PURE__*/ _const("d", ($scope) => _text($scope["#text/18"], $scope.d));
const $obj = _var_resume("__tests__/template.marko_0_obj#46/var", ($scope, obj) => {
	$rest($scope, (({ a, aChange, ...rest }) => rest)(obj));
	$obj_aChange($scope, obj.aChange);
	$e($scope, obj.a);
});
const $rest = ($scope, rest) => _text($scope["#text/25"], Object.keys(rest).join());
const $obj_aChange__script = _script("__tests__/template.marko_0_obj_aChange#47", ($scope) => _on($scope["#button/22"], "click", function() {
	$scope.obj_aChange($scope.e + "!");
}));
const $obj_aChange = /*@__PURE__*/ _const("obj_aChange", ($scope) => {
	_text($scope["#text/24"], typeof $scope.obj_aChange);
	$obj_aChange__script($scope);
});
const $e = /*@__PURE__*/ _const("e", ($scope) => _text($scope["#text/23"], $scope.e));
const $valueChange6 = ($scope) => (_new_z) => $z($scope, _new_z);
const $valueChange5 = ($scope) => (_new_y) => $y($scope, _new_y);
const $valueChange4 = ($scope) => (_new_x) => $x($scope, _new_x);
const $valueChange3 = ($scope) => (_new_w) => $w($scope, _new_w);
_resumed["__tests__/template.marko_0/valueChange6"] = $valueChange6;
_resumed["__tests__/template.marko_0/valueChange5"] = $valueChange5;
_resumed["__tests__/template.marko_0/valueChange4"] = $valueChange4;
_resumed["__tests__/template.marko_0/valueChange3"] = $valueChange3;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
