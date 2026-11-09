// template.marko
_shells({
	a0: "a0; ; ",
	a: "a !a2;b%b D ;<!><!><button> </button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $fg__input_label = _filled_guard($scope0_reason, 2), $fg__input_on = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_dynamic_tag($scope0_id, "a", input.on ? "section" : "article", { class: input.label }, 1, _content("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(_text_mark($scope1_id, "a", input.label, 2, $scope0_reason, 2));
		$cg__input_label && _patch_render($scope1_id, "a1");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }), $cg__input_label && "a1");
	}, $scope0_id, 0), 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
	_html(`<button>${_text_mark($scope0_id, "c", count)}</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	$fg__input_label && _client_guard($scope0_reason, 0) && _patch_subscribers($scope0_id, "a3", "g");
	_patch_render($scope0_id, "a4", [$fg__input_on && "f", $fg__input_label && "g"], $scope0_reason, 0);
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.on,
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.label,
		i: count,
		j: _write_if($scope0_reason, 2) && $input_label__closures
	}) || ($fg__input_on && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xf", input.on, !_server_guard($scope0_reason, 1)), $fg__input_label && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xg", input.label, !_server_guard($scope0_reason, 2)));
}, 1);
