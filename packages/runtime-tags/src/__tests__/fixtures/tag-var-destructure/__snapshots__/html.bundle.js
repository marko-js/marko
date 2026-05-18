// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button><pre>a    1    <!>${_escape(0)}${_el_resume($scope0_id, "b")}</pre><pre>b    2    <!>${_escape(0)}${_el_resume($scope0_id, "c")}</pre><pre>c  {c:4}  <!>${_escape(JSON.stringify({}))}${_el_resume($scope0_id, "d")}</pre><pre>d    7    <!>${_escape(0)}${_el_resume($scope0_id, "e")}</pre><pre>f   [9]   <!>${_escape(JSON.stringify([]))}${_el_resume($scope0_id, "f")}</pre></button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
