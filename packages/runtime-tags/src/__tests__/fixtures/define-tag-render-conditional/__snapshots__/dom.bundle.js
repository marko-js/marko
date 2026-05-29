// total: 6172 (min) 2824 (brotli)
// template.marko: 271 (min) 193 (brotli)
const $MyTag_content__walks = "Db%l", $MyTag_content__template = "<div>Hello <!></div>";
const $MyTag_content__value = ($scope, value) => _text($scope.a, value);
const $if_content__x = /* @__PURE__ */ _if_closure(0, 0, ($scope) => $MyTag_content__value($scope.a, $scope._.e));
const $if = /* @__PURE__ */ _if(0, /* @__PURE__ */ ((_w0) => `<!>${_w0}<!>`)($MyTag_content__template), /* @__PURE__ */ ((_w0) => `b/${_w0}&b`)($MyTag_content__walks), $if_content__x);
const $show = /* @__PURE__ */ _let(3, ($scope) => $if($scope, $scope.d ? 0 : 1));
const $x__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$x($scope, $scope.e + 1);
	$show($scope, true);
}));
const $x = /* @__PURE__ */ _let(4, ($scope) => {
	_text($scope.c, $scope.e);
	$if_content__x($scope);
	$x__script($scope);
});
