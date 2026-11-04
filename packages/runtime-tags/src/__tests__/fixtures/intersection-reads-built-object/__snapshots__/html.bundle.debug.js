// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const b = { value: input.x };
	_html(`<p>${_text_mark($scope0_id, "#text/0", count + ":" + JSON.stringify(b))}</p><button>+</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		b
	}, "__tests__/template.marko", 0, {
		count: "1:6",
		b: "2:8"
	});
}, 1);
