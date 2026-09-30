// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 0), $si__input_show = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $inputtype_scope = _peek_scope_id();
			let $el = _dynamic_tag($scope1_id, "a", input.type, {}, _content_resume("a0", () => {
				_scope_id();
				_scope_reason();
				_html("body");
			}, $scope1_id));
			_var($scope1_id, "b", $inputtype_scope, "a1");
			_scope($scope1_id, {
				c: $el,
				_: _serialize_if($scope0_reason, 1) && _scope_with_id($scope0_id)
			});
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html("<span>else</span>");
			$si__input_show && _scope($scope2_id, {});
			return 1;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show);
	_script($scope0_id, "a2", $sg__input_show);
	$si__input_show && _scope($scope0_id, { e: input.type });
}, 1);
