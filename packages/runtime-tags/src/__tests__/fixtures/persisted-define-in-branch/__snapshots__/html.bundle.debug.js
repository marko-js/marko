// template.marko
const $row_content__walks = "D%c%l", $row_content__template = "<li><!>: <!></li>";
const $template = "<ul></ul>";
const $walks = " b";
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D%c%;<li><!>: <!></li>",
	"__tests__/template.marko": "__tests__/template.marko; ;<ul></ul>",
	"__tests__/template.marko_2*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_2*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)($row_content__walks, $row_content__walks), /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($row_content__template, $row_content__template))
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_suffix__closures = new Set();
	const row = { content: _content_elide("__tests__/template.marko_1*content", (label) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _persisted_reason();
		_html(`<li>${_patch_text($scope1_id, "#text/0", label)}: ${_patch_text($scope1_id, "#text/1", input.suffix, 2, $scope0_owned, 1)}</li>`);
		_subscribe(_unfilled_if($scope0_owned, 1) && $input_suffix__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"));
	}, $scope0_id) };
	_html("<ul>");
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_set_serialize_reason(0);
			const $childScope = _peek_scope_id();
			_patch_child($scope2_id, "#childScope/0", $childScope);
			row.content("a");
			_set_serialize_reason(0);
			const $childScope2 = _peek_scope_id();
			_patch_child($scope2_id, "#childScope/1", $childScope2);
			row.content("b");
			_scope($scope2_id, {
				"#childScope/0": _existing_scope($childScope),
				"#childScope/1": _existing_scope($childScope2)
			}, "__tests__/template.marko", "5:4");
			return 0;
		}
	}, $scope0_id, "#ul/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope0_owned, 2);
	_html(`</ul>${_el_resume($scope0_id, "#ul/0", $sg__input_show)}`);
	$scope0_reason && _scope($scope0_id, { "ClosureScopes:input_suffix": $input_suffix__closures }, "__tests__/template.marko", 0);
}, 1, 1);
