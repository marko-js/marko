// tags/panel.marko
var panel_default = _template("__tests__/tags/panel.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_warn = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let hits = 0;
	_html(`<button class=panel>${_escape(_hole_value($scope0_id, "PatchHole:#text/1", input.label, _persisted_reason()))}${_el_resume($scope0_id, "#text/1", _serialize_guard($scope0_reason, 0))} hit <!>${_escape(hits)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => input.warn ? 0 : undefined, $scope0_id, "#text/3", $sg__input_warn, $sg__input_warn, $sg__input_warn, 0, 1, "__tests__/tags/panel.marko_0/update_if_#text/3", [() => {
		const $scope1_id = _scope_id();
		_html("<p class=warn>heads up</p>");
		$sg__input_warn && writeScope($scope1_id, {}, "__tests__/tags/panel.marko", "3:2");
	}], [0]);
	_script($scope0_id, "__tests__/tags/panel.marko_0");
	writeScope($scope0_id, { hits: _state_reason() && hits }, "__tests__/tags/panel.marko", 0, { hits: "1:6" });
	_resume_branch($scope0_id);
});
_renderer_shells({
	"__tests__/tags/panel.marko_0_update": ["<button class=panel><!> hit <!></button><!><!>", " D%c%l%c"],
	"__tests__/tags/panel.marko": ["<button class=panel><!> hit <!></button><!><!>", " D%c%l%c"]
});

// template.marko
const $Panel_withLoadAssets = withLoadAssets(panel_default, "ready:__tests__/tags/panel.marko", [{ type: "idle" }]);
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<h1>${_escape(_hole_value($scope0_id, "PatchHole:#text/0", input.title, _persisted_reason()))}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 1))}</h1><button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/1")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason({
		0: _serialize_guard($scope0_reason, 2),
		1: _serialize_guard($scope0_reason, 3)
	});
	$Panel_withLoadAssets({
		label: input.label,
		warn: input.warn
	});
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count: _state_reason() && count,
		"#childScope/4": _serialize_guard($scope0_reason, 0) | _persisted_reason() && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_0_update": ["<h1> </h1><button class=count>clicked <!></button><!><!><!>", "D l Db%l%/&c"],
	"__tests__/template.marko": ["<h1> </h1><button class=count>clicked <!></button><!><!><!>", "D l Db%l%/&c"]
});
