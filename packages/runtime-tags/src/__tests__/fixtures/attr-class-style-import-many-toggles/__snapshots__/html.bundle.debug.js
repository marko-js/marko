// styles.css.ts
const item = "x";
const on = "x";

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let on$1 = false;
	_html(`<div${_attr_class(`${"x"}${on$1 ? " a" : ""}${on$1 ? " b" : ""}${on$1 ? " c" : ""}${on$1 ? " d" : ""}${on$1 ? " " + "x" : ""}`)}></div>${_el_mark($scope0_id, "#div/0")}<button></button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { on: on$1 }, "__tests__/template.marko", 0, { on: "2:6" });
}, 1);
