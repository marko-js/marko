// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button id=inc>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	const Heading = { content: _content("a1", (input) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_dynamic_tag($scope1_id, "a", input.type, {}, _content_resume("a0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_dynamic_tag($scope2_id, "a", input.content, {}, 0, 0, 0);
		}, $scope1_id, ($scope) => [{ e: input.content }]), 0, 0);
	}, $scope0_id) };
	Heading.content({
		type: "h1",
		content: _content("a2", () => {
			_scope_reason();
			_scope_id();
			_html("static content: not registered");
		}, $scope0_id)
	});
	Heading.content({
		type: "h2",
		content: _content("a3", () => {
			_scope_reason();
			_scope_id();
			_html("also static: not registered");
		}, $scope0_id)
	});
	_script($scope0_id, "a4");
	_scope($scope0_id, { e: count });
}, 1);
