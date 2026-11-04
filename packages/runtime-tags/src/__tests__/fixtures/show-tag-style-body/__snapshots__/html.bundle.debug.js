// v:template.marko.css
var v_template_marko_default = ".a { color: red }";

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let visible = true;
	_html(`<button id=t>t</button>${_el_resume($scope0_id, "#button/0")}<span>`);
	_show_start(visible);
	_show_end($scope0_id, "#text/2", visible);
	_html("after</span>");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { visible }, "__tests__/template.marko", 0, { visible: "1:6" });
}, 1);
