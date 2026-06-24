// tags/child.marko
const $template = "<div><!> a</div><span><!> a</span><p><!> a</p>";
const $walks = "D%lD%lD%l";
const $setup = () => {};
const $input_name__OR__input_write__script = _script("b0", ($scope) => {
	$scope.g(`${$scope.f} mounted`);
	$signal($scope, 0).onabort = () => {
		$scope.g(`${$scope.f} destroyed`);
	};
});
const $input_name__OR__input_write = /*@__PURE__*/ _or(7, ($scope) => {
	$signalReset($scope, 0);
	$input_name__OR__input_write__script($scope);
});
const $name = /*@__PURE__*/ _const(5, ($scope) => {
	_text($scope.a, $scope.f);
	_text($scope.b, $scope.f);
	_text($scope.c, $scope.f);
	$input_name__OR__input_write($scope);
});
const $write$1 = /*@__PURE__*/ _const(6, $input_name__OR__input_write);

// template.marko
const $if_content3__write = /*@__PURE__*/ _closure_get(8, ($scope) => $write$1($scope.a, $scope._._._.i), ($scope) => $scope._._._);
const $if_content3__setup = ($scope) => {
	$if_content3__write($scope);
	/* @__PURE__ */ $setup($scope.a);
	$name($scope.a, "Inner");
};
const $if_content2__if = /*@__PURE__*/ _if(1, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $if_content3__setup);
const $if_content2__showInner = /*@__PURE__*/ _closure_get(7, ($scope) => $if_content2__if($scope, $scope._._.h ? 0 : 1), ($scope) => $scope._._);
const $if_content2__setup = ($scope) => {
	$if_content2__showInner($scope);
	$if_content2__write($scope);
	/* @__PURE__ */ $setup($scope.a);
	$name($scope.a, "Middle");
};
const $if_content2__write = /*@__PURE__*/ _closure_get(8, ($scope) => $write$1($scope.a, $scope._._.i), ($scope) => $scope._._);
const $if_content__if = /*@__PURE__*/ _if(1, /*@__PURE__*/ ((_w0) => `<div>${_w0}<!></div>`)($template), /*@__PURE__*/ ((_w0) => `D/${_w0}&%l`)($walks), $if_content2__setup);
const $if_content__showMiddle = /*@__PURE__*/ _if_closure(4, 0, ($scope) => $if_content__if($scope, $scope._.g ? 0 : 1));
const $if_content__setup = ($scope) => {
	$if_content__showMiddle._($scope);
	$if_content__write._($scope);
	/* @__PURE__ */ $setup($scope.a);
	$name($scope.a, "Outer");
};
const $if_content__write = /*@__PURE__*/ _if_closure(4, 0, ($scope) => $write$1($scope.a, $scope._.i));
const $if = /*@__PURE__*/ _if(4, /*@__PURE__*/ ((_w0) => `<div>${_w0}<!></div>`)($template), /*@__PURE__*/ ((_w0) => `D/${_w0}&%l`)($walks), $if_content__setup);
const $showOuter__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$showOuter($scope, !$scope.f);
}));
const $showOuter = /*@__PURE__*/ _let(5, ($scope) => {
	$if($scope, $scope.f ? 0 : 1);
	$showOuter__script($scope);
});
const $showMiddle__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$showMiddle($scope, !$scope.g);
}));
const $showMiddle = /*@__PURE__*/ _let(6, ($scope) => {
	$if_content__showMiddle($scope);
	$showMiddle__script($scope);
});
const $showInner__closure = /*@__PURE__*/ _closure($if_content2__showInner);
const $showInner__script = _script("a1", ($scope) => _on($scope.c, "click", function() {
	$showInner($scope, !$scope.h);
}));
const $showInner = /*@__PURE__*/ _let(7, ($scope) => {
	$showInner__closure($scope);
	$showInner__script($scope);
});
function $write($scope) {
	return function(msg) {
		$scope.d.innerHTML += "\n" + msg;
	};
}
_resume("a0", $write);
