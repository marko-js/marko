// template.marko
const $class = [
	"",
	" class=on",
	" class=big",
	" class=\"on big\""
];
const $class2 = [
	"",
	" class=on",
	" class=set",
	" class=\"on set\""
];
const $class3 = [
	"",
	" class=all",
	" class=set",
	" class=\"all set\""
];
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let n = 0;
	_html(`<b${$class[($global$1.on ? 1 : 0) + (n > 1 ? 2 : 0)]}${_attr_style({
		color: $global$1.color,
		order: n > 9 ? n : 0
	})}>${_text_resume($scope0_id, "#text/1", n)}</b>${_el_resume($scope0_id, "#b/0")}<i${$class2[($global$1.on ? 1 : 0) + (n ? 2 : 0)]}></i>${_el_resume($scope0_id, "#i/2")}<u${$class3[($global$1 ? 1 : 0) + (n > 0 ? 2 : 0)]}></u>${_el_resume($scope0_id, "#u/3")}<button>inc</button>${_el_resume($scope0_id, "#button/4")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { n }, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
