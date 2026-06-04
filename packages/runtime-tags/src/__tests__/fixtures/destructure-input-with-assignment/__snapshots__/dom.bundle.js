// total: 7320 (min) 3059 (brotli)
// tags/child.marko: 62 (min) 53 (brotli)
const $valueChange2__script = _script("b1", ($scope) => $scope.d(2));
const $rest__script = _script("b0", ($scope) => _attrs_script($scope, "a"));

// template.marko: 154 (min) 106 (brotli)
const $child_content__value = /* @__PURE__ */ _closure_get(1, ($scope) => _text($scope.a, $scope._.b));
const $child_content = _content_resume("a1", " ", " b", $child_content__value);
const $value = /* @__PURE__ */ _let(1, /* @__PURE__ */ _closure($child_content__value));
function $valueChange($scope) {
	return (_new_value) => {
		$value($scope, _new_value);
	};
}
_resume("a0", $valueChange);
