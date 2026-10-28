// tags/label.marko
const $template$1 = "<span> </span>";
const $setup$1 = [[], []];
_shells({ b: "b;D ;<span> </span>" });
var label_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", typeof input.onHide, 1, $scope0_reason, 0)}</span>`);
	_scope($scope0_id, {});
});

// tags/show-value.marko
const $template = "<em> </em>";
const $setup = [[], []];
_shells({ c: "c;D ;<em> </em>" });
var show_value_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "a", input.value, 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a2: /*@__PURE__*/ (() => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup$1], ["b>", $setup]))};${/*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)("D l", "D l")};${/*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template$1, $template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_v = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let y = input.v;
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			label_default({ onHide: function() {
				y = "z";
			} });
			_patch_child_end();
			_set_scope_reason(2);
			const $childScope2 = _peek_scope_id($scope1_id, "b", 1);
			show_value_default({ value: y });
			_patch_child_end();
			$cg__input_v && _patch_init($scope1_id, "a0");
			!$cg__input_v && _patch_fill($scope1_id, "va1", y, 1);
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope),
				b: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a2"], $scope0_reason, 0);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.v }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va3", input.v, !_server_guard($scope0_reason, 1));
}, 1);
