// components/classes.js
const SHEET_CLASSES = [
	"sheet",
	"sheet--wide",
	"sheet--persisted"
];

// components/sheet.marko
var sheet_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<section${_attr_class(_hole_value($scope0_id, "Nclass:a", SHEET_CLASSES, _persisted_reason()))}><button class=tap>tap <!>${_escape(n)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "b")}<p class=value>${_escape(_hole_value($scope0_id, "Qd", input.label, _persisted_reason()))}${_el_resume($scope0_id, "d", _serialize_guard($scope0_reason, 0))}</p></section>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b1");
	writeScope($scope0_id, { h: _seed_fill(_state_reason() && n) });
	_resume_branch($scope0_id);
});
_renderer_shells({
	"b0": ["<section><button class=tap>tap <!></button><p class=value> </p></section>", " D Db%lD m"],
	"b": ["<section><button class=tap>tap <!></button><p class=value> </p></section>", " D Db%lD m"]
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	let Comp = sheet_default;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "c", Comp, { label: $global().a }, 0, 0, _persisted_reason() | _persisted_reason(), "a0");
	_dynamic_tag($scope0_id, "d", Comp, { label: $global().b }, 0, 0, _persisted_reason() | _persisted_reason(), "a1");
	_script($scope0_id, "a3");
	writeScope($scope0_id, {
		e: _seed_fill(_state_reason() && count),
		f: _state_reason() && Comp
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a2": ["<button class=count>clicked <!></button><!><!><!>", " Db%l%b%c"],
	"a": ["<button class=count>clicked <!></button><!><!><!>", " Db%l%b%c"]
});
