// tags/render-effect.marko
var render_effect_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	return input.value();
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	render_effect_default({ value: function() {} });
}, 1);
