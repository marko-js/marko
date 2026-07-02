// tags/child.marko
const $template$1 = "<div> </div>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input_name__OR__input_write__script = _script("__tests__/tags/child.marko_0_name_write", ($scope) => {
	$scope.write(`mounted ${$scope.name}`);
	$signal($scope, 0).onabort = () => {
		$scope.write(`destroyed ${$scope.name}`);
	};
});
const $input_name__OR__input_write = /* @__PURE__ */ _or(5, ($scope) => {
	$signalReset($scope, 0);
	$input_name__OR__input_write__script($scope);
});
const $name = /* @__PURE__ */ _const("name", ($scope) => {
	_text($scope["#text/0"], $scope.name);
	$input_name__OR__input_write($scope);
});
const $write$1 = /* @__PURE__ */ _const("write", $input_name__OR__input_write);
const $input = ($scope, input) => {
	$name($scope, input.name);
	$write$1($scope, input.write);
};
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", $template$1, "D l", $setup$1, $input);

// template.marko
const $template = "<button>Toggle</button><div></div><!><!>";
const $walks = " b b%c";
const $for_content__write = /* @__PURE__ */ _for_closure("#text/2", ($scope) => $write$1($scope["#childScope/0"], $scope._.write));
const $for_content__setup = ($scope) => {
	$for_content__write._($scope);
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
};
const $for_content__item = ($scope, item) => $name($scope["#childScope/0"], item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /* @__PURE__ */ _for_of("#text/2", $template$1, /* @__PURE__ */ ((_w0) => `/${_w0}&`)("D l"), $for_content__setup, $for_content__$params);
const $items = /* @__PURE__ */ _let("items/3", ($scope) => $for($scope, [$scope.items]));
const $write2 = /* @__PURE__ */ _const("write");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$items($scope, $scope.items?.length ? $scope.items.slice(0, -1) : [
		1,
		2,
		3
	]);
}));
function $setup($scope) {
	$items($scope, [
		1,
		2,
		3
	]);
	$write2($scope, $write($scope));
	$setup__script($scope);
}
function $write($scope) {
	return function(msg) {
		_el_read($scope["#div/1"]).innerHTML += "\n" + msg;
	};
}
_resume("__tests__/template.marko_0/write", $write);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
