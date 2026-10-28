// tags/label.marko
var label_default = _template("__tests__/tags/label.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "#output/0")}`);
	_script($scope0_id, "__tests__/tags/label.marko_0_get#3");
	_scope($scope0_id, { get: input.get }, "__tests__/tags/label.marko", 0, { get: "1:10" });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0), $wi__input_items = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const { v } = item;
		const $childScope = _peek_scope_id();
		label_default({ get: _resume(function() {
			const item = "!";
			return v + item;
		}, "__tests__/template.marko_1/get", $scope1_id) });
		_scope($scope1_id, {
			v,
			"#childScope/0": $wi__input_items && _existing_scope($childScope)
		}, "__tests__/template.marko", "1:2", { v: "2:12" });
	}, 0, $scope0_id, "#text/0", $wg__input_items, $wg__input_items, 0, 0, 1);
	$wi__input_items && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
