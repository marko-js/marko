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
	_region(() => {
		forOf(categories, (cat) => {
			const $scope2_id = _scope_id();
			_html(`<span${cat === $global().params.pick ? " class=active" : ""}>${_escape(cat)}${_el_resume($scope2_id, "b", _persisted_reason())}</span>${_el_resume($scope2_id, "a", _persisted_reason())}`);
			_persisted_reason() && writeScope($scope2_id, {});
		});
	}, $scope0_id, "c");
	_if(() => {
		if (categories.length) {
			const $scope1_id = _scope_id();
			_html(`<em>pick:${_sep(_persisted_reason())}${_escape(_hole_value($scope1_id, "Qb", $global().params.pick, _persisted_reason()))}${_el_resume($scope1_id, "b", _persisted_reason())}</em>${_el_resume($scope1_id, "a", 1 | _persisted_reason())}`);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "d", 1 | _persisted_reason(), _persisted_reason(), 0, 0, 1);
	_script($scope0_id, "a1");
	writeScope($scope0_id, { g: _state_reason() && count });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a2": ["<em>pick:<!></em>", " Db%l"],
	"a3": ["<em>pick:<!></em>", " Db%l"],
	"a0": ["<button class=bump> </button><!><!><!>", " D l%b%c"],
	"a": ["<button class=bump> </button><!><!><!>", " D l%b%c"]
});
