// tags/child.marko
const $template$1 = "";
const $walks$1 = "";
const $value$1 = /*@__PURE__*/ _let("value/0", ($scope) => _return($scope, {
	value: $scope.value,
	valueChange: $_return($scope)
}));
function $setup$1($scope) {
	$value$1($scope, "v");
}
const $_return = ($scope) => function(next) {
	$value$1($scope, next);
};
_resumed["__tests__/tags/child.marko_0/_return"] = $_return;
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", "", "", /*@__PURE__*/ _return_setup($setup$1));

// template.marko
const $Inner_content__walks = " D l";
const $Inner_content__template = "<button class=define> </button>";
const $template = /*@__PURE__*/ ((_w0, _w1, _w2) => `${_w0}${_w1}<div class=value><!> <!></div><div class=renamed><!> <!></div><button class=param>param</button><!><!>${_w2}<!><button class=renamed-param>renamed</button>`)("", "", $Inner_content__template);
const $walks = /*@__PURE__*/ ((_w0, _w1, _w2) => `0${_w0}&0${_w1}&D%c%lD%c%l b%b%b/${_w2}&%b b`)("", "", $Inner_content__walks);
const $if_content2__valueChange__script = _script("__tests__/template.marko_4_valueChange#0:16", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope._.valueChange($scope.valueChange);
}));
const $if_content2__valueChange = /*@__PURE__*/ _if_closure("#text/12", 0, $if_content2__valueChange__script);
const $if_content2__valueChange2 = /*@__PURE__*/ _let("valueChange/2", ($scope) => _text($scope["#text/1"], $scope.valueChange));
const $if_content2__setup = ($scope) => {
	$if_content2__valueChange._($scope);
	$if_content2__valueChange2($scope, "let");
};
const $Inner_content__valueChange__script = _script("__tests__/template.marko_3_valueChange#0:16", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope._.valueChange($scope.valueChange);
}));
const $Inner_content__valueChange = /*@__PURE__*/ _closure_get("valueChange/20", $Inner_content__valueChange__script, 0, "__tests__/template.marko_3_valueChange#0:16/subscribe");
const $Inner_content__setup = $Inner_content__valueChange;
const $Inner_content__valueChange2 = /*@__PURE__*/ _const("valueChange", ($scope) => _text($scope["#text/1"], $scope.valueChange));
const $Inner_content__$params = ($scope, $params3) => $Inner_content__$temp($scope, $params3[0]);
const $Inner_content__$temp = ($scope, $temp) => $Inner_content__valueChange2($scope, $temp.valueChange);
const $for_content__valueChange__script = _script("__tests__/template.marko_2_valueChange#0:16", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope._.valueChange($scope.valueChange);
}));
const $for_content__valueChange = /*@__PURE__*/ _for_closure("#text/10", $for_content__valueChange__script, 20);
const $for_content__setup = $for_content__valueChange;
const $for_content__valueChange2 = /*@__PURE__*/ _const("valueChange", ($scope) => _text($scope["#text/1"], $scope.valueChange));
const $for_content__$params = $for_content__valueChange2;
const $if_content__valueChange__script = _script("__tests__/template.marko_1_valueChange#0:16", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope._.valueChange($scope.valueChange);
}));
const $if_content__valueChange = /*@__PURE__*/ _if_closure("#text/9", 0, $if_content__valueChange__script);
const $if_content__valueChange2 = /*@__PURE__*/ _const("valueChange", ($scope) => _text($scope["#text/1"], $scope.valueChange));
const $if_content__setup = ($scope) => {
	$if_content__valueChange._($scope);
	$if_content__valueChange2($scope, "const");
};
const $pattern3 = _var_resume("__tests__/template.marko_0_$pattern#14/var", ($scope, $pattern) => {
	$value($scope, $pattern.value);
	$valueChange2($scope, $pattern.valueChange);
});
const $value = ($scope, value) => _text($scope["#text/4"], value);
const $valueChange2__closure = /*@__PURE__*/ _closure($Inner_content__valueChange);
const $valueChange2__script = _script("__tests__/template.marko_0_valueChange#16", ($scope) => _on($scope["#button/8"], "click", function() {
	((valueChange) => {
		$scope.valueChange("param" + valueChange);
	})(1);
}));
const $valueChange2 = /*@__PURE__*/ _const("valueChange", ($scope) => {
	_text($scope["#text/5"], typeof $scope.valueChange);
	$if_content__valueChange($scope);
	$for_content__valueChange($scope);
	$valueChange2__closure($scope);
	$if_content2__valueChange($scope);
	$valueChange2__script($scope);
});
const $if = /*@__PURE__*/ _if("#text/9", "<button class=const> </button>", " D ", $if_content__setup);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/10", "<button class=for> </button>", " D ", $for_content__setup, $for_content__$params);
const $if2 = /*@__PURE__*/ _if("#text/12", "<button class=let> </button>", " D ", $if_content2__setup);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$setup$1($scope["#childScope/2"]);
	$scope["#childScope/11"]._ = $scope;
	$Inner_content__setup($scope["#childScope/11"]);
	$Inner_content__valueChange2($scope["#childScope/11"], "define");
	_var($scope, "#childScope/0", $pattern3);
	_var($scope, "#childScope/2", $pattern4);
	$if($scope, true ? 0 : 1);
	$for($scope, [["for"]]);
	$if2($scope, true ? 0 : 1);
}
const $pattern4 = _var_resume("__tests__/template.marko_0_$pattern2#17/var", ($scope, $pattern2) => {
	$onValue($scope, $pattern2.valueChange);
	$renamed($scope, $pattern2.value);
});
const $onValue__script = _script("__tests__/template.marko_0_onValue#18", ($scope) => _on($scope["#button/13"], "click", function() {
	((onValue) => {
		$scope.onValue("renamed" + onValue);
	})(2);
}));
const $onValue = /*@__PURE__*/ _const("onValue", ($scope) => {
	_text($scope["#text/7"], typeof $scope.onValue);
	$onValue__script($scope);
});
const $renamed = ($scope, renamed) => _text($scope["#text/6"], renamed);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
