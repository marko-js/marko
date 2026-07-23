// data.ts
function getCategories() {
	return [
		"home",
		"tools",
		"toys"
	];
}

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const categories = getCategories();
	let count = 0;
	_html(`<button class=bump>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_region(() => {
		forOf(categories, (cat) => {
			const $scope2_id = _scope_id();
			_html(`<span${cat === $global().params.pick ? " class=active" : ""}>${_escape(cat)}${_el_resume($scope2_id, "#text/1", _persisted_reason())}</span>${_el_resume($scope2_id, "#span/0", _persisted_reason())}`);
			_persisted_reason() && writeScope($scope2_id, {}, "__tests__/template.marko", "5:2");
		});
	}, $scope0_id, "#text/2");
	_if(() => {
		if (categories.length) {
			const $scope1_id = _scope_id();
			_html(`<em${_attr_class(_hole_value($scope1_id, "PatchAttr:class:#em/0", count && $global().params.tag && "hot", _state_reason()))}>pick:${_sep(_persisted_reason())}${_escape(_hole_value($scope1_id, "PatchHole:#text/1", $global().params.pick, _persisted_reason()))}${_el_resume($scope1_id, "#text/1", _persisted_reason())}</em>${_el_resume($scope1_id, "#em/0", 1 | _persisted_reason())}`);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "8:2");
			return 0;
		}
	}, $scope0_id, "#text/3", 1 | _persisted_reason(), _persisted_reason(), 0, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _state_reason() && count }, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_1_update": ["<em>pick:<!></em>", " Db%l"],
	"__tests__/template.marko_1_content": ["<em>pick:<!></em>", " Db%l"],
	"__tests__/template.marko_0_update": ["<button class=bump> </button><!><!><!>", " D l%b%c"],
	"__tests__/template.marko": ["<button class=bump> </button><!><!><!>", " D l%b%c"]
});
