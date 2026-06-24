// tags/child.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input_name__OR__input_write__script = _script("__tests__/tags/child.marko_0_name_write", ($scope) => {
	$scope.write(`${$scope.name} mounted`);
	$signal($scope, 0).onabort = () => {
		$scope.write(`${$scope.name} destroyed`);
	};
});
const $input_name__OR__input_write = /*@__PURE__*/ _or(5, ($scope) => {
	$signalReset($scope, 0);
	$input_name__OR__input_write__script($scope);
});
const $name = /*@__PURE__*/ _const("name", ($scope) => {
	_text($scope["#text/0"], $scope.name);
	$input_name__OR__input_write($scope);
});
const $write$1 = /*@__PURE__*/ _const("write", $input_name__OR__input_write);
const $input = ($scope, input) => {
	$name($scope, input.name);
	$write$1($scope, input.write);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "D l", $setup$1, $input);

// template.marko
const $template = "<button id=outer>Toggle Outer</button><button id=middle>Toggle Middle</button><button id=inner>Toggle Inner</button><pre></pre><!><!>";
const $walks = " b b b b%c";
const $if_content3__write = /*@__PURE__*/ _closure_get("write", ($scope) => $write$1($scope["#childScope/0"], $scope._._._.write), ($scope) => $scope._._._);
const $if_content3__setup = ($scope) => {
	$if_content3__write($scope);
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$name($scope["#childScope/0"], "Inner");
};
const $if_content2__if = /*@__PURE__*/ _if("#text/1", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $if_content3__setup);
const $if_content2__showInner = /*@__PURE__*/ _closure_get("showInner", ($scope) => $if_content2__if($scope, $scope._._.showInner ? 0 : 1), ($scope) => $scope._._);
const $if_content2__setup = ($scope) => {
	$if_content2__showInner($scope);
	$if_content2__write($scope);
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$name($scope["#childScope/0"], "Middle");
};
const $if_content2__write = /*@__PURE__*/ _closure_get("write", ($scope) => $write$1($scope["#childScope/0"], $scope._._.write), ($scope) => $scope._._);
const $if_content__if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `<div>${_w0}<!></div>`)($template$1), /*@__PURE__*/ ((_w0) => `D/${_w0}&%l`)("D l"), $if_content2__setup);
const $if_content__showMiddle = /*@__PURE__*/ _if_closure("#text/4", 0, ($scope) => $if_content__if($scope, $scope._.showMiddle ? 0 : 1));
const $if_content__setup = ($scope) => {
	$if_content__showMiddle._($scope);
	$if_content__write._($scope);
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$name($scope["#childScope/0"], "Outer");
};
const $if_content__write = /*@__PURE__*/ _if_closure("#text/4", 0, ($scope) => $write$1($scope["#childScope/0"], $scope._.write));
const $if = /*@__PURE__*/ _if("#text/4", /*@__PURE__*/ ((_w0) => `<div>${_w0}<!></div>`)($template$1), /*@__PURE__*/ ((_w0) => `D/${_w0}&%l`)("D l"), $if_content__setup);
const $showOuter__script = _script("__tests__/template.marko_0_showOuter", ($scope) => _on($scope["#button/0"], "click", function() {
	$showOuter($scope, !$scope.showOuter);
}));
const $showOuter = /*@__PURE__*/ _let("showOuter/5", ($scope) => {
	$if($scope, $scope.showOuter ? 0 : 1);
	$showOuter__script($scope);
});
const $showMiddle__script = _script("__tests__/template.marko_0_showMiddle", ($scope) => _on($scope["#button/1"], "click", function() {
	$showMiddle($scope, !$scope.showMiddle);
}));
const $showMiddle = /*@__PURE__*/ _let("showMiddle/6", ($scope) => {
	$if_content__showMiddle($scope);
	$showMiddle__script($scope);
});
const $showInner__closure = /*@__PURE__*/ _closure($if_content2__showInner);
const $showInner__script = _script("__tests__/template.marko_0_showInner", ($scope) => _on($scope["#button/2"], "click", function() {
	$showInner($scope, !$scope.showInner);
}));
const $showInner = /*@__PURE__*/ _let("showInner/7", ($scope) => {
	$showInner__closure($scope);
	$showInner__script($scope);
});
const $write2 = /*@__PURE__*/ _const("write");
function $setup($scope) {
	$showOuter($scope, true);
	$showMiddle($scope, true);
	$showInner($scope, true);
	$write2($scope, $write($scope));
}
function $write($scope) {
	return function(msg) {
		_el_read($scope["#pre/3"]).innerHTML += "\n" + msg;
	};
}
_resume("__tests__/template.marko_0/write", $write);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
