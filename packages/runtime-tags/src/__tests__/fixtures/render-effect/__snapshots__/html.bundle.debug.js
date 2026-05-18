// tags/render-effect.marko
var render_effect_default = _template("__tests__/tags/render-effect.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $return = input.value();
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	render_effect_default({ value: function() {} });
}, 1);
