// tags/navlist.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/navlist.marko": "__tests__/tags/navlist.marko;b%;<!><!><!>",
	"__tests__/tags/navlist.marko_1*shell": "__tests__/tags/navlist.marko_1*shell; D ;<a class=link> </a>"
});
var navlist_default = _template("__tests__/tags/navlist.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_items = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 1) && _unfilled_if($scope0_reason, 0) && _patch_write($scope1_id, "PatchMarkedWrite:item_href", item?.href, !_server_guard($scope0_reason, 1));
		const active = item.href === input.path;
		_html(`<a${_attr_class(["link", { active }], $scope1_id, "#a/0", $scope0_reason, 0)}${_attr("href", item.href, $scope1_id, "#a/0", $scope0_reason, 1)}>${_text_resume($scope1_id, "#text/1", item.label, void 0, $scope0_reason, 1)}</a>${_el_resume($scope1_id, "#a/0", _mask_group($scope0_reason, 0) || _mask_group($scope0_reason, 1))}`);
		(_filled_guard($scope0_reason, 2) && !$cg__input_items || _filled_guard($scope0_reason, 1)) && _patch_join_init($scope1_id, "__tests__/tags/navlist.marko_1_input_path#0:4_item_href#4/init", $scope0_reason, 0, _filled_guard($scope0_reason, 2) && ">input_path", _filled_guard($scope0_reason, 1) && "item_href");
		_scope($scope1_id, {
			item_href: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && item?.href,
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
		}, "__tests__/tags/navlist.marko", "1:2", { item_href: ["item.href", "1:6"] });
	}, 0, $scope0_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/tags/navlist.marko_1*shell", $scope0_reason, 1);
	_filled_guard($scope0_reason, 2) && $cg__input_items ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/navlist.marko_fill0/unpatched", input.path) : $cg__input_items && _patch_write($scope0_id, "PatchMarkedWrite:input_path", input.path, 1);
	_scope($scope0_id, { input_path: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.path }, "__tests__/tags/navlist.marko", 0, { input_path: ["input.path"] });
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button class=p>p</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)("b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}& b`)("b%c")};${((_w0) => `<!>${_w0}<button class=p>p</button>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let path = "/a";
	_set_scope_reason(38 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	navlist_default({
		items: input.items,
		path
	});
	_patch_child_end();
	_html(`<button class=p>p</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		path,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { path: "1:6" });
}, 1);
