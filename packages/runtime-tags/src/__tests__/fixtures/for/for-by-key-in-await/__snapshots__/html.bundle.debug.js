// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let items = [{ id: "a" }, { id: "b" }];
	_html(`<button>add</button>${_el_resume($scope0_id, "#button/0")}`);
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html("<div>");
		_await($scope1_id, "#text/0", input.value, (v) => {
			const $scope2_id = _scope_id();
			_html(`<em>${_escape(item.id)}:${_text_resume($scope2_id, "#text/1", v, $sg__input_value * 2)}</em>`);
			_scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:9");
			$sg__input_value || _resume_branch($scope2_id);
		});
		_html("</div>");
		_scope($scope1_id, { "#LoopKey": _serialize_if($scope0_reason, 0) && item?.id }, "__tests__/template.marko", "3:2", { "#LoopKey": ["item.id", "3:6"] });
	}, "id", $scope0_id, "#text/1", 1, 1, 1, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_value: input.value,
		items
	}, "__tests__/template.marko", 0, {
		input_value: ["input.value"],
		items: "1:6"
	});
}, 1);
