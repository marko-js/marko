// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let items = [{ id: "a" }, { id: "b" }];
	_html(`<button>add</button>${_el_resume($scope0_id, "a")}`);
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html("<div>");
		_await($scope1_id, "a", input.value, (v) => {
			const $scope2_id = _scope_id();
			_html(`<em>${_escape(item.id)}:${_text_resume($scope2_id, "b", v, $sg__input_value * 2)}</em>`);
			_scope($scope2_id, { _: _scope_with_id($scope1_id) });
			$sg__input_value || _resume_branch($scope2_id);
		});
		_html("</div>");
		_scope($scope1_id, { M: _serialize_if($scope0_reason, 0) && item?.id });
	}, "id", $scope0_id, "b", 1, 1, 1, 0, 1);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		e: input.value,
		f: items
	});
}, 1);
