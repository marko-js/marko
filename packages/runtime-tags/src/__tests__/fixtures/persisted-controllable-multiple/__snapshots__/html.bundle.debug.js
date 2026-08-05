// template.marko
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title)}${_escape(input.title)}${_el_resume($scope0_id, "#text/0")}</h1>`);
	_attr_select_value($scope0_id, "#select/1", input.choice, _resume(function(next) {
		document.querySelector("main").dataset.choice = String(next);
	}, "__tests__/template.marko_0/valueChange"), () => {
		_html(`<select${_patch_bind($scope0_id, "ControlledHandler:#select/1", _resume(function(next) {
			document.querySelector("main").dataset.choice = String(next);
		}, "__tests__/template.marko_0/valueChange"))}${_patch_control($scope0_id, "#select/1", 3, input.choice)}${_patch_attr($scope0_id, "#select/1", "multiple", input.many)}${_attr("multiple", input.many)}><option${_attr_option_value("a")}>A</option><option${_attr_option_value("b")}>B</option></select>`);
	});
	_html(`${_el_resume($scope0_id, "#select/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
