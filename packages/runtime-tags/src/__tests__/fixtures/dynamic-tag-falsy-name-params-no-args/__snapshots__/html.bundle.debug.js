// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let on = true;
	_dynamic_tag($scope0_id, "#text/0", on && input.tag, {}, _content_resume("__tests__/template.marko_1*content", ($label) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__$label = _write_guard($scope1_reason, 0);
		const label = void 0 !== $label ? $label : "falsy";
		_html(_text_mark($scope1_id, "#text/0", label, $wg__$label * 2));
		_write_if($scope1_reason, 0) && _scope($scope1_id, {}, "__tests__/template.marko", "2:4");
	}, $scope0_id));
	_html(`<button></button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_tag: input.tag,
		on
	}, "__tests__/template.marko", 0, {
		input_tag: ["input.tag"],
		on: "1:6"
	});
}, 1);
