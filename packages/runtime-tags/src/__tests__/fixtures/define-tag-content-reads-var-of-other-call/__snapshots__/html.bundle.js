// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $v__closures = /* @__PURE__ */ new Set();
	const Child = { content: _content("a0", (input) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		let x = false;
		_html(`<button>t</button>${_el_mark($scope1_id, "a")}`);
		_if(() => {}, $scope1_id, "b");
		const $return = "off";
		_script($scope1_id, "a1");
		_scope($scope1_id, {
			e: input.content,
			f: x
		});
		return $return;
	}, $scope0_id) };
	const $childScope = _peek_scope_id();
	let v = Child.content({});
	_var($scope0_id, "b", $childScope, "a2");
	Child.content({ content: _content_resume("a4", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html(`<em>${_text_mark($scope3_id, "a", v)}</em>`);
		_subscribe($v__closures, _scope($scope3_id, { _: _scope_with_id($scope0_id) }), "a3");
	}, $scope0_id) });
	_scope($scope0_id, {
		d: v,
		a: _existing_scope($childScope),
		e: $v__closures
	});
}, 1);
