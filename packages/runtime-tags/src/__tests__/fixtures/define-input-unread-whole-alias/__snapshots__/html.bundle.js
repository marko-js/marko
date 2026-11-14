// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Card = { content: _content("a0", (input) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const { title, ...rest } = input;
		_html(`<h1>${_text_mark($scope1_id, "a", title)}</h1><p>${_escape(input.body)}</p>`);
		_scope($scope1_id, {});
	}, $scope0_id) };
	let t = "a";
	_set_scope_reason(34);
	const $childScope = _peek_scope_id();
	Card.content({
		title: t,
		body: "static"
	});
	_html(`<button></button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		c: t,
		a: _existing_scope($childScope)
	});
}, 1);
