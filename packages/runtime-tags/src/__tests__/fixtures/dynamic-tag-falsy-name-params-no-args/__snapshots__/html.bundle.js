// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let on = true;
	_dynamic_tag($scope0_id, "a", input.tag, {}, _content_resume("a0", ($label) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__$label = _write_guard($scope1_reason, 0);
		_html(_text_mark($scope1_id, "a", void 0 !== $label ? $label : "falsy", $wg__$label * 2));
		_write_if($scope1_reason, 0) && _scope($scope1_id, {});
	}, $scope0_id));
	_html(`<button></button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		e: input.tag,
		f: on
	});
}, 1);
