// tags/child.marko
const $template = "<b>child</b>";
const $setup = [[], []];
_shells({ b: "b,<b>child</b>" });
var child_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<b>child</b>");
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a0: /*@__PURE__*/ (() => `a0${_shell_marker(_shell_setup([[], []], ["a>", $setup], ["b>", $setup]))};${/*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)("b", "b")};${/*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template, $template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _patch_child($scope1_id, "a", 0);
			child_default({});
			_patch_child_end();
			const $childScope2 = _patch_child($scope1_id, "b", 1);
			child_default({});
			_patch_child_end();
			_scope($scope1_id, {
				a: _existing_scope($childScope),
				b: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a0"], $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
