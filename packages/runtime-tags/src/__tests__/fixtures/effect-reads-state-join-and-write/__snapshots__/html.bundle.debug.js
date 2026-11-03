// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const x = n + input.label;
	_html(`<button>${_text_resume($scope0_id, "#text/1", x)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_input_other#5_x#8");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		input_other: input.other,
		n,
		x
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_other: ["input.other"],
		n: "1:6",
		x: "2:8"
	});
}, 1);
