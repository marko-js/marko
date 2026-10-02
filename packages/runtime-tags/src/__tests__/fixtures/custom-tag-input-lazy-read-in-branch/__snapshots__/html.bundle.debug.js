// tags/press-button/index.marko
var press_button_default = _template("__tests__/tags/press-button/index.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button class=act>press</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/press-button/index.marko_0_input_onPress#3");
	_scope($scope0_id, { input_onPress: input.onPress }, "__tests__/tags/press-button/index.marko", 0, { input_onPress: ["input.onPress"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	let log = "";
	_html(`<button class=inc>inc</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			press_button_default({ onPress: _resume(function() {
				log = `${log}[${count}]`;
			}, "__tests__/template.marko_1/onPress", $scope1_id) });
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:2");
			return 0;
		}
	}, $scope0_id, "#text/1", $wg__input_show, $wg__input_show, 0, 0, 1);
	_html(`<div class=log>${_text_resume($scope0_id, "#text/2", log)}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		log
	}, "__tests__/template.marko", 0, {
		count: "3:6",
		log: "4:6"
	});
}, 1);
