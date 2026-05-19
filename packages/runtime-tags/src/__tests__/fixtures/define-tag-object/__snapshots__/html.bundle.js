// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	const myObj = {
		foo: 1,
		bar: x + 1
	};
	_html(`<div>${_escape(JSON.stringify(myObj))}${_el_resume($scope0_id, "a")}</div><button>${_escape(x)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { d: x });
	_resume_branch($scope0_id);
}, 1);
