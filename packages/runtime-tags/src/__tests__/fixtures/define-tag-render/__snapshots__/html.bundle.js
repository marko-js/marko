// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	({ content: _content("a0", ({ name }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		let y = 1;
		_html(`<div>Hello ${_escape(name)} ${_text_mark($scope1_id, "b", y, 2)}</div><button>${_text_mark($scope1_id, "d", y)}</button>${_el_mark($scope1_id, "c")}`);
		_script($scope1_id, "a1");
		_scope($scope1_id, { h: y });
	}, $scope0_id) }).content({ name: "Ryan" });
}, 1);
