// data.js
const CHIPS = [
	"home",
	"tools",
	"toys"
];

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<nav>`);
	_for_of(CHIPS, (chip) => {
		const $scope1_id = _scope_id();
		_html(`<a${_attr_class(_hole_value($scope1_id, "PatchAttr:class:#a/0", ["chip", { active: $global().pick === chip }], _persisted_reason()))}>${_escape(_hole_value($scope1_id, "PatchHole:#text/1", chip, _persisted_reason()))}${_el_resume($scope1_id, "#text/1", _persisted_reason())}</a>${_el_resume($scope1_id, "#a/0", _persisted_reason())}`);
		_persisted_reason() && writeScope($scope1_id, {}, "__tests__/template.marko", "6:4");
	}, 0, $scope0_id, "#nav/2", _persisted_reason(), _persisted_reason(), 0, "</nav>", 1);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _state_reason() && count }, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
