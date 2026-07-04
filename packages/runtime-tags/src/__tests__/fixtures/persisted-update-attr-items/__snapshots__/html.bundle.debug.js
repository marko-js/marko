// data.js
function getCategories() {
	if (typeof window !== "undefined") {
		throw new Error("getCategories is server-only");
	}
	return [
		"alpha",
		"beta",
		"gamma"
	];
}

// tags/chip-list.marko
var chip_list_default = _template("__tests__/tags/chip-list.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const [search] = $global().search;
	const categories = getCategories();
	_html("<div class=chips>");
	_for_of(categories, (cat) => {
		const $scope1_id = _scope_id();
		_html(`<span${_attr_class(_hole_value($scope1_id, "UpdateAttr:class:#span/0", ["chip", { "chip--active": search.category === cat }], _persisted_reason()))}>${_escape(_hole_value($scope1_id, "#text/1", cat, _persisted_reason()))}${_el_resume($scope1_id, "#text/1", _persisted_reason())}</span>${_el_resume($scope1_id, "#span/0", _persisted_reason())}`);
		_persisted_reason() && writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/chip-list.marko", "6:4");
	}, function(cat) {
		return cat;
	}, $scope0_id, "#div/0", _persisted_reason(), _persisted_reason(), _persisted_reason(), "</div>", 1);
	_persisted_reason() && writeScope($scope0_id, {}, "__tests__/tags/chip-list.marko", 0, { search_category: ["search.category", "3:9"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const $childScope = _peek_scope_id();
	chip_list_default({});
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count: _state_reason() && count,
		"#childScope/2": _persisted_reason() && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);
