// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<div${_attr_class({
		"": count % 2,
		odd: count % 2
	})}>x</div>${_el_resume($scope0_id, "a")}<button>b</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { c: count });
	_resume_branch($scope0_id);
}, 1);
