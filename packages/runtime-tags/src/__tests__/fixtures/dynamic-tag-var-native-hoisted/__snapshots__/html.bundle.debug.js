// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 0), $si__input_itemType = _serialize_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $item_getter = _hoist($scope0_id, "__tests__/template.marko_0_$item#3/hoist");
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
			_scope($scope1_id, {
				$el,
				_: _serialize_if($scope0_reason, 1) && _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "3:2", { $el: "4:18" });
			_assert_hoist($el);
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show);
	_for_until(2, 0, 1, (i) => {
		const $scope2_id = _scope_id();
		const $inputitemType_scope = _peek_scope_id();
		let $item = _dynamic_tag($scope2_id, "#text/0", input.itemType, {}, _content_resume("__tests__/template.marko_4*content", () => {
			const $scope4_id = _scope_id();
			const $scope4_reason = _scope_reason();
			_html(`item ${_escape(i)}`);
			$si__input_itemType && _scope($scope4_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "9:6");
			$si__input_itemType && _resume_branch($scope4_id);
		}, $scope2_id));
		_var($scope2_id, "#scopeOffset/1", $inputitemType_scope, "__tests__/template.marko_2_$item#3/var");
		_scope($scope2_id, {
			"#LoopKey": $si__input_itemType && i,
			$item,
			_: $si__input_itemType && _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "8:2", {
			"#LoopKey": "8:6",
			$item: "9:22"
		});
		_assert_hoist($item);
	}, 0, $scope0_id, "#text/1", 1, 0, 0);
	_script($scope0_id, "__tests__/template.marko_0", $sg__input_show);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, { input_type: input.type }, "__tests__/template.marko", 0, { input_type: ["input.type"] });
}, 1);
