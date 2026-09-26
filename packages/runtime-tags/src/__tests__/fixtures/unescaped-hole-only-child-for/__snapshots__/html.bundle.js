// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let list = [];
	_html("<div><span>before</span>");
	_for_of(list, (x) => {
		const $scope1_id = _scope_id();
		_html(_html_resume($scope1_id, "a", x));
		_scope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 1);
	_html(`<span>after</span></div><button class=add>add</button>${_el_resume($scope0_id, "b")}<button class=clear>clear</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { d: list });
}, 1);
