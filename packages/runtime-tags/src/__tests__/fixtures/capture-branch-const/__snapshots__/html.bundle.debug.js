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
	const $scope0_reason = _scope_reason(), $wi__input_v = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const t = input.v + "!";
			const $childScope = _peek_scope_id();
			label_default({ get: _resume(function() {
				return t;
			}, "__tests__/template.marko_1/get", $scope1_id) });
			_scope($scope1_id, {
				t,
				_: $wi__input_v && _scope_with_id($scope0_id),
				"#childScope/0": $wi__input_v && _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2", { t: "2:10" });
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_show, 0, 0, 1);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { input_v: input.v }, "__tests__/template.marko", 0, { input_v: ["input.v"] });
}, 1);
