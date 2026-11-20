// theme.ts
const base = "display:block";
const card = {
	"font-family": "\"Helvetica Neue\", sans-serif",
	"background-image": "url(/tile.svg?size=2&tone=light)"
};

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let tint = null;
	_html(`<div${_assert_style_items([base], ["color"]), _attr_style([base, { color: tint }])}></div>${_el_mark($scope0_id, "#div/0")}<div${_assert_style_items([card, "margin:0"], ["color"]), _attr_style([
		card,
		"margin:0",
		{ color: tint }
	])}></div>${_el_mark($scope0_id, "#div/1")}<div${_attr_style(base)}></div><button></button>${_el_mark($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { tint }, "__tests__/template.marko", 0, { tint: "2:6" });
}, 1);
