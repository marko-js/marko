// tags/label.marko
const $template = "<button> </button>";
const $walks = " D l";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0; D ;<button> </button>" });
var label_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button>${_text_resume($scope0_id, "b", input.label, 1, $scope0_reason, 1)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { e: input.onHide }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "we", input.onHide, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&%c`)($walks)};${((_w0) => `${_w0}<!><!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let x = input.v;
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	label_default({
		label: "hide",
		onHide: _resume(function() {
			x = "";
		}, "a0", $scope0_id)
	});
	_patch_child_end();
	_if(() => {
		if (x) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", input.promise, (value) => {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "a", value, $wg__input_promise)}</em>`);
				_write_if($scope0_reason, 1) && _scope($scope2_id, {});
			}, $wg__input_promise, 0);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_scope($scope0_id, {
		f: input.promise,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va1", input.promise, !_server_guard($scope0_reason, 1));
}, 1);
