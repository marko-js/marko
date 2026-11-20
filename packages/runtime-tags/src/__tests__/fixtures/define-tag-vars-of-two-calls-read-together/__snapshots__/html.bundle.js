// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Child = { content: _content("a0", (input) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		let x = false;
		_html(`<button>t</button>${_el_mark($scope1_id, "a")}`);
		const $return = "off";
		_script($scope1_id, "a1");
		_scope($scope1_id, { b: x });
		return $return;
	}, $scope0_id) };
	const $childScope = _peek_scope_id();
	let v = Child.content({});
	_var($scope0_id, "b", $childScope, "a2");
	const $childScope2 = _peek_scope_id();
	let w = Child.content({});
	_var($scope0_id, "d", $childScope2, "a3");
	_html(`<p>${_text_mark($scope0_id, "e", v + w)}</p>`);
	_scope($scope0_id, {
		f: v,
		g: w,
		a: _existing_scope($childScope),
		c: _existing_scope($childScope2)
	});
}, 1);
