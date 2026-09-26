// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const html = n > 0 ? "<i>big</i>" : "<b>small</b>";
	_html(`<div>${_html_resume($scope0_id, "#text/0", html)}</div><p>${_html_resume($scope0_id, "#text/1", n > 0 ? "<i>big</i>" : "<b>small</b>")}</p><button>${_text_resume($scope0_id, "#text/3", n)}</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { n }, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
