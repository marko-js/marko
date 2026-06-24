// tags/child.marko
const $template$1 = "<div>child</div>";
const $walks$1 = "b";
const $setup$1 = () => {};
const $input__script = _script("__tests__/tags/child.marko_0_input", ($scope) => {
	$scope.input.write("mounted");
	$signal($scope, 0).onabort = () => {
		$scope.input.write("destroyed");
	};
});
const $input = /*@__PURE__*/ _const("input", ($scope) => {
	$signalReset($scope, 0);
	$input__script($scope);
});
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b", $setup$1, $input);

// template.marko
const $template = "<button>Toggle</button><div></div><!><!>";
const $walks = " b b%c";
const $if_content__setup = ($scope) => {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input($scope["#childScope/0"], { write: $write($scope) });
};
const $if = /*@__PURE__*/ _if("#text/2", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("b"), $if_content__setup);
const $show__script = _script("__tests__/template.marko_0_show", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
const $show = /*@__PURE__*/ _let("show/3", ($scope) => {
	$if($scope, $scope.show ? 0 : 1);
	$show__script($scope);
});
function $setup($scope) {
	$show($scope, true);
}
function $write($scope) {
	return function(state) {
		_el_read($scope._["#div/1"]).innerHTML = state;
	};
}
_resume("__tests__/template.marko_1/write", $write);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
