// theme.ts
const card = {
	color: "blue",
	padding: "4px"
};

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let width = "10px";
	_html(`<div${_assert_style_items([card, "color:red"], ["width"]), _attr_style([
		card,
		"color:red",
		{ width }
	])}></div>${_el_mark($scope0_id, "#div/0")}<button></button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
