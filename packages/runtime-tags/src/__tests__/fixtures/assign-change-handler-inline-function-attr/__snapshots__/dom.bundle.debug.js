// tags/child.marko
const $template$2 = "";
const $walks$2 = "";
const $value = /*@__PURE__*/ _let("value/0", ($scope) => _return($scope, {
	value: $scope.value,
	valueChange: $_return($scope)
}));
function $setup$2($scope) {
	$value($scope, "v");
}
const $_return = ($scope) => function(next) {
	$value($scope, next);
};
_resumed["__tests__/tags/child.marko_0/_return"] = $_return;
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", "", "", /*@__PURE__*/ _return_setup($setup$2));

// tags/runner/index.marko
const $template$1 = "<button>run</button>";
const $walks$1 = " b";
const $setup__script$1 = _script("__tests__/tags/runner/index.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.input.run();
}));
const $setup$1 = $setup__script$1;
const $input = /*@__PURE__*/ _const("input", ($scope) => _attr_class($scope["#button/0"], $scope.input.class));
var runner_default = /*@__PURE__*/ _template("__tests__/tags/runner/index.marko", $template$1, " b", $setup$1, $input);

// template.marko
const $template = "<button class=show>show</button><!><!><!>";
const $walks = " b%b%c";
const $if_content2__$pattern = _var_resume("__tests__/template.marko_2_$pattern2#5/var", ($scope, $pattern2) => {
	$if_content2__valueChange($scope, $pattern2.valueChange);
	$if_content2__value($scope, $pattern2.value);
});
const $if_content2__valueChange = /*@__PURE__*/ _const("valueChange", ($scope, valueChange) => {
	$input($scope["#childScope/2"], {
		class: "last",
		run: [2].map((n) => () => {
			$scope.valueChange("last" + n);
		})[0]
	});
	_text($scope["#text/4"], typeof valueChange);
});
const $if_content2__value = ($scope, value) => _text($scope["#text/3"], value);
const $if_content2__setup = ($scope) => {
	$setup$2($scope["#childScope/0"]);
	$setup$1($scope["#childScope/2"]);
	_var($scope, "#childScope/0", $if_content2__$pattern);
};
const $if_content__$pattern = _var_resume("__tests__/template.marko_1_$pattern#5/var", ($scope, $pattern) => {
	$if_content__value($scope, $pattern.value);
	$if_content__valueChange($scope, $pattern.valueChange);
});
const $if_content__value = ($scope, value) => _text($scope["#text/3"], value);
const $if_content__valueChange = /*@__PURE__*/ _const("valueChange", ($scope, valueChange) => {
	$input($scope["#childScope/2"], {
		class: "first",
		run: [1].map((n) => () => {
			$scope.valueChange("first" + n);
		})[0]
	});
	_text($scope["#text/4"], typeof valueChange);
});
const $if_content__setup = ($scope) => {
	$setup$2($scope["#childScope/0"]);
	$setup$1($scope["#childScope/2"]);
	_var($scope, "#childScope/0", $if_content__$pattern);
};
const $if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<span><!> <!></span>`)("", $template$1), /*@__PURE__*/ ((_w0, _w1) => `0${_w0}&/${_w1}&D%c%l`)("", " b"), $if_content__setup);
const $if2 = /*@__PURE__*/ _if("#text/2", /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<span><!> <!></span>`)("", $template$1), /*@__PURE__*/ ((_w0, _w1) => `0${_w0}&/${_w1}&D%c%l`)("", " b"), $if_content2__setup);
const $show = /*@__PURE__*/ _let("show/3", ($scope) => {
	$if($scope, $scope.show ? 0 : 1);
	$if2($scope, $scope.show ? 0 : 1);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, true);
}));
function $setup($scope) {
	$show($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
