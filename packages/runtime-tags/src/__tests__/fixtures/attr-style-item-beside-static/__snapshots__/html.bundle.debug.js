// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let tint = null;
	_html(`<div${_attr_style(["display:block;background-color:blue", { color: tint }])}></div>${_el_mark($scope0_id, "#div/0")}<div${_attr_style([{ color: tint }, "border-color:blue"])}></div>${_el_mark($scope0_id, "#div/1")}<button></button>${_el_mark($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { tint }, "__tests__/template.marko", 0, { tint: "1:6" });
}, 1);
