// tags/child.marko
const $setup = [[], []];
_shells({ b: "b," });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_label__OR__input_count = _unfilled_if($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1), $fg__input_count = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $return = input.label + input.count;
	_patch_render($scope0_id, "b0", (($fg__input_label ? " c" : "") + ($fg__input_count ? " d" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		c: $ui__input_label__OR__input_count && input.label,
		d: $ui__input_label__OR__input_count && input.count
	}) || ($fg__input_label && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xc", input.label, !_server_guard($scope0_reason, 1)), $fg__input_count && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xd", input.count, !_server_guard($scope0_reason, 2)));
	return $return;
});

// template.marko
function boom(message) {
	throw new Error(message);
}
_shells({
	a13: "a13;D ;<p> </p>",
	a12: `a12${_shell_marker([[], []], ["b>", $setup])}`,
	a6: "a6;D ;<p> </p>",
	a5: `a5${_shell_marker([[], []], ["b>", $setup])}`,
	a: "a;b%b%;<!><!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_label = _updates_from($scope0_reason, 1), $cg__input_label = _client_guard($scope0_reason, 1), $cg__input_count = _client_guard($scope0_reason, 2), $cg__input_early = _client_guard($scope0_reason, 3), $uf__input_label__OR__input_count = _updates_from($scope0_reason, 0), $uf__input_count = _updates_from($scope0_reason, 2), $cg__input_late = _client_guard($scope0_reason, 4), $wi__input_label = _write_if($scope0_reason, 1), $wi__input_count = _write_if($scope0_reason, 2), $wi__input_early = _write_if($scope0_reason, 3), $wi__input_late = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_count__closures = /* @__PURE__ */ new Set();
	const $input_early__closures = /* @__PURE__ */ new Set();
	const $input_late__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_mark($scope2_id, "a", input.early ? boom("early") : "ok", 1, $scope0_reason, 3)}</p>`);
		_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope2_id, "a4", $cg__input_early);
		_subscribe(_unfilled_if($scope0_reason, 3) && $input_early__closures, _scope($scope2_id, { _: $wi__input_early && _scope_with_id($scope0_id) }), $cg__input_early && "a4");
	}, void 0, (err) => {
		_scope_reason();
		const $scope1_id = _scope_id(), $ui__input_label__OR__input_count = _unfilled_if($scope0_reason, 0), $ui__input_label = _unfilled_if($scope0_reason, 1);
		$ui__input_label && _patch_write($scope1_id, "xg", err?.message);
		_html(`<b>${_text_mark($scope1_id, "a", input.label + err.message, 1, (2 | $uf__input_label) << 1, 0)}</b>`);
		_set_scope_reason($uf__input_label__OR__input_count << 1 | $uf__input_label << 3 | $uf__input_count << 5);
		const $childScope = _peek_scope_id($scope1_id, "b", 0, $ui__input_label__OR__input_count && 1);
		let text = child_default({
			label: input.label,
			count: input.count
		});
		$ui__input_label__OR__input_count && _var($scope1_id, "c", $childScope, "a0");
		_patch_child_end();
		_html(`<i>${_text_mark($scope1_id, "d", text, 1, $scope0_reason, 0)}</i>`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "a1", $cg__input_label);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "a2", $cg__input_count);
		_patch_render($scope1_id, "a3", "g" + (_filled_guard($scope0_reason, 1) ? " >e" : ""), (2 | $uf__input_label) << 1, 0);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_count__closures, _subscribe($ui__input_label && $input_label__closures, _scope($scope1_id, {
			g: $ui__input_label && err?.message,
			_: _scope_with_id($scope0_id),
			b: _existing_scope($childScope)
		}), $cg__input_label && "a1"), $cg__input_count && "a2");
	}, 0, "a5", "a6", 1, 1, 1);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope4_id = _scope_id();
		_html(`<p>${_text_mark($scope4_id, "a", input.late ? boom("late") : "ok", 1, $scope0_reason, 4)}</p>`);
		_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope4_id, "a11", $cg__input_late);
		_subscribe(_unfilled_if($scope0_reason, 4) && $input_late__closures, _scope($scope4_id, { _: $wi__input_late && _scope_with_id($scope0_id) }), $cg__input_late && "a11");
	}, void 0, (err) => {
		_scope_reason();
		const $scope3_id = _scope_id(), $ui__input_label__OR__input_count2 = _unfilled_if($scope0_reason, 0), $ui__input_label2 = _unfilled_if($scope0_reason, 1);
		$ui__input_label2 && _patch_write($scope3_id, "xg", err?.message);
		_html(`<b>${_text_mark($scope3_id, "a", input.label + err.message, 1, (2 | $uf__input_label) << 1, 0)}</b>`);
		_set_scope_reason($uf__input_label__OR__input_count << 1 | $uf__input_label << 3 | $uf__input_count << 5);
		const $childScope2 = _peek_scope_id($scope3_id, "b", 1, $ui__input_label__OR__input_count2 && 1);
		let text = child_default({
			label: input.label,
			count: input.count
		});
		$ui__input_label__OR__input_count2 && _var($scope3_id, "c", $childScope2, "a7");
		_patch_child_end();
		_html(`<i>${_text_mark($scope3_id, "d", text, 1, $scope0_reason, 0)}</i>`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope3_id, "a8", $cg__input_label);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope3_id, "a9", $cg__input_count);
		_patch_render($scope3_id, "a10", "g" + (_filled_guard($scope0_reason, 1) ? " >e" : ""), (2 | $uf__input_label) << 1, 0);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_count__closures, _subscribe($ui__input_label2 && $input_label__closures, _scope($scope3_id, {
			g: $ui__input_label2 && err?.message,
			_: _scope_with_id($scope0_id),
			b: _existing_scope($childScope2),
			Ci: $wi__input_label && 1,
			Cj: $wi__input_count && 1
		}), $cg__input_label && "a8"), $cg__input_count && "a9");
	}, 0, "a12", "a13", 1, 1, 1);
	_scope($scope0_id, {
		e: input.label,
		f: input.count,
		i: $wi__input_label && $input_label__closures,
		j: $wi__input_count && $input_count__closures,
		k: $wi__input_early && _unfilled_if($scope0_reason, 3) && $input_early__closures,
		l: $wi__input_late && _unfilled_if($scope0_reason, 4) && $input_late__closures
	}) || (_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "a14", "e"), _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "xf", input.count, !_server_guard($scope0_reason, 2)) && _patch_subscribers($scope0_id, "a15", "f"));
}, 1);
