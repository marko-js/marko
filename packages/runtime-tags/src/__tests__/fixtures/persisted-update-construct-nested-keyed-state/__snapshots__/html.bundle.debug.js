// data.js
const groups = [{
	id: "parent-alpha-marker",
	items: [{ id: "shared-item" }, { id: "alpha-item" }]
}, {
	id: "parent-beta-marker",
	items: [{ id: "shared-item" }, { id: "beta-item" }]
}];
const getGroups = typeof window === "undefined" ? (filter) => filter === "Beta" ? [{
	...groups[1],
	items: [groups[1].items[0]]
}] : groups : undefined;

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_for_of(getGroups?.($global().filter), (group) => {
		const $scope1_id = _scope_id();
		_html(`<section><h2>${_escape(_hole_value($scope1_id, "PatchHole:#text/0", group.id, _persisted_reason()))}${_el_resume($scope1_id, "#text/0", _persisted_reason())}</h2>`);
		_for_of(group.items, (item) => {
			const $scope2_id = _scope_id();
			let watched = false;
			_html(`<button${_attr("data-key", _hole_value($scope2_id, "PatchAttr:data-key:#button/0", group.id + ":" + item.id, _persisted_reason()))}>${_escape(_hole_value($scope2_id, "PatchHole:#text/1", watched ? "watching" : "watch", _state_reason()))}${_el_resume($scope2_id, "#text/1")}</button>${_el_resume($scope2_id, "#button/0")}`);
			_script($scope2_id, "__tests__/template.marko_2");
			writeScope($scope2_id, {
				watched: _seed_fill(_state_reason() && watched),
				_: _persisted_reason() && _scope_with_id($scope1_id)
			}, "__tests__/template.marko", "6:6", { watched: "7:12" });
		}, "id", $scope1_id, "#text/1", _persisted_reason(), _persisted_reason(), _persisted_reason(), 0, 1, "__tests__/template.marko_2_update");
		_html("</section>");
		_persisted_reason() && writeScope($scope1_id, {}, "__tests__/template.marko", "3:2", { group_id: ["group.id", "3:6"] });
	}, "id", $scope0_id, "#text/0", _persisted_reason(), _persisted_reason(), _persisted_reason(), 0, 1, "__tests__/template.marko_1_update");
	_persisted_reason() && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
_renderer_shells({
	"__tests__/template.marko_2_update": ["<button> </button>", " D l"],
	"__tests__/template.marko_2_content": ["<button> </button>", " D l"],
	"__tests__/template.marko_1_update": ["<section><h2> </h2><!></section>", "E l%l"],
	"__tests__/template.marko_1_content": ["<section><h2> </h2><!></section>", "E l%l"],
	"__tests__/template.marko_0_update": ["<!><!><!>", "b%c"],
	"__tests__/template.marko": ["<!><!><!>", "b%c"]
});
