// tags/btn.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
const $setup$1 = () => {};
const $input_name = ($scope, input_name) => {
	_attr_class($scope["#button/0"], input_name);
	_text($scope["#text/1"], input_name);
};
const $getHandler__script = _script("__tests__/tags/btn.marko_0_getHandler#5", ($scope) => _on($scope["#button/0"], "click", $scope.getHandler()));
const $getHandler$1 = /*@__PURE__*/ _const("getHandler", $getHandler__script);
const $input = ($scope, input) => {
	$input_name($scope, input.name);
	$getHandler$1($scope, input.getHandler);
};
var btn_default = /*@__PURE__*/ _template("__tests__/tags/btn.marko", $template$1, $walks$1, 0, $input);

// template.marko
const $LocalBtn_content__walks = " D l", $LocalBtn_content__template = "<button> </button>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<button id=mode>mode</button><p> </p>`)($template$1, $LocalBtn_content__template);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}& bD l`)($walks$1, $LocalBtn_content__walks);
const $LocalBtn_content__name = ($scope, name) => {
	_attr_class($scope["#button/0"], name);
	_text($scope["#text/1"], name);
};
const $LocalBtn_content__getHandler__script = _script("__tests__/template.marko_1_getHandler#4", ($scope) => _on($scope["#button/0"], "click", $scope.getHandler()));
const $LocalBtn_content__getHandler = /*@__PURE__*/ _const("getHandler", $LocalBtn_content__getHandler__script);
const $LocalBtn_content__$params = ($scope, $params2) => $LocalBtn_content__$temp($scope, $params2?.[0]);
const $LocalBtn_content__$temp = ($scope, $temp) => {
	$LocalBtn_content__getHandler($scope, $temp.getHandler);
	$LocalBtn_content__name($scope, $temp.name);
};
const $mode = /*@__PURE__*/ _let("mode/4", ($scope) => {
	$getHandler$1($scope["#childScope/0"], $getHandler($scope));
	$LocalBtn_content__getHandler($scope["#childScope/1"], $getHandler2($scope));
});
const $out = /*@__PURE__*/ _let("out/5", ($scope) => _text($scope["#text/3"], $scope.out));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$mode($scope, "b");
}));
function $setup($scope) {
	$input_name($scope["#childScope/0"], "child");
	$LocalBtn_content__name($scope["#childScope/1"], "local");
	$mode($scope, "a");
	$out($scope, "");
	$setup__script($scope);
}
const $getHandler2 = ($scope) => function() {
	return $scope.mode === "a" ? () => {
		$out($scope, "a");
	} : () => {
		$out($scope, "b");
	};
};
const $getHandler = ($scope) => function() {
	return $scope.mode === "a" ? () => {
		$out($scope, "A");
	} : () => {
		$out($scope, "B");
	};
};
_resumed["__tests__/template.marko_0/getHandler2"] = $getHandler2;
_resumed["__tests__/template.marko_0/getHandler"] = $getHandler;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
