// template.marko
const $foo_content__walks = "D l%c";
const $foo_content__template = "<b> </b><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($foo_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($foo_content__walks);
_shells({
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko;${((_w0) => `b/${_w0}&b`)($foo_content__walks)};${((_w0) => `<!>${_w0}<!>`)($foo_content__template)}`)(),
	"__tests__/template.marko_2*shell": /*@__PURE__*/ (() => `__tests__/template.marko_2*shell;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($foo_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($foo_content__template)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_x = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_x__closures = new Set();
	const foo = { content: _content("__tests__/template.marko_1*content", (n) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wi__n = _write_if($scope1_reason, 0);
		_html(`<b>${_patch_text($scope1_id, "#text/0", input.x, void 0, $scope0_reason, 0)}</b>`);
		_if(() => {
			if (n) {
				const $scope2_id = _scope_id();
				_set_scope_reason(_mask_group($scope1_reason, 0) << 1);
				const $childScope = _patch_child($scope2_id, "#childScope/0", $scope0_id);
				foo.content(n - 1);
				_scope($scope2_id, {
					_: $wi__n && _scope_with_id($scope1_id),
					"#childScope/0": _existing_scope($childScope)
				}, "__tests__/template.marko", "3:4");
				return 0;
			}
		}, $scope1_id, "#text/1", 1, _write_guard($scope1_reason, 0), void 0, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope1_reason, 0);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, "__tests__/template.marko_1_input_x#0:3/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_x__closures, _scope($scope1_id, { _: ($wi__input_x || $wi__n) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), _client_guard($scope0_reason, 0) && "__tests__/template.marko_1_input_x#0:3/subscribe");
	}, $scope0_id) };
	_set_scope_reason(0);
	const $childScope2 = _patch_child($scope0_id, "#childScope/0");
	foo.content(2);
	_patch_write($scope0_id, "PatchWrite:input_x", input.x, 1);
	$scope0_page && _scope($scope0_id, {
		input_x: input.x,
		"ClosureScopes:input_x/4": $wi__input_x && $input_x__closures,
		"#childScope/0": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { input_x: ["input.x"] });
}, 1);
