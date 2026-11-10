// template.marko
_shells({
	a0: "a0 !a1",
	a: "a !a3;b%b D ;<!><!><button> </button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_show__OR__input_label = _unfilled_if($scope0_reason, 0), $ui__input_label = _unfilled_if($scope0_reason, 2), $ui__input_show = _unfilled_if($scope0_reason, 1), $fg__input_show = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let n = 0;
	const Content = { content: _content_resume("a0", ({ label }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		let count = 0;
		_html(`<em>${_text_mark($scope1_id, "b", label, 1, 4, 0)} ${_text_mark($scope1_id, "c", count, 2)}</em>${_el_mark($scope1_id, "a")}`);
		_script($scope1_id, "a1");
		_patch_fill($scope1_id, "va2", count, 1);
		_scope($scope1_id, { g: count });
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "a", input.show ? Content : "span", { label: input.label }, 1, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
	_html(`<button>${_text_mark($scope0_id, "c", n)}</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	_patch_render($scope0_id, "a4", (($fg__input_show ? " f" : "") + ($fg__input_label ? " g" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		f: ($ui__input_label || $ui__input_show__OR__input_label) && input.show,
		g: ($ui__input_show || $ui__input_show__OR__input_label) && input.label,
		h: n,
		i: $ui__input_show__OR__input_label && Content
	}) || ($fg__input_show && $ui__input_label && _patch_write($scope0_id, "xf", input.show, !_server_guard($scope0_reason, 1)), $fg__input_label && $ui__input_show && _patch_write($scope0_id, "xg", input.label, !_server_guard($scope0_reason, 2)));
}, 1);
