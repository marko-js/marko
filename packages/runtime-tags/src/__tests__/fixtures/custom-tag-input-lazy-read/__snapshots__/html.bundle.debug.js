// tags/press-button/index.marko
var press_button_default = _template("__tests__/tags/press-button/index.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button class=act>press</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/press-button/index.marko_0_input_onPress");
	writeScope($scope0_id, { input_onPress: input.onPress }, "__tests__/tags/press-button/index.marko", 0, { input_onPress: ["input.onPress"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	let log = "";
	_html(`<button class=inc>inc</button>${_el_resume($scope0_id, "#button/0")}`);
	press_button_default({ onPress: _resume(function() {
		log = `${log}[${count}]`;
	}, "__tests__/template.marko_0/onPress", $scope0_id) });
	_html(`<div class=log>${_escape(log)}${_el_resume($scope0_id, "#text/2")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count,
		log
	}, "__tests__/template.marko", 0, {
		count: "3:6",
		log: "4:6"
	});
	_resume_branch($scope0_id);
}, 1);
