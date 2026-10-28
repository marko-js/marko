// tags/label.marko
var label_default = _template("__tests__/tags/label.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_onHide = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "#text/0", typeof input.onHide, $wg__input_onHide)}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/label.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_v = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_v = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_v__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let y = input.v;
			label_default({ onHide: function() {
				y = "z";
			} });
			_dynamic_tag($scope1_id, "#text/1", y === "b" ? "b" : "i", {}, _content("__tests__/template.marko_2*content", () => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason();
				_html(_text_resume($scope2_id, "#text/0", input.v, $wg__input_v));
				_subscribe($wi__input_v && $input_v__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:6"), "__tests__/template.marko_2_input_v#0:4/subscribe", $wg__input_v);
				$wg__input_v || _resume_branch($scope2_id);
			}, $scope1_id));
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_show);
	_scope($scope0_id, {
		input_v: input.v,
		"ClosureScopes:input_v/5": $wi__input_v && $input_v__closures
	}, "__tests__/template.marko", 0, { input_v: ["input.v"] });
}, 1);
