// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, { a: attrTag({}) }, 0, 0, $wg__input_content);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	child_default({ content: _content("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>hi ${_text_resume($scope1_id, "a", n, 2)}</em>`);
		_subscribe($n__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0");
	}, $scope0_id) });
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		d: n,
		e: $n__closures
	});
}, 1);
