// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let outer = true;
	let inner = false;
	_html(`<button id=o>outer</button>${_el_resume($scope0_id, "#button/0")}<button id=i>inner</button>${_el_resume($scope0_id, "#button/1")}`);
	_show_start(outer, 1);
	_html("before ");
	_show_start(inner);
	_html("<em>nested</em>");
	_show_end($scope0_id, "#text/4", inner, 1, 1, 0, 1);
	_html(" after");
	_show_end($scope0_id, "#text/5", outer);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		outer,
		inner
	}, "__tests__/template.marko", 0, {
		outer: "1:6",
		inner: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
