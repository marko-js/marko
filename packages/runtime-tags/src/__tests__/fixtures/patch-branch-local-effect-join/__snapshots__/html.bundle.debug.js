// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({
	"__tests__/tags/child.marko": "__tests__/tags/child.marko !;b%;<!><!><!>",
	"__tests__/tags/child.marko_1*shell": "__tests__/tags/child.marko_1*shell;D l ;<p> </p><div></div>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 2), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const c = input.b + "!";
			_filled_guard($scope0_reason, 3) && _patch_write($scope1_id, "PatchWrite:c", c, !_server_guard($scope0_reason, 3));
			_html(`<p>${_patch_text($scope1_id, "#text/0", input.a + c, void 0, $scope0_reason, 1)}</p><div></div>${_el_resume($scope1_id, "#div/1")}`);
			_script($scope1_id, "__tests__/tags/child.marko_1_c#2", 1, _client_guard($scope0_reason, 3));
			_server_guard($scope0_reason, 3) && _patch_effect($scope1_id, "PatchEffect:__tests__/tags/child.marko_1_c#2", "c");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "__tests__/tags/child.marko_1_input_b#0:4/init");
			_patch_join_init($scope1_id, "__tests__/tags/child.marko_1_input_a#0:5_c#2/init", $scope0_reason, 1);
			_scope($scope1_id, {
				c,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
			}, "__tests__/tags/child.marko", "1:2", { c: "2:10" });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/tags/child.marko_1*shell"], $scope0_reason, 2);
	_filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 2) ? _patch_value($scope0_id, "PatchValue:__tests__/tags/child.marko_fill1/unpatched", input.a) : _patch_write($scope0_id, "PatchWrite:input_a", input.a, !(_filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 3)));
	$scope0_page ? _scope($scope0_id, {
		input_b: _write_if($scope0_reason, 2) && input.b,
		input_a: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.a
	}, "__tests__/tags/child.marko", 0, {
		input_b: ["input.b"],
		input_a: ["input.a"]
	}) : _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "PatchValue:__tests__/tags/child.marko_fill0", input.b, !_server_guard($scope0_reason, 3));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko;${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 4) << 5 | _mask_group($scope0_reason, 3) << 7 | _mask_group($scope0_reason, 2) << 9);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	child_default({
		a: input.y,
		b: input.x,
		show: input.show
	});
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
