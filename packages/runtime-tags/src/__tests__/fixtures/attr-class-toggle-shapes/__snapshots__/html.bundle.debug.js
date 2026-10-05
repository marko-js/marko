// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let on = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}<div class=${on ? "\"c d\"" : "c"}></div>${_el_resume($scope0_id, "#div/1")}<div${on ? " class=e" : ""}></div>${_el_resume($scope0_id, "#div/2")}<div class=${on ? "\"f g\"" : "\"f h\""}></div>${_el_resume($scope0_id, "#div/3")}<div class=${on ? "\"i j k\"" : "i"}></div>${_el_resume($scope0_id, "#div/4")}<div class="l m l"></div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { on }, "__tests__/template.marko", 0, { on: "1:6" });
}, 1);
