// tags/panel.marko
const $template = "<!><!><!>";
function boom(error) {
	throw error;
}
const $setup$1 = [[], []];
_shells({
	b6: "b6;D ;<p> </p>",
	b5: "b5 !b0",
	b: "b;b%;<!><!><!>"
});
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 0), $cg__input_error = _client_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 0), $wi__input_error = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_error__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_mark($scope2_id, "a", input.error ? boom(input.error) : "ok", 1, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "b4", $cg__input_error);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_error__closures, _scope($scope2_id, { _: $wi__input_error && _scope_with_id($scope0_id) }), $cg__input_error && "b4");
	}, void 0, (err) => {
		_scope_reason();
		const $scope1_id = _scope_id();
		$cg__input_label && _patch_write($scope1_id, "xf", err?.message);
		let n = 0;
		const text = `${input.label}: ${err.message}`;
		_html(`<button class=inc>${_text_mark($scope1_id, "b", text, 1, (2 | _updates_from($scope0_reason, 0)) << 1, 0)} ${_text_mark($scope1_id, "c", n, 2)}</button>${_el_mark($scope1_id, "a")}`);
		_script($scope1_id, "b0");
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "b1");
		_patch_render($scope1_id, "b2", [_filled_guard($scope0_reason, 0) && ">d", "f"], (2 | _updates_from($scope0_reason, 0)) << 1, 0);
		_patch_fill($scope1_id, "vb3", n, 1);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, {
			f: _unfilled_if($scope0_reason, 0) && err?.message,
			h: n,
			_: _scope_with_id($scope0_id)
		}), $cg__input_label && "b1");
	}, 0, "b5", "b6", 1, 1, 1);
	$fg__input_label && _patch_subscribers($scope0_id, "b7", "d");
	_scope($scope0_id, {
		d: input.label,
		f: _write_if($scope0_reason, 0) && $input_label__closures,
		g: $wi__input_error && _unfilled_if($scope0_reason, 1) && $input_error__closures
	}) || $fg__input_label && _patch_write($scope0_id, "xd", input.label, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button class=rename>rename</button>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let label = "label";
	_html(`<button class=rename>rename</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(2 | _updates_from($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	panel_default({
		label,
		error: input.error
	});
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: label,
		b: _existing_scope($childScope)
	});
}, 1);
