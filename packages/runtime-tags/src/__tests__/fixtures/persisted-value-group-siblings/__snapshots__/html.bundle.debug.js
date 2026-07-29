// components/classes.js
const SHEET_CLASSES = [
	"sheet",
	"sheet--wide",
	"sheet--persisted"
];

// components/sheet.marko
var sheet_default = _template("__tests__/components/sheet.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<section${_attr_class(_hole_value($scope0_id, "PatchAttr:class:#section/0", SHEET_CLASSES, _persisted_reason()))}><button class=tap>tap <!>${_escape(n)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/1")}<p class=value>${_escape(_hole_value($scope0_id, "PatchHole:#text/3", input.label, _persisted_reason()))}${_el_resume($scope0_id, "#text/3", _serialize_guard($scope0_reason, 0))}</p></section>${_el_resume($scope0_id, "#section/0")}`);
	_script($scope0_id, "__tests__/components/sheet.marko_0");
	writeScope($scope0_id, { n: _seed_fill(_state_reason() && n) }, "__tests__/components/sheet.marko", 0, { n: "2:6" });
	_resume_branch($scope0_id);
});
_renderer_shells({
	"__tests__/components/sheet.marko_0_update": ["<section><button class=tap>tap <!></button><p class=value> </p></section>", " D Db%lD m"],
	"__tests__/components/sheet.marko": ["<section><button class=tap>tap <!></button><p class=value> </p></section>", " D Db%lD m"]
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	let Comp = sheet_default;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/2", Comp, { label: $global().a }, 0, 0, _persisted_reason() | _persisted_reason(), "__tests__/template.marko_0/update_dynamic_#text/2");
	_dynamic_tag($scope0_id, "#text/3", Comp, { label: $global().b }, 0, 0, _persisted_reason() | _persisted_reason(), "__tests__/template.marko_0/update_dynamic_#text/3");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count: _seed_fill(_state_reason() && count),
		Comp: _state_reason() && Comp
	}, "__tests__/template.marko", 0, {
		count: "2:6",
		Comp: "3:6"
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_0_update": ["<button class=count>clicked <!></button><!><!><!>", " Db%l%b%c"],
	"__tests__/template.marko": ["<button class=count>clicked <!></button><!><!><!>", " Db%l%b%c"]
});
