// tags/menu.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/menu.marko": "__tests__/tags/menu.marko;b%;<!><!><!>",
	"__tests__/tags/menu.marko_1*shell": "__tests__/tags/menu.marko_1*shell;b%;<!><!><!>"
});
var menu_default = _template("__tests__/tags/menu.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, (it) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", it, {}, 2, 0, 0, $wg__input_item, $scope0_reason, 0);
		_write_if($scope0_reason, 0) && _scope($scope1_id, {}, "__tests__/tags/menu.marko", "1:2");
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/tags/menu.marko_1*shell", $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/tags/menu.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<p> </p>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&D l`)("b%c");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content !__tests__/template.marko_1; D l ;<button> </button><span></span>",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&D l`)("b%c")};${((_w0) => `<!>${_w0}<p> </p>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let picked = "none";
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	let $item;
	forOf(input.items, (x) => {
		$item = attrTags($item, { content: _content("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_patch_write($scope1_id, "PatchMarkedWrite:x_name", x?.name);
			_html(`<button${_attr_class("b" + x.id, $scope1_id, "PatchAttr:#button/0 class")}>${_text_resume($scope1_id, "#text/1", x.name, 1, 4, 0)}</button>${_el_resume($scope1_id, "#button/0")}<span></span>${_el_resume($scope1_id, "#span/2")}`);
			_script($scope1_id, "__tests__/template.marko_1_x_name#4", 1, 1, "x_name");
			_script($scope1_id, "__tests__/template.marko_1");
			_scope($scope1_id, {
				x_name: x?.name,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "4:6", { x_name: 0 });
		}, $scope0_id, 1) });
	});
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	menu_default({ item: $item });
	_patch_child_end();
	_html(`<p>${_text_resume($scope0_id, "#text/1", picked)}</p>`);
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
