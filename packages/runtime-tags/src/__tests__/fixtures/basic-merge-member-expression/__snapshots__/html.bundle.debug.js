// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let foo = {};
	const { class: fooClass } = foo;
	_html(`<div${_attr_class((foo, foo.class))}></div>${_el_resume($scope0_id, "#div/0")}<div${_attr_class((foo, foo.class))}></div>${_el_resume($scope0_id, "#div/1")}<button>Click</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
