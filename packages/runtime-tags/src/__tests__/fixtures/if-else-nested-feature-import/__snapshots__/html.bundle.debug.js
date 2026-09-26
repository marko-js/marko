// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 0), $si__input_show = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $inputtype_scope = _peek_scope_id();
			let $el = _dynamic_tag($scope1_id, "#text/0", input.type, {}, _content_resume("__tests__/template.marko_3*content", () => {
				const $scope3_id = _scope_id();
				_scope_reason();
				_html("body");
			}, $scope1_id));
			_var($scope1_id, "#scopeOffset/1", $inputtype_scope, "__tests__/template.marko_1_$el#2/var");
			_scope($scope1_id, { _: _serialize_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2", { $el: "4:18" });
			_var_scope($inputtype_scope, $scope1_id, { $el });
			_assert_hoist($el);
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html("<span>else</span>");
			$si__input_show && _scope($scope2_id, {}, "__tests__/template.marko", "6:2");
			return 1;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show);
	_script($scope0_id, "__tests__/template.marko_0", $sg__input_show);
	$si__input_show && _scope($scope0_id, { input_type: input.type }, "__tests__/template.marko", 0, { input_type: ["input.type"] });
}, 1);
