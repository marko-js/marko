// tags/probe.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input_name__OR__input_log__script = _script("__tests__/tags/probe.marko_0_name_log", ($scope) => {
	$scope.log(`mount ${$scope.name}`);
	$signal($scope, 0).onabort = () => $scope.log(`abort ${$scope.name}`);
});
const $input_name__OR__input_log = /*@__PURE__*/ _or(5, ($scope) => {
	$signalReset($scope, 0);
	$input_name__OR__input_log__script($scope);
});
const $name = /*@__PURE__*/ _const("name", ($scope) => {
	_text($scope["#text/0"], $scope.name);
	$input_name__OR__input_log($scope);
});
const $log$1 = /*@__PURE__*/ _const("log", $input_name__OR__input_log);
const $input = ($scope, input) => {
	$name($scope, input.name);
	$log$1($scope, input.log);
};
var probe_default = /*@__PURE__*/ _template("__tests__/tags/probe.marko", $template$1, "D l", $setup$1, $input);

// template.marko
const $template = "<div class=sink></div><div id=list></div><button id=reorder>reorder</button><button id=remove>remove x</button><button id=clear>clear</button>";
const $walks = " b b b b b";
const $for_content__log = /*@__PURE__*/ _for_closure("#div/1", ($scope) => $log$1($scope["#childScope/0"], $scope._.log));
const $for_content__setup = $for_content__log;
const $for_content__name = ($scope, name) => $name($scope["#childScope/0"], name);
const $for_content__$params = ($scope, $params2) => $for_content__name($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of("#div/1", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $for_content__setup, $for_content__$params);
const $items = /*@__PURE__*/ _let("items/5", ($scope) => $for($scope, [$scope.items, (name) => name]));
const $log2 = /*@__PURE__*/ _const("log");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/2"], "click", function() {
		$items($scope, [
			"z",
			"x",
			"y"
		]);
	});
	_on($scope["#button/3"], "click", function() {
		$items($scope, ["z", "y"]);
	});
	_on($scope["#button/4"], "click", function() {
		$items($scope, []);
	});
});
function $setup($scope) {
	$items($scope, [
		"x",
		"y",
		"z"
	]);
	$log2($scope, $log($scope));
	$setup__script($scope);
}
function $log($scope) {
	return function(msg) {
		_el_read($scope["#div/0"]).textContent += msg + ";";
	};
}
_resume("__tests__/template.marko_0/log", $log);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
