// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let clicks = 0;
	_html(`<button>Clicked ${_text_mark($scope0_id, "b", clicks, 2)} times</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { c: clicks });
}, 1);
