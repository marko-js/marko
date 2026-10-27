// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	const g = open ? input.fn : () => "-";
	_html(`<button>${_text_resume($scope0_id, "#text/1", g())}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {
		input_fn: input.fn,
		open
	}, "__tests__/tags/card.marko", 0, {
		input_fn: ["input.fn"],
		open: "1:6"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show__OR__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.show && card_default, { fn: _resume(function() {
		return "f:" + input.label;
	}, "__tests__/template.marko_0/fn", $scope0_id) }, 0, 0, $wg__input_show__OR__input_label);
	_scope($scope0_id, {
		input_show: _write_if($scope0_reason, 1) && input.show,
		input_label: input.label
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		input_label: ["input.label"]
	});
}, 1);
