// tags/panel.marko
const $template = "<!><!><!>";
function boom(error) {
	throw error;
}
_shells({
	b0: "b0;D ;<p> </p>",
	b: "b !;b%;<!><!><!>"
});
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0), $wi__input_error = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_error__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_patch_text($scope2_id, "a", input.error ? boom(input.error) : "ok", void 0, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, "b5");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_error__closures, _scope($scope2_id, { _: $wi__input_error && _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 1) && "b6");
	}, void 0, (err) => {
		_scope_reason();
		const $scope1_id = _scope_id();
		let n = 0;
		const text = `${input.label}: ${err.message}`;
		_html(`<button class=inc>${_patch_text($scope1_id, "b", text, void 0, $scope0_reason, 0)} ${_text_resume($scope1_id, "c", n, 2)}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "b1");
		_patch_write($scope1_id, "wf", err?.message, 1);
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "b2");
		_patch_value($scope1_id, "vb3", n, 1);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, {
			f: $wi__input_label && err?.message,
			h: n,
			_: _scope_with_id($scope0_id)
		}), _client_guard($scope0_reason, 0) && "b4");
	}, void 0, "b7", "b0", 1, "");
	$scope0_page ? _scope($scope0_id, {
		d: input.label,
		f: $wi__input_label && $input_label__closures,
		g: $wi__input_error && _unfilled_if($scope0_reason, 1) && $input_error__closures
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "vb8", input.label, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a0;${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button class=rename>rename</button>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let label = "label";
	_html(`<button class=rename>rename</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(2 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "b");
	panel_default({
		label,
		error: input.error
	});
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "va1", label, 1);
	$scope0_page && _scope($scope0_id, {
		f: label,
		b: _existing_scope($childScope)
	});
}, 1);
