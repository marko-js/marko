// tags/echo/index.marko
var echo_default = _template("__tests__/tags/echo/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_skip = _write_guard($scope0_reason, 1), $wg__input_label = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const { skip, ...r } = input;
	const { ...s } = r;
	_html(`<em>${_text_resume($scope0_id, "#text/0", skip, $wg__input_skip)}${_text_resume($scope0_id, "#text/1", s.label, $wg__input_label * 2)}</em>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/echo/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let label = "a";
	_html("<main>");
	_set_scope_reason(34);
	const $childScope = _peek_scope_id();
	echo_default({
		skip: "k",
		label
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		label,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { label: "1:6" });
}, 1);
