// tags/panel.marko
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_warn = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let hits = 0;
	_html(`<button class=panel>${_escape(_hole_value($scope0_id, "Qb", input.label, _persisted_reason()))}${_el_resume($scope0_id, "b", _serialize_guard($scope0_reason, 0))} hit <!>${_escape(hits)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => input.warn ? 0 : void 0, $scope0_id, "d", $sg__input_warn, $sg__input_warn, $sg__input_warn, 0, 1, "b0", [() => {
		const $scope1_id = _scope_id();
		_html("<p class=warn>heads up</p>");
		$sg__input_warn && writeScope($scope1_id, {});
	}], [0], "b2");
	_script($scope0_id, "b3");
	writeScope($scope0_id, { i: _seed_fill(_state_reason() && hits) });
	_resume_branch($scope0_id);
});
_renderer_shells({
	"b1": ["<button class=panel><!> hit <!></button><!><!>", " D%c%l%c"],
	"b": ["<button class=panel><!> hit <!></button><!><!>", " D%c%l%c"]
});

// template.marko
const $Panel_withLoadAssets = withLoadAssets(panel_default, "_b", [{ type: "idle" }]);
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<h1>${_escape(_hole_value($scope0_id, "Qa", input.title, _persisted_reason()))}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 1))}</h1><button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "b")}`);
	_set_serialize_reason({
		0: _serialize_guard($scope0_reason, 2),
		1: _serialize_guard($scope0_reason, 3)
	});
	const $childScope = _peek_scope_id();
	$Panel_withLoadAssets({
		label: input.label,
		warn: input.warn
	});
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		k: _seed_fill(_state_reason() && count),
		e: _serialize_guard($scope0_reason, 0) | _persisted_reason() && _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a0": ["<h1> </h1><button class=count>clicked <!></button><!><!><!>", "D l Db%l%/&c"],
	"a": ["<h1> </h1><button class=count>clicked <!></button><!><!><!>", "D l Db%l%/&c"]
});
