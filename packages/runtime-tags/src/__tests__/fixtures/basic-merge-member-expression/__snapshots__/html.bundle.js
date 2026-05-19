// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let foo = {};
	const { class: fooClass } = foo;
	_html(`<div${_attr_class(foo.class)}></div>${_el_resume($scope0_id, "a")}<div${_attr_class(foo.class)}></div>${_el_resume($scope0_id, "b")}<button>Click</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
