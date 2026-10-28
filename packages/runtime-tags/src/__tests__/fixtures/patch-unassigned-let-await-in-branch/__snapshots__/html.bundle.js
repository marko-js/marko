// tags/label.marko
const $template = "<span> </span>";
const $setup$1 = [[], []];
_shells({ b: "b;D ;<span> </span>" });
var label_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", typeof input.onHide, 1, $scope0_reason, 0)}</span>`);
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&%c`)("D l")};${((_w0) => `${_w0}<!><!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 1), $wi__input_promise = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let show = input.show;
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	label_default({ onHide: function() {
		show = false;
	} });
	_patch_child_end();
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", input.promise, (value) => {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "a", value, $wg__input_promise)}</em>`);
				$wi__input_promise && _scope($scope2_id, {});
			}, $wg__input_promise, 0);
			_scope($scope1_id, { _: $wi__input_promise && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b");
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va1", show, 1);
	_scope($scope0_id, {
		f: input.promise,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va0", input.promise, !_server_guard($scope0_reason, 1));
}, 1);
