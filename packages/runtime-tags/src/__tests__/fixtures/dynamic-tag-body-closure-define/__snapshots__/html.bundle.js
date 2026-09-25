// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Foo = { content: _content("a0", (input) => {
		const $scope1_id = _scope_id();
		_serialize_guard(_scope_reason(), 0);
		_html(`<button id=open>open</button>${_el_resume($scope1_id, "a")}`);
		_if(() => {}, $scope1_id, "b");
		_script($scope1_id, "a1");
		_scope($scope1_id, { e: input?.content });
	}, $scope0_id) };
	let count = 1;
	_dynamic_tag($scope0_id, "a", Foo, {}, _content_resume("a2", () => {
		_scope_id();
		_scope_reason();
		_html(`count ${_escape(count)}`);
	}, $scope0_id, ($scope) => [{ e: count }]), 0, 0);
}, 1);
