// child.marko
const $template$1 = "<button><!>:<!></button>";
const $walks$1 = " D%c%l";
const $setup$1 = [[], ["a0"]];
_shells({ a: "a !a0; D%c%;<button><!>:<!></button>" });
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", input.label, 1, $scope0_reason, 0)}:${_text_resume($scope0_id, "c", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_patch_fill($scope0_id, "va1", count, 1);
	_scope($scope0_id, { g: count });
});

// tags/wrapper.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1);
const $Child_withLoadAssets = withLoadAssets(() => child_default, "a", flush, "_a");
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({ c: /*@__PURE__*/ (() => `c${_shell_marker($setup)};${((_w0) => `b%b/${_w0}&b`)($walks$1)};${((_w0) => `<!><!>${_w0}<!>`)($template$1)}`)() });
var wrapper_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	$Child_withLoadAssets({ label: input.label });
	_patch_child_end();
	_scope($scope0_id, { b: _existing_scope($childScope) });
});

// template.marko
function boom(error) {
	throw error;
}
_shells({
	b5: "b5;D ;<p> </p>",
	b4: /*@__PURE__*/ (() => `b4${_shell_marker(_shell_setup([["b1"], []], ["b>", $setup]))};${/*@__PURE__*/ ((_w0) => `D l/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `<b> </b>${_w0}<!>`)($template)}`)(),
	b: "b !;b%;<!><!><!>"
});
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_error = _client_guard($scope0_reason, 1), $wi__input_error = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_error__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_resume($scope2_id, "a", input.error ? boom(input.error) : "ok", 1, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_error ? "b2" : "b3");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_error__closures, _scope($scope2_id, { _: $wi__input_error && _scope_with_id($scope0_id) }), $cg__input_error && "b3");
	}, void 0, (err) => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<b>${_text_resume($scope1_id, "a", err.message, 1, 4, 0)}</b>`);
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope = _peek_scope_id($scope1_id, "b", 0);
		wrapper_default({ label: input.label });
		_patch_child_end();
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "b0");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			b: _existing_scope($childScope)
		}), "b1");
	}, 0, "b4", "b5", 1, 1, 1);
	_scope($scope0_id, {
		d: input.label,
		f: _write_if($scope0_reason, 0) && $input_label__closures,
		g: $wi__input_error && _unfilled_if($scope0_reason, 1) && $input_error__closures
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb6", input.label, !_server_guard($scope0_reason, 0));
}, 1);
