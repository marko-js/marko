// template.marko
const $Card_content__walks = "D l";
const $Card_content__template = "<p> </p>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)($Card_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%c`)($Card_content__walks);
const $setup = [[], []];
_shells({
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !;${((_w0) => `b/${_w0}&%c`)($Card_content__walks)};${((_w0) => `<!>${_w0}<!><!>`)($Card_content__template)}`)(),
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Card_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Card_content__template)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const Card = { content: _content("__tests__/template.marko_2*content", ({ opts }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $scope2_page = _page_render();
		let o = opts;
		_html(`<p>${_patch_text($scope2_id, "#text/0", o.fn(), void 0, (_mask_group($scope2_reason, 0) & 1) << 1, 0)}</p>`);
		$scope2_page && _scope($scope2_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	Card.content({ opts: _patch_live($childScope, { fn() {
		return "root:" + input.label;
	} }, $scope0_id, "input_label") });
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope2 = _patch_child($scope1_id, "#childScope/0");
			Card.content({ opts: _patch_live($childScope2, { fn() {
				return "if:" + input.label;
			} }, $scope1_id, ">input_label") });
			_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "__tests__/template.marko_1_input_label#0:4/init");
			$scope0_page && _scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope2)
			}, "__tests__/template.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, {
		input_label: _write_if($scope0_reason, 1) && input.label,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] }) : _filled_guard($scope0_reason, 0) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 0));
}, 1);
