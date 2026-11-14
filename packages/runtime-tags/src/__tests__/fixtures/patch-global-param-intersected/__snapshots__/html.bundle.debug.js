// tags/item.marko
const $template$1 = "<p> </p><p> </p>";
const $walks$1 = "D lD l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/item.marko": "__tests__/tags/item.marko;D lD ;<p> </p><p> </p>" });
var item_default = _template("__tests__/tags/item.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_n__OR__input_i = _unfilled_if($scope0_reason, 0), $fg__input_n = _filled_guard($scope0_reason, 1), $fg__input_i = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<p>${_text_mark($scope0_id, "#text/0", input.n + $global$1.a, 1, (2 | _updates_from($scope0_reason, 1)) << 1, 0)}</p><p>${_text_mark($scope0_id, "#text/1", input.i + input.n + $global$1.a, 1, (2 | _updates_from($scope0_reason, 0)) << 1, 0)}</p>`);
	_fill_global_subscribe("__tests__/tags/item.marko_0_input_n#4_$global_a#6", $scope0_id, _client_guard($scope0_reason, 1));
	_fill_global_subscribe("__tests__/tags/item.marko_0_input_n#4_input_i#5_$global_a#6", $scope0_id, _client_guard($scope0_reason, 0));
	_patch_render($scope0_id, "__tests__/tags/item.marko_0_input_n#4_input_i#5/setup", (($fg__input_n ? " input_n" : "") + ($fg__input_i ? " input_i" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		input_n: $ui__input_n__OR__input_i && input.n,
		input_i: $ui__input_n__OR__input_i && input.i
	}, "__tests__/tags/item.marko", 0, {
		input_n: ["input.n"],
		input_i: ["input.i"]
	}) || ($fg__input_n && $ui__input_n__OR__input_i && _patch_write($scope0_id, "PatchMarkedWrite:input_n", input.n, !_server_guard($scope0_reason, 1)), $fg__input_i && $ui__input_n__OR__input_i && _patch_write($scope0_id, "PatchMarkedWrite:input_i", input.i, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=inc>+</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b/${_w0}&`)($walks$1)};${((_w0) => `<button class=inc>+</button>${_w0}`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=inc>+</button>${_el_mark($scope0_id, "#button/0")}`);
	_set_scope_reason(10);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	item_default({
		n,
		i: 1
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
