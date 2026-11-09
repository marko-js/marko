// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	const half = count + .5;
	_html(`<button>inc</button>${_el_mark($scope0_id, "#button/0")}<div>${_text_mark($scope0_id, "#text/1", count + half.toFixed(1) + half.constructor.name)}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
