// child.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
const $setup = [[], ["a0"]];
_shells({ a: "a !a0; D%c%;<button><!>:<!></button>" });
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_mark($scope0_id, "b", input.label, 1, $scope0_reason, 0)}:${_text_mark($scope0_id, "c", count, 2)}</button>${_el_mark($scope0_id, "a")}`);
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
	b3: `b3${_shell_marker([[], []], [">b>", [[""], []]], [">b>", _shell_setup([[], []], ["b>", $setup])])};${/*@__PURE__*/ ((_w0) => `D l/${_w0}&b`)($Lazy_content__walks)};${/*@__PURE__*/ ((_w0) => `<b> </b>${_w0}<!>`)($Lazy_content__template)}`,
	b4: "b4;D ;<p> </p>",
	b: "b;b%;<!><!><!>"
});
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 0);
	_any_client_guard($scope0_reason);
	const $cg__input_error = _client_guard($scope0_reason, 1), $wi__input_error = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_error__closures = /* @__PURE__ */ new Set();
	const Lazy = { content: _content("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
		const $childScope = _peek_scope_id($scope1_id, "b", 0);
		$Child_withLoadAssets({ label: input.label });
		_patch_child_end();
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "b1", $cg__input_label);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			b: _existing_scope($childScope)
		}), $cg__input_label && "b1", 0);
		_resume_branch($scope1_id);
	}, $scope0_id) };
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_mark($scope2_id, "a", input.error ? boom(input.error) : "ok", 1, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "b2", $cg__input_error);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_error__closures, _scope($scope2_id, { _: $wi__input_error && _scope_with_id($scope0_id) }), $cg__input_error && "b2");
	}, void 0, (err) => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html(`<b>${_text_mark($scope3_id, "a", err.message, 1, 4, 0)}</b>`);
		const $childScope2 = _peek_scope_id($scope3_id, "b", 1, 0, $scope0_id);
		Lazy.content({});
		_patch_child_end();
		_scope($scope3_id, {
			_: _scope_with_id($scope0_id),
			b: _existing_scope($childScope2)
		});
	}, 0, "b3", "b4", 1, 1, 1);
	_scope($scope0_id, {
		d: input.label,
		f: _write_if($scope0_reason, 0) && $input_label__closures,
		g: $wi__input_error && _unfilled_if($scope0_reason, 1) && $input_error__closures
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.label, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "b5", "d");
}, 1);
