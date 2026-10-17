// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({
	"__tests__/tags/child.marko": "__tests__/tags/child.marko;b%;<!><!><!>",
	"__tests__/tags/child.marko_1*shell": "__tests__/tags/child.marko_1*shell;D l ;<p> </p><div></div>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 1) && _patch_write($scope1_id, "PatchWrite:item", item, !_server_guard($scope0_reason, 1));
		_html(`<p>${_patch_text($scope1_id, "#text/0", input.a + item, void 0, $scope0_reason, 0)}</p><div></div>${_el_resume($scope1_id, "#div/1")}`);
		_script($scope1_id, "__tests__/tags/child.marko_1_item#3", 1, _client_guard($scope0_reason, 1));
		_server_guard($scope0_reason, 1) && _patch_effect($scope1_id, "PatchEffect:__tests__/tags/child.marko_1_item#3", "item");
		(_filled_guard($scope0_reason, 2) && !_client_guard($scope0_reason, 1) || _filled_guard($scope0_reason, 1)) && _patch_join_init($scope1_id, "__tests__/tags/child.marko_1_input_a#0:4_item#3/init", $scope0_reason, 0);
		_scope($scope1_id, {
			item,
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
		}, "__tests__/tags/child.marko", "1:2", { item: "1:6" });
	}, 0, $scope0_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/tags/child.marko_1*shell", $scope0_reason, 1);
	_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) ? _patch_value($scope0_id, "PatchValue:__tests__/tags/child.marko_fill0/unpatched", input.a) : _patch_write($scope0_id, "PatchWrite:input_a", input.a, !(_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1)));
	$scope0_page && _scope($scope0_id, { input_a: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.a }, "__tests__/tags/child.marko", 0, { input_a: ["input.a"] });
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko;${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 1) << 5);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	child_default({
		a: input.y,
		items: input.items
	});
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
