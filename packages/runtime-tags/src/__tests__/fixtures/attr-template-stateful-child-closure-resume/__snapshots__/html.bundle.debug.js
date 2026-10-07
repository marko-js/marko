// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "#text/0", input.value, $wg__input_value)}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// tags/wrapper.marko
var wrapper_default = _template("__tests__/tags/wrapper.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	_dynamic_tag($scope0_id, "#text/0", input.type, { value: count });
	_html(`<button>inc</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/wrapper.marko_0");
	_scope($scope0_id, {
		input_type: input.type,
		count
	}, "__tests__/tags/wrapper.marko", 0, {
		input_type: ["input.type"],
		count: "1:6"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $wi__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const getChild = _resume(function() {
		return child_default;
	}, "__tests__/template.marko_0/getChild");
	wrapper_default({ type: child_default });
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<div>${getChild() ? "child" : "none"}</div>`);
			$wi__input_show && _scope($scope1_id, {}, "__tests__/template.marko", "5:2");
			return 0;
		}
	}, $scope0_id, "#text/1", $wg__input_show, $wg__input_show, 0, 0, 1);
	$wi__input_show && _scope($scope0_id, { getChild }, "__tests__/template.marko", 0, { getChild: "3:8" });
}, 1);
