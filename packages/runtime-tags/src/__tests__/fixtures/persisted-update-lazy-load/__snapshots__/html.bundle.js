// tags/panel.marko
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let hits = 0;
	_html(`<button class=panel>${_escape(_hole_value($scope0_id, "Qb", input.label, _persisted_reason()))}${_el_resume($scope0_id, "b", _serialize_guard($scope0_reason, 0))} hit <!>${_escape(hits)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b1");
	writeScope($scope0_id, { g: _seed_fill(_state_reason() && hits) });
	_resume_branch($scope0_id);
});
_renderer_shells({
	"b0": ["<button class=panel><!> hit <!></button>", " D%c%l"],
	"b": ["<button class=panel><!> hit <!></button>", " D%c%l"]
});

// template.marko
const $Panel_withLoadAssets = withLoadAssets(panel_default, "_b", [{ type: "idle" }]);
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<h1>${_escape(_hole_value($scope0_id, "Qa", input.title, _persisted_reason()))}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 1))}</h1><button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "b")}`);
	_dynamic_tag($scope0_id, "d", input.show ? $Panel_withLoadAssets : null, { label: input.label }, 0, 0, _serialize_guard($scope0_reason, 0) | _persisted_reason(), "a0");
	_script($scope0_id, "a2");
	writeScope($scope0_id, {
		h: (_serialize_if($scope0_reason, 3) || _patch_reason()) && input.show,
		i: (_serialize_if($scope0_reason, 2) || _patch_reason()) && input.label,
		k: _seed_fill(_state_reason() && count)
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a1": ["<h1> </h1><button class=count>clicked <!></button><!><!>", "D l Db%l%c"],
	"a": ["<h1> </h1><button class=count>clicked <!></button><!><!>", "D l Db%l%c"]
});
