// tags/item.marko
const $template = "<p> </p><p> </p>";
const $walks = "D lD l";
const $setup$1 = [[], []];
_shells({ b: "b;D lD ;<p> </p><p> </p>" });
var item_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_n__OR__input_i = _unfilled_if($scope0_reason, 0), $fg__input_n = _filled_guard($scope0_reason, 1), $fg__input_i = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<p>${_text_mark($scope0_id, "a", input.n + $global$1.a, 1, (2 | _updates_from($scope0_reason, 1)) << 1, 0)}</p><p>${_text_mark($scope0_id, "b", input.i + input.n + $global$1.a, 1, (2 | _updates_from($scope0_reason, 0)) << 1, 0)}</p>`);
	_fill_global_subscribe("b0", $scope0_id, _client_guard($scope0_reason, 1));
	_fill_global_subscribe("b1", $scope0_id, _client_guard($scope0_reason, 0));
	_patch_render($scope0_id, "b2", (($fg__input_n ? " e" : "") + ($fg__input_i ? " f" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		e: $ui__input_n__OR__input_i && input.n,
		f: $ui__input_n__OR__input_i && input.i
	}) || ($fg__input_n && $ui__input_n__OR__input_i && _patch_write($scope0_id, "xe", input.n, !_server_guard($scope0_reason, 1)), $fg__input_i && $ui__input_n__OR__input_i && _patch_write($scope0_id, "xf", input.i, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&`)($walks)};${((_w0) => `<button class=inc>+</button>${_w0}`)($template)}` });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=inc>+</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(10);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	item_default({
		n,
		i: 1
	});
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		c: n,
		b: _existing_scope($childScope)
	});
}, 1);
