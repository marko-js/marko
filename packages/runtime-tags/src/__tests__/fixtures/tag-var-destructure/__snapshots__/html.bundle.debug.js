// template.marko
function noop(_) {}
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let a = 0;
	let b = 0;
	let c = {};
	let d = 0;
	let e = [];
	let unused = 0;
	_html(`<button><pre>a    1    ${_text_resume($scope0_id, "#text/1", a, 2)}</pre><pre>b    2    ${_text_resume($scope0_id, "#text/2", b, 2)}</pre><pre>c  {c:4}  ${_text_resume($scope0_id, "#text/3", JSON.stringify(c), 2)}</pre><pre>d    7    ${_text_resume($scope0_id, "#text/4", d, 2)}</pre><pre>f   [9]   ${_text_resume($scope0_id, "#text/5", JSON.stringify(e), 2)}</pre></button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
