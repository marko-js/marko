// child.marko
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
const $Child_withLoadAssets = withLoadAssets(() => child_default, "a", flush, "_a");
_shells({ b: "b !b0; D lD%;<button class=n> </button><main><!></main>" });
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_show__OR__input_label = _unfilled_if($scope0_reason, 0), $fg__input_show = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=n>${_text_mark($scope0_id, "b", n)}</button>${_el_mark($scope0_id, "a")}<main>`);
	_dynamic_tag($scope0_id, "c", input.show ? $Child_withLoadAssets : null, { label: input.label }, 1, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
	_html("</main>");
	_script($scope0_id, "b0");
	_patch_render($scope0_id, "b1", (($fg__input_show ? " f" : "") + ($fg__input_label ? " g" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 2) && $ui__input_show__OR__input_label && input.show,
		g: _write_if($scope0_reason, 1) && $ui__input_show__OR__input_label && input.label,
		i: n
	}) || ($fg__input_show && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xf", input.show, !_server_guard($scope0_reason, 1)), $fg__input_label && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xg", input.label, !_server_guard($scope0_reason, 2)));
}, 1);
