// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<i>${_text_resume($scope0_id, "a", input.label, $wg__input_label)}</i>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html(`<template>${_template_content()}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html("<span>shown</span>");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<p>${_text_resume($scope0_id, "b", "on")}</p><template>${_template_content()}<b>${_text_resume($scope0_id, "c", "inner on")}</b></template>${_template_content_end($scope0_id)}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	child_default({ label: "child on" });
	_html(`</template>${_template_content_end($scope0_id)}<button>toggle</button>${_el_resume($scope0_id, "e")}<pre></pre>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: show,
		d: _existing_scope($childScope)
	});
}, 1);
