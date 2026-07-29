// data.js
const getItems = typeof window === "undefined" ? (filter) => Array.from({ length: filter === "Toys & Games" ? 10 : 50 }, (_, i) => ({
	id: i + 1,
	name: i ? `item ${i + 1}` : "Elite Tool 1"
})) : void 0;

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(getItems?.($global().filter), (item) => {
		const $scope1_id = _scope_id();
		let watched = false;
		_html(`<li><span>${_escape(_hole_value($scope1_id, "Qa", item.name, _persisted_reason()))}${_el_resume($scope1_id, "a", _persisted_reason())}</span><button${_attr("data-id", _hole_value($scope1_id, "Ndata-id:b", item.id, _persisted_reason()))}>${_escape(_hole_value($scope1_id, "Qc", "watch", _state_reason()))}${_el_resume($scope1_id, "c")}</button>${_el_resume($scope1_id, "b")}</li>`);
		_script($scope1_id, "a1");
		writeScope($scope1_id, { h: _seed_fill(_state_reason() && watched) });
	}, function(item) {
		return item.id;
	}, $scope0_id, "a", _persisted_reason(), _persisted_reason(), _persisted_reason(), "</ul>", 1, "a2");
	_persisted_reason() && writeScope($scope0_id, {});
}, 1);
_renderer_shells({
	"a2": ["<li><span> </span><button> </button></li>", "E l D m"],
	"a3": ["<li><span> </span><button> </button></li>", "E l D m"],
	"a0": ["<ul></ul>", " b"],
	"a": ["<ul></ul>", " b"]
});
