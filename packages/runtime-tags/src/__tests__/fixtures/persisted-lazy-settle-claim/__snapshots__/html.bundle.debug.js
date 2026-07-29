// components/panel.marko
var panel_default = _template("__tests__/components/panel.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<section class=panel><button class=tap>tap <!>${_escape(n)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<p class=value>${_escape(_hole_value($scope0_id, "PatchHole:#text/2", input.label, _persisted_reason()))}${_el_resume($scope0_id, "#text/2", _serialize_guard($scope0_reason, 0))}</p></section>`);
	_script($scope0_id, "__tests__/components/panel.marko_0");
	writeScope($scope0_id, { n: _seed_fill(_state_reason() && n) }, "__tests__/components/panel.marko", 0, { n: "1:6" });
	_resume_branch($scope0_id);
});
_renderer_shells({
	"__tests__/components/panel.marko_0_update": ["<section class=panel><button class=tap>tap <!></button><p class=value> </p></section>", "D Db%lD m"],
	"__tests__/components/panel.marko": ["<section class=panel><button class=tap>tap <!></button><p class=value> </p></section>", "D Db%lD m"]
});

// template.marko
const $Panel_withLoadAssets = withLoadAssets(panel_default, "ready:__tests__/components/panel.marko", [{ type: "idle" }]);
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_serialize_reason(_persisted_reason());
	const $childScope = _peek_scope_id();
	$Panel_withLoadAssets({ label: $global().label });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count: _seed_fill(_state_reason() && count),
		"#childScope/3": _persisted_reason() && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "2:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_0_update": ["<button class=count>clicked <!></button><!><!><!>", " Db%l%/&c"],
	"__tests__/template.marko": ["<button class=count>clicked <!></button><!><!><!>", " Db%l%/&c"]
});
