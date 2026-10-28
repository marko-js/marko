// tags/child.marko
const $template$1 = "<div></div><!><!>";
const $walks$1 = " b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/child.marko": "__tests__/tags/child.marko; b%;<div></div><!><!>",
	"__tests__/tags/child.marko_1*shell": "__tests__/tags/child.marko_1*shell;D ;<p> </p>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_items = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<div></div>${_el_resume($scope0_id, "#div/0")}`);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 2) && _unfilled_if($scope0_reason, 0) && _patch_write($scope1_id, "PatchMarkedWrite:item", item, !_server_guard($scope0_reason, 2));
		const d = input.b + item;
		_html(`<p>${_text_resume($scope1_id, "#text/0", d, void 0, $scope0_reason, 0)}</p>`);
		(_filled_guard($scope0_reason, 1) && !$cg__input_items || _filled_guard($scope0_reason, 2)) && _patch_join_init($scope1_id, "__tests__/tags/child.marko_1_input_b#0:4_item#2/init", $scope0_reason, 0, _filled_guard($scope0_reason, 1) && ">input_b", _filled_guard($scope0_reason, 2) && "item");
		_scope($scope1_id, {
			item: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && item,
			_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
		}, "__tests__/tags/child.marko", "3:2", { item: "3:6" });
	}, 0, $scope0_id, "#text/1", 1, void 0, void 0, void 0, void 0, "__tests__/tags/child.marko_1*shell", $scope0_reason, 2);
	_script($scope0_id, "__tests__/tags/child.marko_0_input_b#4", 1, _filled_guard($scope0_reason, 1), "input_b");
	_scope($scope0_id, { input_b: input.b }, "__tests__/tags/child.marko", 0, { input_b: ["input.b"] }) || _filled_guard($scope0_reason, 1) && ($cg__input_items ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0/unpatched", input.b) : _patch_write($scope0_id, "PatchMarkedWrite:input_b", input.b, !_server_guard($scope0_reason, 1)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button class=l>l</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}& b`)($walks$1)};${((_w0) => `${_w0}<button class=l>l</button>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let list = ["p", "q"];
	_set_scope_reason(38 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	child_default({
		b: input.b,
		items: list
	});
	_patch_child_end();
	_html(`<button class=l>l</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		list,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { list: "1:6" });
}, 1);
