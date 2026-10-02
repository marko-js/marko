// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let obj = { a: 1 };
	_html(`<div>${_text_resume($scope0_id, "#text/0", obj.a)} ${_text_resume($scope0_id, "#text/1", JSON.stringify(obj), 2)} ${_text_resume($scope0_id, "#text/2", input.user.name, _write_guard($scope0_reason, 0) * 2)}</div><button>inc</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0_obj_a#7");
	_scope($scope0_id, { obj_a: obj?.a }, "__tests__/template.marko", 0, { obj_a: ["obj.a", "1:6"] });
}, 1);
