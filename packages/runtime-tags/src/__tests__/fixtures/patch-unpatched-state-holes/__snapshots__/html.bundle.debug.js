// template.marko
const $template = "<div id=spread></div><input name=spread><div> </div><p> </p><button>+</button>";
const $walks = " b bD lD l b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b bD lD l ;<div id=spread></div><input name=spread><div> </div><p> </p><button>+</button>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let html = "<b>a</b>";
	let attrs = { title: "a" };
	_html("<div id=spread");
	_attrs_partial_content(attrs, { id: 1 }, "#div/0", $scope0_id, "div", 0);
	_html(`</div>${_el_resume($scope0_id, "#div/0")}<input name=spread${_attrs_partial(attrs, { name: 1 }, "#input/1", $scope0_id, "input")}>${_el_resume($scope0_id, "#input/1")}<div>${_html_resume($scope0_id, "#text/2", html)}</div><p>${_text_resume($scope0_id, "#text/3", input.n, 1, $scope0_reason, 0)}</p><button>+</button>${_el_resume($scope0_id, "#button/4")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_attrs#9");
	_scope($scope0_id, {}, "__tests__/template.marko", 0, {
		"EventAttributes:#div/0": ["...attrs", "3:9"],
		"ControlledHandler:#input/1": ["...attrs", "4:11"],
		"EventAttributes:#input/1": ["...attrs", "4:11"]
	});
}, 1);
