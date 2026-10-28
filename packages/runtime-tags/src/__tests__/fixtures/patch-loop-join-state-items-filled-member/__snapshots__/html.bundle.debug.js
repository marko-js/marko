// tags/child.marko
const $template$1 = "<!><!><!><button class=t>t</button>";
const $walks$1 = "b%b%b b";
const $setup$1 = [[], ["__tests__/tags/child.marko_0"]];
_shells({
	"__tests__/tags/child.marko": "__tests__/tags/child.marko !__tests__/tags/child.marko_0;b%b%b ;<!><!><!><button class=t>t</button>",
	"__tests__/tags/child.marko_1*shell": "__tests__/tags/child.marko_1*shell;D ;<p> </p>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_items = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let open = true;
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 1) && _unfilled_if($scope0_reason, 0) && _patch_write($scope1_id, "PatchMarkedWrite:item", item, !_server_guard($scope0_reason, 1));
		_html(`<p>${_text_resume($scope1_id, "#text/0", input.a + item, void 0, $scope0_reason, 0)}</p>`);
		(_filled_guard($scope0_reason, 2) && !$cg__input_items || _filled_guard($scope0_reason, 1)) && _patch_join_init($scope1_id, "__tests__/tags/child.marko_1_input_a#0:6_item#2/init", $scope0_reason, 0, _filled_guard($scope0_reason, 2) && ">input_a", _filled_guard($scope0_reason, 1) && "item");
		_scope($scope1_id, {
			item: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && item,
			_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id)
		}, "__tests__/tags/child.marko", "2:2", { item: "2:6" });
	}, 0, $scope0_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/tags/child.marko_1*shell", $scope0_reason, 1);
	_if(() => {
		if (open) {
			const $scope2_id = _scope_id();
			_html(`<div></div>${_el_resume($scope2_id, "#div/0")}`);
			_script($scope2_id, "__tests__/tags/child.marko_2_input_a#0:6");
			_scope($scope2_id, {}, "__tests__/tags/child.marko", "5:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_html(`<button class=t>t</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill1", open, 1);
	_scope($scope0_id, {
		input_a: input.a,
		open
	}, "__tests__/tags/child.marko", 0, {
		input_a: ["input.a"],
		open: "1:6"
	}) || _filled_guard($scope0_reason, 2) && ($cg__input_items ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0/unpatched", input.a) : _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0", input.a, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=l>l</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks$1, $walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks$1, $walks$1)};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=l>l</button>`)($template$1, $template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let list = ["p", "q"];
	_set_scope_reason(14 | _mask_group($scope0_reason, 1) << 5);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	child_default({
		a: input.a,
		items: list
	});
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 1) << 5);
	const $childScope2 = _patch_child($scope0_id, "#childScope/1", 1);
	child_default({
		a: input.a,
		items: input.items
	});
	_patch_child_end();
	_html(`<button class=l>l</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		list,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { list: "1:6" });
}, 1);
