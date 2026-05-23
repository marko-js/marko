// total: 5972 (min) 2749 (brotli)
// tags/test.marko: 0 (min) 1 (brotli)
const $Tag_content__walks = "b%c", $Tag_content__template = "<!><!><!>";
const $template = /* @__PURE__ */ ((_w0) => `<!>${_w0}<!>`)($Tag_content__template);
const $walks = /* @__PURE__ */ ((_w0) => `b/${_w0}&b`)($Tag_content__walks);
const $Tag_content__if = /* @__PURE__ */ _if(0, "<div> </div>", "D l", /* @__PURE__ */ _closure_get(1, ($scope) => _text($scope.a, $scope._._.b), ($scope) => $scope._._));
const $Tag_content__input_x = ($scope, input_x) => $Tag_content__if($scope, input_x ? 0 : 1);
const $count = /* @__PURE__ */ _const(1);
function $setup($scope) {
	$scope.a._ = $scope;
	$Tag_content__input_x($scope.a, 1);
	$count($scope, 123);
}

// template.marko: 133 (min) 109 (brotli)
const $if_content__setup = ($scope) => {
	$setup($scope.a);
};
const $if = /* @__PURE__ */ _if(0, /* @__PURE__ */ ((_w0) => `<!>${_w0}<!>`)($template), /* @__PURE__ */ ((_w0) => `b/${_w0}&b`)($walks), $if_content__setup);
const $m = /* @__PURE__ */ _let(1, ($scope) => $if($scope, $scope.b ? 0 : 1));
const $setup__script = _script("a0", ($scope) => $m($scope, 1));
