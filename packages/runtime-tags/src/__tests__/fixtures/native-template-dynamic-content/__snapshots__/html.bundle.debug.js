// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<i>${_text_resume($scope0_id, "#text/0", input.label, $wg__input_label)}</i>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html(`<template>${_template_content()}`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_html("<span>shown</span>");
			_scope($scope1_id, {}, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_html(`<p>${_text_resume($scope0_id, "#text/1", show ? "on" : "off")}</p><template>${_template_content()}<b>${_text_resume($scope0_id, "#text/2", show ? "inner on" : "inner off")}</b></template>${_template_content_end($scope0_id)}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	child_default({ label: show ? "child on" : "child off" });
	_html(`</template>${_template_content_end($scope0_id)}<button>toggle</button>${_el_resume($scope0_id, "#button/4")}<pre></pre>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		show,
		"#childScope/3": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { show: "1:6" });
}, 1);
