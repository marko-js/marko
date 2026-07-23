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
	_scope_reason();
	const $scope0_id = _scope_id();
	const [search] = $global().search;
	const categories = getCategories();
	_html("<div class=chips>");
	_for_of(categories, (cat) => {
		const $scope1_id = _scope_id();
		_html(`<span class=${search.category === cat ? "\"chip chip--active\"" : "chip"}>${_escape(cat)}</span>${_el_resume($scope1_id, "#span/0", _persisted_reason())}`);
		_persisted_reason() && writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/chip-list.marko", "6:4", { cat: "6:8" });
	}, function(cat) {
		return cat;
	}, $scope0_id, "#div/0", _persisted_reason(), 0, 0, 0, 1);
	_html("</div>");
});
_renderer_shells({ "__tests__/tags/chip-list.marko_0_update": ["<div class=chips></div>", " b"] });

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const $childScope = _peek_scope_id();
	_region(() => {
		chip_list_default({});
	}, $scope0_id, "#text/3");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count: _state_reason() && count,
		"#childScope/2": _persisted_reason() && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_0_update": ["<button class=count>clicked <!></button><!>", " Db%l/&%b"],
	"__tests__/template.marko": ["<button class=count>clicked <!></button><!>", " Db%l/&%b"]
});
