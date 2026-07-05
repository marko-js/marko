// data.ts
function getCategories() {
	return [
		"home",
		"tools",
		"toys"
	];
}

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const categories = getCategories();
	let count = 0;
	_html(`<button class=bump>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_for_of(categories, (cat) => {
		const $scope2_id = _scope_id();
		_html(`<span${_attr_class(_hole_value($scope2_id, "Nclass:a", cat === $global().params.pick && "active", _persisted_reason()))}>${_escape(cat)}</span>${_el_resume($scope2_id, "a", _persisted_reason())}`);
		_persisted_reason() && writeScope($scope2_id, {});
	}, 0, $scope0_id, "c", _persisted_reason(), _persisted_reason(), 0, 0, 1);
	_if(() => {
		if (categories.length) {
			const $scope1_id = _scope_id();
			_html(`<em>pick:${_sep(_persisted_reason())}${_escape(_hole_value($scope1_id, "b", $global().params.pick, _persisted_reason()))}${_el_resume($scope1_id, "b", _persisted_reason())}</em>${_el_resume($scope1_id, "a", 1 | _persisted_reason())}`);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "d", 1 | _persisted_reason(), _persisted_reason(), 0, 0, 1);
	_script($scope0_id, "a5");
	writeScope($scope0_id, { g: _state_reason() && count });
	_resume_branch($scope0_id);
}, 1);
