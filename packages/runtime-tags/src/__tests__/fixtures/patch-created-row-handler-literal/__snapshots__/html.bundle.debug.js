// tags/row.marko
const $template$1 = "<li><span> </span><button>Pick</button></li>";
const $walks$1 = "E l l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/row.marko": "__tests__/tags/row.marko;E l ;<li><span> </span><button>Pick</button></li>" });
var row_default = _template("__tests__/tags/row.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<li><span>${_text_resume($scope0_id, "#text/0", input.item.name, void 0, $scope0_reason, 0)}</span><button>Pick</button>${_el_resume($scope0_id, "#button/1")}</li>`);
	_script($scope0_id, "__tests__/tags/row.marko_0_input_onPick#6", 1, _filled_guard($scope0_reason, 1), "input_onPick");
	_scope($scope0_id, { input_onPick: input.onPick }, "__tests__/tags/row.marko", 0, { input_onPick: ["input.onPick"] }) || _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_onPick", input.onPick, !_server_guard($scope0_reason, 1));
});

// template.marko
const $template = "<output> </output><ul></ul>";
const $walks = "D l b";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;D l ;<output> </output><ul></ul>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let selected = -1;
	_html(`<output>${_text_resume($scope0_id, "#text/0", selected)}</output><ul>`);
	_for_of(input.items, (item, i) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 0) && _patch_write($scope1_id, "PatchWrite:i", i, !_server_guard($scope0_reason, 0));
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | ($scope0_page ? 3 : 0) << 3);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		row_default({
			item,
			onPick: _resume(function() {
				selected = selected + i + 10;
			}, "__tests__/template.marko_1/onPick", $scope1_id)
		});
		_patch_child_end();
		_scope($scope1_id, {
			i,
			_: _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "4:4", { i: "4:14" });
	}, "id", $scope0_id, "#ul/1", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	_html(`</ul>${_el_resume($scope0_id, "#ul/1")}`);
	_scope($scope0_id, { selected }, "__tests__/template.marko", 0, { selected: "1:6" });
}, 1);
