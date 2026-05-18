// total: 7375 (min) 3083 (brotli)
// tags/child.marko: 62 (min) 53 (brotli)
const $valueChange2__script = _script("b1", ($scope) => $scope.d(2));
const $rest__script = _script("b0", ($scope) => _attrs_script($scope, "a"));

// template.marko: 162 (min) 111 (brotli)
const $child_content__value = /* @__PURE__ */ _closure_get(1, ($scope) => _text($scope.a, $scope._.b));
const $child_content__setup = $child_content__value;
const $child_content = _content_resume("a1", " ", " b", $child_content__setup);
const $value__closure = /* @__PURE__ */ _closure($child_content__value);
const $value = /* @__PURE__ */ _let(1, $value__closure);
function $valueChange($scope) {
	return (_new_value) => {
		$value($scope, _new_value);
	};
}
_resume("a0", $valueChange);
