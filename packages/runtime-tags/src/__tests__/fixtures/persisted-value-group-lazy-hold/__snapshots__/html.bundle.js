// components/panel.marko
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<section class=panel><button class=tap>tap <!>${_escape(n)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<p class=value>${_escape(_hole_value($scope0_id, "Qc", input.label, _persisted_reason()))}${_el_resume($scope0_id, "c", _serialize_guard($scope0_reason, 0))}</p></section>`);
	_script($scope0_id, "b1");
	writeScope($scope0_id, { g: _seed_fill(_state_reason() && n) });
	_resume_branch($scope0_id);
});
_renderer_shells({
	"b0": ["<section class=panel><button class=tap>tap <!></button><p class=value> </p></section>", "D Db%lD m"],
	"b": ["<section class=panel><button class=tap>tap <!></button><p class=value> </p></section>", "D Db%lD m"]
});

// template.marko
const $Panel_withLoadAssets = withLoadAssets(panel_default, "_b", [{ type: "idle" }]);
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_set_serialize_reason(_persisted_reason());
	const $childScope = _peek_scope_id();
	$Panel_withLoadAssets({ label: $global().label });
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		e: _seed_fill(_state_reason() && count),
		d: _persisted_reason() && _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a0": ["<button class=count>clicked <!></button><!><!><!>", " Db%l%/&c"],
	"a": ["<button class=count>clicked <!></button><!><!><!>", " Db%l%/&c"]
});
