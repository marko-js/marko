// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	_html(`<div>${_text_resume($scope0_id, "a", JSON.stringify({
		foo: 1,
		bar: 2
	}))}</div><button>${_text_resume($scope0_id, "c", x)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { d: x });
}, 1);
