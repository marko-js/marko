// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Card = { content: _content("a0", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__input_body = _write_guard($scope1_reason, 1), $wg__title = _write_guard($scope1_reason, 2);
		const { title, ...rest } = input;
		_html(`<h1>${_text_resume($scope1_id, "a", title, $wg__title)}</h1><p>${_text_resume($scope1_id, "b", input.body, $wg__input_body)}</p>`);
		_write_if($scope1_reason, 0) && _scope($scope1_id, {});
	}, $scope0_id) };
	let t = "a";
	_set_scope_reason(34);
	const $childScope = _peek_scope_id();
	Card.content({
		title: t,
		body: "static"
	});
	_html(`<button></button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		c: t,
		a: _existing_scope($childScope)
	});
}, 1);
