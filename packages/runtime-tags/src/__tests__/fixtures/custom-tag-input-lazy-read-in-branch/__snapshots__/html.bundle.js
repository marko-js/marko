// tags/press-button/index.marko
var press_button_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button class=act>press</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { d: input.onPress });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	let log = "";
	_html(`<button class=inc>inc</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			press_button_default({ onPress: _resume(function() {
				log = `${log}[${count}]`;
			}, "a0", $scope1_id) });
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", $wg__input_show, $wg__input_show, 0, 0, 1);
	_html(`<div class=log>${_text_resume($scope0_id, "c", log)}</div>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		g: count,
		h: log
	});
}, 1);
