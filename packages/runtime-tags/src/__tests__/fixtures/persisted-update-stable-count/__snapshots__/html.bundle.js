// data.js
const CHIPS = [
	"home",
	"tools",
	"toys"
];

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<nav>`);
	_for_of(CHIPS, (chip) => {
		const $scope1_id = _scope_id();
		_html(`<a${_attr_class(_hole_value($scope1_id, "Nclass:a", ["chip", { active: $global().pick === chip }], _persisted_reason()))}>${_escape(_hole_value($scope1_id, "Qb", chip, _persisted_reason()))}${_el_resume($scope1_id, "b", _persisted_reason())}</a>${_el_resume($scope1_id, "a", _persisted_reason())}`);
		_persisted_reason() && writeScope($scope1_id, {});
	}, 0, $scope0_id, "c", _persisted_reason(), _persisted_reason(), 0, "</nav>", 1);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { d: _state_reason() && count });
	_resume_branch($scope0_id);
}, 1);
