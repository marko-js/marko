// theme.ts
const base = "color:blue";

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let tint = "red";
	_html(`<div${_assert_style_items([base], ["color"]), _attr_style([base, { color: tint }])}></div>${_el_mark($scope0_id, "#div/0")}<button></button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
