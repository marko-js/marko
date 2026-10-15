// tags/menu.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({
	"__tests__/tags/menu.marko": "__tests__/tags/menu.marko;b%;<!><!><!>",
	"__tests__/tags/menu.marko_1*shell": "__tests__/tags/menu.marko_1*shell;b%;<!><!><!>"
});
var menu_default = _template("__tests__/tags/menu.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_for_of(input.item, (it) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", it, {}, 0, 0, $wg__input_item, void 0, 2, $scope0_reason, 0);
		_write_if($scope0_reason, 0) && _scope($scope1_id, {}, "__tests__/tags/menu.marko", "1:2");
	}, 0, $scope0_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/tags/menu.marko_1*shell", $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/menu.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<p> </p>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&D l`)("b%c");
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content !__tests__/template.marko_1_x_name#4 __tests__/template.marko_1; D l ;<button> </button><span></span>",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !;${((_w0) => `b/${_w0}&D l`)("b%c")};${((_w0) => `<!>${_w0}<p> </p>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let picked = "none";
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	let $item;
	forOf(input.items, (x) => {
		$item = attrTags($item, { content: _content_elide("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_patch_write($scope1_id, "PatchWrite:x_name", x?.name);
			_html(`<button${_patch_attr_class($scope1_id, "PatchAttr:#button/0 class", "b" + x.id)}>${_patch_text($scope1_id, "#text/1", x.name)}</button>${_el_resume($scope1_id, "#button/0")}<span></span>${_el_resume($scope1_id, "#span/2")}`);
			_script($scope1_id, "__tests__/template.marko_1_x_name#4", void 0, 0);
			_script($scope1_id, "__tests__/template.marko_1");
			_patch_effect($scope1_id, "PatchEffect:__tests__/template.marko_1_x_name#4", "x_name");
			_scope($scope1_id, {
				x_name: x?.name,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "4:6", { x_name: 0 });
		}, $scope0_id) });
	});
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	menu_default({ item: $item });
	_html(`<p>${_text_resume($scope0_id, "#text/1", picked)}</p>`);
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", picked, 1);
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
