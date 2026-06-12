// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const [first, ...rest] = [
		1,
		2,
		3
	];
	_html(`<div>${_escape(first)}${_el_resume($scope0_id, "a")}|<!>${_escape(rest[0])}${_el_resume($scope0_id, "b")}|<!>${_escape(rest[1])}${_el_resume($scope0_id, "c")}|<!>${_escape(rest.length)}${_el_resume($scope0_id, "d")}</div><button>update</button>${_el_resume($scope0_id, "e")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
