// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let sel = ["a"];
	const attrs = {
		checkedValue: sel,
		value: "a"
	};
	_html(`<input type=checkbox${_attrs_partial(attrs, { type: 1 }, "#input/0", $scope0_id, "input")}>${_el_mark($scope0_id, "#input/0")}<button>t</button>${_el_mark($scope0_id, "#button/1")}<div>${_text_mark($scope0_id, "#text/2", sel.join(","))}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_attrs#4");
	_scope($scope0_id, { sel }, "__tests__/template.marko", 0, {
		sel: "1:6",
		"ControlledHandler:#input/0": ["...attrs", "3:11"],
		"EventAttributes:#input/0": ["...attrs", "3:11"]
	});
}, 1);
