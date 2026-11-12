// tags/child.marko
const $template = "<p> </p><!><!><!>";
const $walks = "D l%b%c";
function boom(msg) {
	throw new Error(msg);
}
const $setup$1 = [[], []];
_shells({
	b9: "b9;D ;<p> </p>",
	b8: "b8;D%c%c%;<b><!> <!> <!></b>",
	b4: "b4;D ;<p> </p>",
	b3: "b3;D%c%c%;<b><!> <!> <!></b>",
	b: "b;D l%b%;<p> </p><!><!><!>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1), $cg__input_early = _client_guard($scope0_reason, 2), $cg__input_late = _client_guard($scope0_reason, 3), $wi__input_label = _write_if($scope0_reason, 1), $wi__input_early = _write_if($scope0_reason, 2), $wi__input_late = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_early__closures = /* @__PURE__ */ new Set();
	const $input_late__closures = /* @__PURE__ */ new Set();
	const $global$1 = $global();
	_html(`<p>${_text_mark($scope0_id, "a", input.n, 1, $scope0_reason, 0)}</p>`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_mark($scope2_id, "a", input.early ? boom("early") : "ok", 1, $scope0_reason, 2)}</p>`);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "b2", $cg__input_early);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_early__closures, _scope($scope2_id, { _: $wi__input_early && _scope_with_id($scope0_id) }), $cg__input_early && "b2");
	}, void 0, (err) => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<b>${_text_mark($scope1_id, "a", $global$1.label, 1, 4, 0)} ${_text_mark($scope1_id, "b", input.label, 2, $scope0_reason, 1)} ${_text_mark($scope1_id, "c", err.message, 2, 4, 0)}</b>`);
		_any_client_guard($scope0_reason) && _fill_global_subscribe("b0", $scope1_id);
		_any_client_guard($scope0_reason) && _patch_render($scope1_id, "b0");
		_any_client_guard($scope0_reason) && _unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "b1", $cg__input_label);
		_subscribe(_any_client_guard($scope0_reason) && _unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _any_client_guard($scope0_reason) && $cg__input_label && "b1");
	}, 0, "b3", "b4", 1, 1, 1);
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope4_id = _scope_id();
		_html(`<p>${_text_mark($scope4_id, "a", input.late ? boom("late") : "ok", 1, $scope0_reason, 3)}</p>`);
		_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope4_id, "b7", $cg__input_late);
		_subscribe(_unfilled_if($scope0_reason, 3) && $input_late__closures, _scope($scope4_id, { _: $wi__input_late && _scope_with_id($scope0_id) }), $cg__input_late && "b7");
	}, void 0, (err) => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html(`<b>${_text_mark($scope3_id, "a", $global$1.label, 1, 4, 0)} ${_text_mark($scope3_id, "b", input.label, 2, $scope0_reason, 1)} ${_text_mark($scope3_id, "c", err.message, 2, 4, 0)}</b>`);
		_any_client_guard($scope0_reason) && _fill_global_subscribe("b5", $scope3_id);
		_any_client_guard($scope0_reason) && _patch_render($scope3_id, "b5");
		_any_client_guard($scope0_reason) && _unfilled_if($scope0_reason, 1) && _patch_subscribe($scope3_id, "b6", $cg__input_label);
		_subscribe(_any_client_guard($scope0_reason) && _unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope3_id, {
			_: _scope_with_id($scope0_id),
			Cj: $wi__input_label && 1
		}), _any_client_guard($scope0_reason) && $cg__input_label && "b6");
	}, 0, "b8", "b9", 1, 1, 1);
	_scope($scope0_id, {
		g: input.label,
		j: $wi__input_label && $input_label__closures,
		k: $wi__input_early && _unfilled_if($scope0_reason, 2) && $input_early__closures,
		l: $wi__input_late && _unfilled_if($scope0_reason, 3) && $input_late__closures
	}) || _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xg", input.label, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "b10", "g");
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["c>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => ` D l/${_w0}&b`)($walks)};${((_w0) => `<button> </button>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_mark($scope0_id, "b", n)}</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(2 | (_updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 0) << 7));
	const $childScope = _peek_scope_id($scope0_id, "c", 0);
	child_default({
		n,
		early: true,
		late: input.late,
		label: input.label
	});
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		h: n,
		c: _existing_scope($childScope)
	});
}, 1);
