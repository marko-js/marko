// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const on = input.items.filter((item) => item.on).length;
	_script($scope0_id, "__tests__/template.marko_0_input_items_length#3_on#4", 0);
	_scope($scope0_id, {
		input_items_length: input.items?.length,
		on
	}, "__tests__/template.marko", 0, {
		input_items_length: ["input.items.length"],
		on: "1:8"
	});
}, 1);
