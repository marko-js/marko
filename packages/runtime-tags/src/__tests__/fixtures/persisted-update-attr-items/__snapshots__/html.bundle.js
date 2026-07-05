// data.js
function getCategories() {
	if (typeof window !== "undefined") throw new Error("getCategories is server-only");
	return [
		"alpha",
		"beta",
		"gamma"
	];
}

// tags/chip-list.marko
var chip_list_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const [search] = $global().search;
	const categories = getCategories();
	_html("<div class=chips>");
	_for_of(categories, (cat) => {
		const $scope1_id = _scope_id();
		_html(`<span${_attr_class(_hole_value($scope1_id, "Nclass:a", ["chip", { "chip--active": search.category === cat }], _persisted_reason()))}>${_escape(_hole_value($scope1_id, "Qb", cat, _persisted_reason()))}${_el_resume($scope1_id, "b", _persisted_reason())}</span>${_el_resume($scope1_id, "a", _persisted_reason())}`);
		_persisted_reason() && writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, function(cat) {
		return cat;
	}, $scope0_id, "a", _persisted_reason(), _persisted_reason(), 0, "</div>", 1);
	_persisted_reason() && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const $childScope = _peek_scope_id();
	chip_list_default({});
	_script($scope0_id, "a2");
	writeScope($scope0_id, {
		d: _state_reason() && count,
		c: _persisted_reason() && _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
