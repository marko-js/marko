// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = "5";
	let seen = "";
	_html(`<button id=post>post</button>${_el_resume($scope0_id, "#button/0")}<button id=pre>pre</button>${_el_resume($scope0_id, "#button/1")}<button id=dec>dec</button>${_el_resume($scope0_id, "#button/2")}<div>${_text_resume($scope0_id, "#text/3", x)}:${_text_resume($scope0_id, "#text/4", seen, 2)}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { x }, "__tests__/template.marko", 0, { x: "1:6" });
}, 1);
