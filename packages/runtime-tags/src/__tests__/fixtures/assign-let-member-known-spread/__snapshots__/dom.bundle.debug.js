// tags/kid.marko
const $template$1 = "<span><!> <!></span>";
const $walks$1 = "D%c%l";
const $setup$1 = () => {};
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input_open = ($scope, input_open) => _text($scope["#text/1"], input_open ? "open" : "closed");
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_open($scope, input.open);
};
var kid_default = /*@__PURE__*/ _template("__tests__/tags/kid.marko", $template$1, $walks$1, 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button class=open>open</button><button class=read>read</button><button class=apply>apply</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b b b`)($walks$1);
const $live = /*@__PURE__*/ _let("live/4", ($scope) => {
	$input_label($scope["#childScope/0"], $scope.live?.label);
	$input_open($scope["#childScope/0"], $scope.live?.open);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$scope.live.open = true;
	});
	_on($scope["#button/2"], "click", function() {
		console.log("read", $scope.live?.open);
	});
	_on($scope["#button/3"], "click", function() {
		$live($scope, { ...$scope.live });
	});
});
function $setup($scope) {
	$live($scope, {
		open: false,
		label: "live"
	});
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
