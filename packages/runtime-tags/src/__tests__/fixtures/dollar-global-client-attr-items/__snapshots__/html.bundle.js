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
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let n = 0;
	_html(`<b${$class[($global$1.on ? 1 : 0) + 0]}${_attr_style({
		color: $global$1.color,
		order: 0
	})}>${_text_resume($scope0_id, "b", n)}</b>${_el_resume($scope0_id, "a")}<i${$class2[($global$1.on ? 1 : 0) + 0]}></i>${_el_resume($scope0_id, "c")}<u${$class3[($global$1 ? 1 : 0) + 0]}></u>${_el_resume($scope0_id, "d")}<button>inc</button>${_el_resume($scope0_id, "e")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { f: n });
}, 1);
