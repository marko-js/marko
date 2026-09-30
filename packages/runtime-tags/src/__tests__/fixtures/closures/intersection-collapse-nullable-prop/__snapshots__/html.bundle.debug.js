// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	const obj = show && { label: "hi" };
	const n = show ? 1 : 2;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}<div>${_text_resume($scope0_id, "#text/1", (obj?.label ?? "none") + n)}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "1:6" });
}, 1);
