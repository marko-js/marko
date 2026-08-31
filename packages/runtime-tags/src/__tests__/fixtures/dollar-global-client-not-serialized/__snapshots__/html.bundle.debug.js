// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let n = 0;
	const derived = $global$1.msg + "!" + n;
	_html(`<div${_attr("id", derived)}>${_text_resume($scope0_id, "#text/1", derived)}</div>${_el_resume($scope0_id, "#div/0")}<p>${_escape($global$1.msg)}</p><button>b</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { n }, "__tests__/template.marko", 0, { n: "1:6" });
	_resume_branch($scope0_id);
}, 1);
