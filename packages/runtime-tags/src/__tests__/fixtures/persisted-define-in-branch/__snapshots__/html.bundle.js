// template.marko
const $row_content__walks = "D%c%l", $row_content__template = "<li><!>: <!></li>";
_shells({
	a0: "a0;D%c%;<li><!>: <!></li>",
	a: "a; ;<ul></ul>",
	a1: /*@__PURE__*/ ((_w0, _w1) => `a1;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)($row_content__walks, $row_content__walks), /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($row_content__template, $row_content__template))
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_suffix__closures = /* @__PURE__ */ new Set();
	const row = { content: _content_elide("a0", (label) => {
		const $scope1_id = _scope_id();
		_persisted_reason();
		_html(`<li>${_patch_text($scope1_id, "a", label)}: ${_patch_text($scope1_id, "b", input.suffix, 2, $scope0_owned, 1)}</li>`);
		_subscribe(_unfilled_if($scope0_owned, 1) && $input_suffix__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id) };
	_html("<ul>");
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_set_serialize_reason(0);
			const $childScope = _peek_scope_id();
			_patch_child($scope2_id, "a", $childScope);
			row.content("a");
			_set_serialize_reason(0);
			const $childScope2 = _peek_scope_id();
			_patch_child($scope2_id, "b", $childScope2);
			row.content("b");
			_scope($scope2_id, {
				a: _existing_scope($childScope),
				b: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a1"], $scope0_owned, 2);
	_html(`</ul>${_el_resume($scope0_id, "a", $sg__input_show)}`);
	$scope0_reason && _scope($scope0_id, { f: $input_suffix__closures });
}, 1, 1);
