// tags/badge.marko
var badge_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<em>${_text_mark($scope0_id, "a", input.label, $wg__input_label)}</em>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let visible = true;
	_html(`<button id=t>t</button>${_el_mark($scope0_id, "a")}<span>before`);
	_show_start(visible, 0);
	badge_default({ label: "new" });
	_show_end($scope0_id, "c", visible, 1, 0, 0, 1);
	_html("after</span>");
	_script($scope0_id, "a0");
	_scope($scope0_id, { d: visible });
}, 1);
