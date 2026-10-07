// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", input.value, $wg__input_value)}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/wrapper.marko
var wrapper_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	_dynamic_tag($scope0_id, "a", input.type, { value: count });
	_html(`<button>inc</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "c0");
	_scope($scope0_id, {
		e: input.type,
		f: count
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $wi__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const getChild = _resume(function() {
		return child_default;
	}, "a0");
	wrapper_default({ type: child_default });
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<div>${getChild() ? "child" : "none"}</div>`);
			$wi__input_show && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", $wg__input_show, $wg__input_show, 0, 0, 1);
	$wi__input_show && _scope($scope0_id, { f: getChild });
}, 1);
