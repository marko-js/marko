// template.marko
const $Panel_content__walks = "D l";
const $Panel_content__template = "<p> </p>";
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<!><button>+</button></main>`)($Panel_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&%b l`)($Panel_content__walks);
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `D/${_w0}&%b l`)($Panel_content__walks)};${((_w0) => `<main>${_w0}<!><button>+</button></main>`)($Panel_content__template)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_title = _updates_from($scope0_reason, 0), $fg__input_title = _filled_guard($scope0_reason, 0), $fg__input_dyn = _filled_guard($scope0_reason, 1), $wi__input_title = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	let n = 0;
	const Panel = { content: _content_resume("__tests__/template.marko_1*content", ({ value }) => {
		const $scope1_id = _scope_id(), $ui__input_title = _unfilled_if($scope0_reason, 0);
		const $scope1_reason = _scope_reason(), $uf__value = _updates_from($scope1_reason, 0), $fg__value = _filled_guard($scope1_reason, 0);
		_html(`<p>${_text_mark($scope1_id, "#text/0", value + input.title, 1, ($uf__input_title | $uf__value) << 1, 0)}</p>`);
		_patch_render($scope1_id, "__tests__/template.marko_1_input_title#0:5_value#3/setup", [_filled_guard($scope0_reason, 0) && ">input_title", $fg__value && "value"], ($uf__input_title | $uf__value) << 1, 0);
		_subscribe(_unfilled_if(($uf__input_title | $uf__value) << 1, 0) && $wi__input_title && $input_title__closures, _scope($scope1_id, {
			value: ($ui__input_title || _unfilled_if($scope1_reason, 0)) && value,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", { value: "2:17" }), _client_guard(($uf__input_title | $uf__value) << 1, 0) && "__tests__/template.marko_1_input_title#0:5/subscribe") || $fg__value && $ui__input_title && _patch_write($scope1_id, "PatchMarkedWrite:value", value, !_server_guard($scope1_reason, 0));
	}, $scope0_id) };
	_html("<main>");
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	Panel.content({ value: "s" });
	_patch_child_end();
	_dynamic_tag($scope0_id, "#text/1", input.dyn ? Panel : null, { value: n }, 8);
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_title && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_title#5/subscribers", "input_title");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_dyn#6_n#7_Panel#8/setup", $fg__input_dyn && "input_dyn");
	_scope($scope0_id, {
		input_title: input.title,
		input_dyn: input.dyn,
		n,
		Panel,
		"ClosureScopes:input_title/10": $wi__input_title && $input_title__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		input_dyn: ["input.dyn"],
		n: "1:6",
		Panel: "2:9"
	}) || ($fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 0)), $fg__input_dyn && _patch_write($scope0_id, "PatchMarkedWrite:input_dyn", input.dyn, !_server_guard($scope0_reason, 1)));
}, 1);
