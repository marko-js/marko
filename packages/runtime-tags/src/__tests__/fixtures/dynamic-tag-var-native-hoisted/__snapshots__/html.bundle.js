// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 0), $si__input_itemType = _serialize_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_hoist($scope0_id, "a2");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $inputtype_scope = _peek_scope_id();
			let $el = _dynamic_tag($scope1_id, "a", input.type, {}, _content_resume("a0", () => {
				_scope_id();
				_scope_reason();
				_html("body");
			}, $scope1_id));
			_var($scope1_id, "b", $inputtype_scope, "a3");
			_scope($scope1_id, {
				c: $el,
				_: _serialize_if($scope0_reason, 1) && _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show);
	_for_until(2, 0, 1, (i) => {
		const $scope2_id = _scope_id();
		const $inputitemType_scope = _peek_scope_id();
		let $item = _dynamic_tag($scope2_id, "a", input.itemType, {}, _content_resume("a1", () => {
			const $scope4_id = _scope_id();
			_scope_reason();
			_html(`item ${_escape(i)}`);
			$si__input_itemType && _scope($scope4_id, { _: _scope_with_id($scope2_id) });
			$si__input_itemType && _resume_branch($scope4_id);
		}, $scope2_id, ($scope) => [{ M: i }]));
		_var($scope2_id, "b", $inputitemType_scope, "a4");
		_scope($scope2_id, {
			M: $si__input_itemType && i,
			d: $item,
			_: $si__input_itemType && _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "b", 1, 0, 0);
	_script($scope0_id, "a5", $sg__input_show);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, { f: input.type });
}, 1);
