// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let list = [
		1,
		2,
		3
	];
	_html(`<div>${_text_resume($scope0_id, "a", list[0])}|${_text_resume($scope0_id, "b", list[1], 2)}</div><button>update</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {});
}, 1);
