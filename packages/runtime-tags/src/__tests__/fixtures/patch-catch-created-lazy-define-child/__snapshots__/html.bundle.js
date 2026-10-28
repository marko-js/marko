// child.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
const $setup = [[], ["a0"]];
_shells({ a: "a !a0; D%c%;<button><!>:<!></button>" });
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", input.label, void 0, $scope0_reason, 0)}:${_text_resume($scope0_id, "c", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_patch_fill($scope0_id, "va1", count, 1);
	_scope($scope0_id, { g: count });
});

// template.marko
const $Lazy_content__walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks);
const $Lazy_content__template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template);
function boom(error) {
	throw error;
}
const $Child_withLoadAssets = withLoadAssets(() => child_default, "a", flush, "_a");
_shells({
	b5: /*@__PURE__*/ (() => `b5${_shell_marker(_shell_setup([[], []], [">b>", [[""], []]], [">b>", _shell_setup([["b2"], []], ["b>", $setup])]))};${/*@__PURE__*/ ((_w0) => `D l/${_w0}&b`)($Lazy_content__walks)};${/*@__PURE__*/ ((_w0) => `<b> </b>${_w0}<!>`)($Lazy_content__template)}`)(),
	b6: "b6;D ;<p> </p>",
	b: "b !;b%;<!><!><!>"
});
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_error = _client_guard($scope0_reason, 1), $wi__input_error = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_error__closures = /* @__PURE__ */ new Set();
	const Lazy = { content: _content("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope = _patch_child($scope1_id, "b", 0);
		$Child_withLoadAssets({ label: input.label });
		_patch_child_end();
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "b1");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			b: _existing_scope($childScope)
		}), "b2");
	}, $scope0_id) };
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_resume($scope2_id, "a", input.error ? boom(input.error) : "ok", void 0, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_error ? "b3" : "b4");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_error__closures, _scope($scope2_id, { _: $wi__input_error && _scope_with_id($scope0_id) }), $cg__input_error && "b4");
	}, void 0, (err) => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html(`<b>${_text_resume($scope3_id, "a", err.message, void 0, 4, 0)}</b>`);
		const $childScope2 = _patch_child($scope3_id, "b", 1, void 0, $scope0_id);
		Lazy.content({});
		_patch_child_end();
		_scope($scope3_id, {
			_: _scope_with_id($scope0_id),
			b: _existing_scope($childScope2)
		});
	}, void 0, "b5", "b6", 1, 1, 1);
	_scope($scope0_id, {
		d: input.label,
		f: _write_if($scope0_reason, 0) && $input_label__closures,
		g: $wi__input_error && _unfilled_if($scope0_reason, 1) && $input_error__closures
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb7", input.label, !_server_guard($scope0_reason, 0));
}, 1);
