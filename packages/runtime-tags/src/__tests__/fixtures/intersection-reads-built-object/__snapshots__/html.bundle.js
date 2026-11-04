// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const b = { value: input.x };
	_html(`<p>${_text_mark($scope0_id, "a", "0:" + JSON.stringify(b))}</p><button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: count,
		g: b
	});
}, 1);
