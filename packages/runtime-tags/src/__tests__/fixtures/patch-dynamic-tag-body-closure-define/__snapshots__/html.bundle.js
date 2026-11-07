// template.marko
_shells({ a: "a;b%;<!><!><!>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	const Foo = { content: _content_resume("a0", (input) => {
		const $scope1_id = _scope_id(), $scope1_reason = _scope_reason();
		_write_guard($scope1_reason, 0);
		_html(`<button id=open>open</button>${_el_mark($scope1_id, "a")}`);
		_if(() => {}, $scope1_id, "b");
		_script($scope1_id, "a1");
		_scope($scope1_id, { e: input?.content });
	}, $scope0_id) };
	let count = 1;
	_dynamic_tag($scope0_id, "a", Foo, {}, 8, _content_resume("a2", () => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_html(`count ${_text_mark($scope3_id, "a", count, 2)}`);
		_subscribe($count__closures, _scope($scope3_id, { _: _scope_with_id($scope0_id) }), "a3");
	}, $scope0_id));
	_scope($scope0_id, {
		c: Foo,
		e: count,
		f: $count__closures
	});
}, 1);
