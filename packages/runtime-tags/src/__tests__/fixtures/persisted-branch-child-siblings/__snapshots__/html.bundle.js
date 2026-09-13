// tags/child.marko
const $template = "<b>child</b>";
_shells({ b: "b,<b>child</b>" });
var child_default = _template_persisted("b", (input) => {
	_persisted_reason();
	_scope_id();
	_html("<b>child</b>");
}, 0, 0);

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)("b", "b"), /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template, $template))
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope);
			child_default({});
			const $childScope2 = _peek_scope_id();
			_patch_child($scope1_id, "b", $childScope2);
			child_default({});
			_scope($scope1_id, {
				a: _existing_scope($childScope),
				b: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"], $scope0_owned, 0);
	$scope0_reason && _scope($scope0_id, {});
}, 1, () => [child_default]);
