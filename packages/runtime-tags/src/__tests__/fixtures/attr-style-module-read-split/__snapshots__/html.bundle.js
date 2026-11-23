// theme.ts
const base = "display:block";
const fallback = "display:-webkit-box;display:flex";
const card = {
	"font-family": "\"Helvetica Neue\", sans-serif",
	"background-image": "url(/tile.svg?size=2&tone=light)"
};

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let tint = null;
	_html(`<div${_attr_style([base, { color: tint }])}></div>${_el_mark($scope0_id, "a")}<div${_attr_style([
		card,
		"margin:0",
		{ color: tint }
	])}></div>${_el_mark($scope0_id, "b")}<div${_attr_style(base)}></div><button></button>${_el_mark($scope0_id, "c")}<div${_attr_style([fallback, { color: tint }])}></div>${_el_mark($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { e: tint });
}, 1);
