// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let tint = null;
	_html(`<div${_attr_style(["display:block;background-color:blue", { color: tint }])}></div>${_el_mark($scope0_id, "a")}<div${_attr_style([{ color: tint }, "border-color:blue"])}></div>${_el_mark($scope0_id, "b")}<button></button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { d: tint });
}, 1);
