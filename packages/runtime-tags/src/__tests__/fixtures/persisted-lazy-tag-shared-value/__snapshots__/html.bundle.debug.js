// child.marko
const $template$1 = "<b>t</b><!><!>";
const $walks$1 = " b%c";
_shells({ "__tests__/child.marko": "__tests__/child.marko !__tests__/child.marko_0; b%;<b>t</b><!><!>" });
var child_default = _template_persisted("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<b>t</b>${_el_resume($scope0_id, "#b/0")}`);
	if ($scope0_page) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html("<i>open</i>");
			_scope($scope1_id, {}, "__tests__/child.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 1, 0, 1);
	_script($scope0_id, "__tests__/child.marko_0");
	_patch_value($scope0_id, "__tests__/child.marko0", open, 1);
	$scope0_page ? _scope($scope0_id, {
		input_item: input.item,
		open
	}, "__tests__/child.marko", 0, {
		input_item: ["input.item"],
		open: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "input_item", input.item);
}, 0, 0);

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko", [{
	type: "on-click",
	selector: "body"
}], 1);
const $template = "<button> </button><!><!>";
const $walks = " D l%/&c";
_shells({ "__tests__/template.marko": "__tests__/template.marko __tests__/template.marko_0_#text#2/init!__tests__/template.marko_0; D l%/&;<button> </button><!><!>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const item = { label: input.label };
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_serialize_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/3", $childScope);
	$Child_withLoadAssets({ item });
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		item,
		count,
		"#childScope/3": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		item: "3:8",
		count: "4:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "item", item);
}, 1, () => [$Child_withLoadAssets]);
