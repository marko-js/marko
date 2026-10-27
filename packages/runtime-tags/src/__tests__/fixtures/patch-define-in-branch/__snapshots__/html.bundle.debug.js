// template.marko
const $row_content__walks = "D%c%l";
const $row_content__template = "<li><!>: <!></li>";
const $template = "<ul></ul>";
const $walks = " b";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !; ;<ul></ul>",
	"__tests__/template.marko_2*shell": /*@__PURE__*/ (() => `__tests__/template.marko_2*shell >#childScope/0> >#childScope/1>;${/*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)($row_content__walks, $row_content__walks)};${/*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($row_content__template, $row_content__template)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_suffix = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_suffix__closures = new Set();
	const row = { content: _content("__tests__/template.marko_1*content", (label) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<li>${_patch_text($scope1_id, "#text/0", label, void 0, $scope1_reason, 0)}: ${_patch_text($scope1_id, "#text/1", input.suffix, 2, $scope0_reason, 1)}</li>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, $cg__input_suffix ? "__tests__/template.marko_1_input_suffix#0:3/init" : "__tests__/template.marko_1_input_suffix#0:3/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_suffix__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), $cg__input_suffix && "__tests__/template.marko_1_input_suffix#0:3/subscribe");
	}, $scope0_id) };
	_html("<ul>");
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _patch_child($scope2_id, "#childScope/0", 0, void 0, $scope0_id);
			row.content("a");
			_patch_child_end();
			_set_scope_reason(0);
			const $childScope2 = _patch_child($scope2_id, "#childScope/1", 1, void 0, $scope0_id);
			row.content("b");
			_patch_child_end();
			_scope($scope2_id, {
				_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope),
				"#childScope/1": _existing_scope($childScope2)
			}, "__tests__/template.marko", "5:4");
			return 0;
		}
	}, $scope0_id, "#ul/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 2);
	_html(`</ul>${_el_resume($scope0_id, "#ul/0", $wg__input_show)}`);
	_scope($scope0_id, {
		input_suffix: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && input.suffix,
		"ClosureScopes:input_suffix/5": _write_if($scope0_reason, 1) && $input_suffix__closures
	}, "__tests__/template.marko", 0, { input_suffix: ["input.suffix"] }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.suffix, !_server_guard($scope0_reason, 1));
}, 1);
