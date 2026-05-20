// total: 6322 (min) 2914 (brotli)
// template.marko: 276 (min) 193 (brotli)
const $MyTag_content__walks = "D l", $MyTag_content__template = "<div> </div>";
const $if_content__setup = ($scope) => {
	$MyTag_content__setup._($scope.a, $scope._);
};
const $MyTag_content__x = /* @__PURE__ */ _closure_get(4, ($scope) => _text($scope.a, $scope._.e));
const $MyTag_content__setup = /* @__PURE__ */ _child_setup($MyTag_content__x);
const $if = /* @__PURE__ */ _if(1, /* @__PURE__ */ ((_w0) => `<!>${_w0}<!>`)($MyTag_content__template), /* @__PURE__ */ ((_w0) => `b/${_w0}&b`)($MyTag_content__walks), $if_content__setup);
const $x__closure = /* @__PURE__ */ _closure($MyTag_content__x);
const $x__script = _script("a1", ($scope) => _on($scope.c, "click", function() {
	$x($scope, $scope.e + 1);
}));
const $x = /* @__PURE__ */ _let(4, ($scope) => {
	_text($scope.d, $scope.e);
	$if($scope, ($scope.e, 0));
	$x__closure($scope);
	$x__script($scope);
});
