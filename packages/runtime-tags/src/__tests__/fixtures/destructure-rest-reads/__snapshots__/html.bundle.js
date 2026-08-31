// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let list = [
		1,
		2,
		3
	];
	const [first, ...rest] = list;
	const [, ...[second, third]] = list;
	const copy = rest;
	_html(`<div>${_text_resume($scope0_id, "a", first)}|${_text_resume($scope0_id, "b", rest[0], 2)}|${_text_resume($scope0_id, "c", rest[1], 2)}|${_text_resume($scope0_id, "d", rest.length, 2)}</div><div>${_text_resume($scope0_id, "e", second)}|${_text_resume($scope0_id, "f", third, 2)}</div><div>${_text_resume($scope0_id, "g", copy[0])}|${_text_resume($scope0_id, "h", copy.length, 2)}</div><button>update</button>${_el_resume($scope0_id, "i")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
