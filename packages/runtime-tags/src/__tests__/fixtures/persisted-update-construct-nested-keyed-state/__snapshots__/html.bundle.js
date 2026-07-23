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
}] : groups : void 0;

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_for_of(getGroups?.($global().filter), (group) => {
		const $scope1_id = _scope_id();
		_html(`<section><h2>${_escape(_hole_value($scope1_id, "Qa", group.id, _persisted_reason()))}${_el_resume($scope1_id, "a", _persisted_reason())}</h2>`);
		_for_of(group.items, (item) => {
			const $scope2_id = _scope_id();
			let watched = false;
			_html(`<button${_attr("data-key", _hole_value($scope2_id, "Ndata-key:a", group.id + ":" + item.id, _persisted_reason()))}>${_escape(_hole_value($scope2_id, "Qb", "watch", _state_reason()))}${_el_resume($scope2_id, "b")}</button>${_el_resume($scope2_id, "a")}`);
			_script($scope2_id, "a1");
			writeScope($scope2_id, {
				g: _state_reason() && watched,
				_: _persisted_reason() && _scope_with_id($scope1_id)
			});
		}, "id", $scope1_id, "b", _persisted_reason(), _persisted_reason(), _persisted_reason(), 0, 1, "a2");
		_html("</section>");
		_persisted_reason() && writeScope($scope1_id, {});
	}, "id", $scope0_id, "a", _persisted_reason(), _persisted_reason(), _persisted_reason(), 0, 1, "a3");
	_persisted_reason() && writeScope($scope0_id, {});
}, 1);
_renderer_shells({
	"a2": ["<button> </button>", " D l"],
	"a4": ["<button> </button>", " D l"],
	"a3": ["<section><h2> </h2><!></section>", "E l%l"],
	"a5": ["<section><h2> </h2><!></section>", "E l%l"],
	"a0": ["<!><!><!>", "b%c"],
	"a": ["<!><!><!>", "b%c"]
});
