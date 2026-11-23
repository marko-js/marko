// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const increment = new Proxy(() => count++, {});
	const log = new Proxy((next) => console.log("const", next), {});
	let a = 1;
	let b = 1;
	_html(`<button id=direct>${_text_mark($scope0_id, "#text/1", count)}</button>${_el_mark($scope0_id, "#button/0")}<button id=const>${_text_mark($scope0_id, "#text/3", count)}</button>${_el_mark($scope0_id, "#button/2")}<button id=assign>${_text_mark($scope0_id, "#text/5", a)} ${_text_mark($scope0_id, "#text/6", b, 2)}</button>${_el_mark($scope0_id, "#button/4")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_increment#8");
	_script($scope0_id, "__tests__/template.marko_0_count#7");
	_scope($scope0_id, {
		count,
		increment,
		"TagVariableChange:a": new Proxy((next) => console.log("direct", next), {}) || void 0,
		"TagVariableChange:b": log || void 0
	}, "__tests__/template.marko", 0, {
		count: "1:6",
		increment: "2:8",
		"TagVariableChange:a": ["aChange", "4:6"],
		"TagVariableChange:b": ["bChange", "5:6"]
	});
}, 1);
