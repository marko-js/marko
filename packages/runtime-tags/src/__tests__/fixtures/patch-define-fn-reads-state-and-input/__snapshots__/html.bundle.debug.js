// template.marko
const $Row_content__walks = "D l";
const $Row_content__template = "<p> </p>";
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>+</button>`)($Row_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)($Row_content__walks);
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `/${_w0}& b`)($Row_content__walks)};${((_w0) => `${_w0}<button>+</button>`)($Row_content__template)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $fg__input_x = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	const Row = { content: _content("__tests__/template.marko_1*content", ({ fn, label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $fg__fn = _filled_guard($scope1_reason, 1), $fg__label = _filled_guard($scope1_reason, 2);
		_html(`<p>${_text_mark($scope1_id, "#text/0", fn() + label, 1, $scope1_reason, 0)}</p>`);
		_patch_render($scope1_id, "__tests__/template.marko_1_fn#3_label#4/setup", (($fg__fn ? " fn" : "") + ($fg__label ? " label" : "")).slice(1), $scope1_reason, 0);
		_scope($scope1_id, {
			fn: _write_if($scope1_reason, 2) && fn,
			label: _write_if($scope1_reason, 1) && label
		}, "__tests__/template.marko", "2:2", {
			fn: "2:15",
			label: "2:19"
		}) || ($fg__fn && _unfilled_if($scope1_reason, 2) && _patch_write($scope1_id, "PatchMarkedWrite:fn", fn, !_server_guard($scope1_reason, 1)), $fg__label && _unfilled_if($scope1_reason, 1) && _patch_write($scope1_id, "PatchMarkedWrite:label", label, !_server_guard($scope1_reason, 2)));
	}, $scope0_id) };
	_set_scope_reason(6 | (($scope0_page ? 3 : 1) << 3 | _updates_from($scope0_reason, 1) << 5));
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	Row.content({
		fn: _resume(() => count + input.x, "__tests__/template.marko_0/fn", $scope0_id),
		label: input.label
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_x#4_count#6/setup", $fg__input_x && "input_x");
	_scope($scope0_id, {
		input_x: input.x,
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_x: ["input.x"],
		count: "1:6"
	}) || $fg__input_x && _patch_write($scope0_id, "PatchMarkedWrite:input_x", input.x, !_server_guard($scope0_reason, 0));
}, 1);
