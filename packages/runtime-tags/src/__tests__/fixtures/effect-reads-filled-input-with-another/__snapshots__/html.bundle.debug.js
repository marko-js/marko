// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", n + input.label)}</button>${_el_resume($scope0_id, "#button/0")}<div></div>${_el_resume($scope0_id, "#div/2")}`);
	_script($scope0_id, "__tests__/template.marko_0_input_label#5_input_other#6");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		input_other: input.other,
		n
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_other: ["input.other"],
		n: "1:6"
	});
}, 1);
