// template.marko
const $template = "<!><!><button id=inc> </button><button id=hide></button>";
const $walks = "b%b D l b";
function watch(signal, name, value) {
	console.log("read", name, value, signal.aborted);
	signal.onabort = () => console.log("abort", name, value);
	return value;
}
const $if_content__input_attrs__OR__count__script = _script("__tests__/template.marko_1_input_attrs#0:6_count#0:7", ($scope) => _attrs_script($scope, "#div/0"));
const $if_content__input_attrs__OR__count = /*@__PURE__*/ _or(3, ($scope) => {
	$signalReset($scope, 0);
	_attrs_content($scope, "#div/0", {
		"data-spread": watch($signal($scope, 0), "spread", $scope._.count),
		...$scope._.input_attrs
	});
	$if_content__input_attrs__OR__count__script($scope);
});
const $if_content__input_attrs = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_attrs__OR__count);
const $if_content__setup = ($scope) => {
	$if_content__input_attrs._($scope);
	$if_content__count._($scope);
};
const $if_content__big = /*@__PURE__*/ _const("big", ($scope) => {
	$signalReset($scope, 3);
	_attr($scope["#div/2"], "data-big", watch($signal($scope, 3), "big", $scope.big));
});
const $if_content__count = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	$signalReset($scope, 1);
	$signalReset($scope, 2);
	_attr($scope["#div/1"], "data-first", watch($signal($scope, 1), "first", $scope._.count));
	_attr($scope["#div/1"], "data-second", watch($signal($scope, 2), "second", $scope._.count));
	$if_content__big($scope, $scope._.count > 1);
	$if_content__input_attrs__OR__count($scope);
});
const $if = /*@__PURE__*/ _if("#text/0", "<div></div><div></div><div></div>", " b b ", $if_content__setup);
const $count = /*@__PURE__*/ _let("count/7", ($scope) => {
	_text($scope["#text/2"], $scope.count);
	$if($scope, $scope.count ? 0 : 1);
	$if_content__count($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$count($scope, +$scope.count + 1);
	});
	_on($scope["#button/3"], "click", function() {
		$count($scope, 0);
	});
});
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_attrs($scope, input.attrs);
const $input_attrs = /*@__PURE__*/ _const("input_attrs", $if_content__input_attrs);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
