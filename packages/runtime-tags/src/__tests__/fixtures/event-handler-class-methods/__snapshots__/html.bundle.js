// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const obj = { go: _resume(function() {}, "a0") };
	let n = 1;
	_html(`<button id=a>a <!>${_escape(n)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<button id=b>b</button>${_el_resume($scope0_id, "c")}<button id=c>c</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	_script($scope0_id, "a3");
	writeScope($scope0_id, {
		f: obj.go,
		g: n
	});
	_resume_branch($scope0_id);
}, 1);
