// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	const y = count + 1;
	const z = count + 2;
	_html(`<button>set</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_y#2_z#3");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		y,
		z
	}, "__tests__/template.marko", 0, {
		y: "2:8",
		z: "3:8"
	});
}, 1);
