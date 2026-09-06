// template.marko
const $foo_content__walks = "D l%c", $foo_content__template = "<b> </b><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($foo_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($foo_content__walks);
_shells({ "__tests__/template.marko_1*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*content;${_w0};${_w1}`)($foo_content__walks, $foo_content__template) });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_x__closures = new Set();
	const foo = { content: _content_elide("__tests__/template.marko_1*content", (n) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _persisted_reason(), $sg__n = _source_guard($scope1_reason, 0);
		_html(`<b>${_patch_text($scope1_id, "#text/0", input.x, void 0, $scope0_owned, 0)}</b>`);
		_if(() => {
			if (n) {
				const $scope2_id = _scope_id();
				const $childScope = _peek_scope_id();
				_patch_child($scope2_id, "#childScope/0", $childScope);
				foo.content(n - 1);
				_scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"#childScope/0": _existing_scope($childScope)
				}, "__tests__/template.marko", "3:4");
				return 0;
			}
		}, $scope1_id, "#text/1", 1, $sg__n, $sg__n, void 0, void 0, [0]);
		_subscribe(_source_if($scope0_reason, 0) && $input_x__closures, _scope($scope1_id, {
			n,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "1:2", { n: "1:13" }));
	}, $scope0_id) };
	_set_serialize_reason(0);
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope2);
	foo.content(2);
	$scope0_reason && _scope($scope0_id, {
		"ClosureScopes:input_x": $input_x__closures,
		"#childScope/0": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0);
}, 1, 1);
