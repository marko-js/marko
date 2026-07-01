// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let outer = true;
	let inner = false;
	_html(`<button id=o>outer</button>${_el_resume($scope0_id, "a")}<button id=i>inner</button>${_el_resume($scope0_id, "b")}`);
	_show_start(outer, 1);
	_html("before ");
	_show_start(inner);
	_html("<em>nested</em>");
	_show_end($scope0_id, "e", inner, 1, 1, 0, 1);
	_html(" after");
	_show_end($scope0_id, "f", outer);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		g: outer,
		h: inner
	});
	_resume_branch($scope0_id);
}, 1);
