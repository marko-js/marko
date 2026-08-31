// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const a = _el($scope0_id, "__tests__/template.marko_0_#div#0");
	const b = _el($scope0_id, "__tests__/template.marko_0_#div#1");
	const box = {
		a,
		b
	};
	_html(`<div>first</div>${_el_resume($scope0_id, "#div/0")}<div>second</div>${_el_resume($scope0_id, "#div/1")}`);
	_script($scope0_id, "__tests__/template.marko_0_box#2");
	_scope($scope0_id, { box }, "__tests__/template.marko", 0, { box: "3:8" });
}, 1);
