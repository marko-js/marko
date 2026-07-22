// data.js
const ITEMS = [{ id: "one" }, { id: "two" }];

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const PanelA = { content: _content_resume("a2", () => {
		_scope_id();
		_scope_reason();
		_html("<strong>A</strong>");
	}, $scope0_id) };
	const PanelB = { content: _content_resume("a3", () => {
		_scope_id();
		_scope_reason();
		_html("<strong>B</strong>");
	}, $scope0_id) };
	let count = 0;
	_html(`<button>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_for_of($global().groups, (group) => {
		const $scope2_id = _scope_id();
		_html("<ul>");
		_for_of(ITEMS, (item) => {
			const $scope3_id = _scope_id();
			_html(`<li>${_escape(_hole_value($scope3_id, "Qa", item.id, _persisted_reason()))}${_el_resume($scope3_id, "a", _persisted_reason())}: `);
			_dynamic_tag($scope3_id, "b", group.views[item.id] === "b" ? PanelB : PanelA, {}, 0, 0, _persisted_reason() | _persisted_reason(), "a0");
			_html("</li>");
			_persisted_reason() && writeScope($scope3_id, { _: _scope_with_id($scope2_id) });
		}, "id", $scope2_id, "a", _persisted_reason(), _persisted_reason(), 0, "</ul>", 1, "a4");
		_persisted_reason() && writeScope($scope2_id, { _: _scope_with_id($scope0_id) });
	}, "id", $scope0_id, "c", _persisted_reason(), _persisted_reason(), _persisted_reason(), 0, 1, "a5");
	_script($scope0_id, "a6");
	writeScope($scope0_id, { f: _state_reason() && count });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a7": ["<strong>B</strong>", "b"],
	"a3": ["<strong>B</strong>", "b"],
	"a4": ["<li><!>: <!></li>", "D%c%l"],
	"a8": ["<li><!>: <!></li>", "D%c%l"],
	"a5": ["<ul></ul>", " b"],
	"a9": ["<ul></ul>", " b"],
	"a10": ["<strong>A</strong>", "b"],
	"a2": ["<strong>A</strong>", "b"],
	"a1": ["<button> </button><!><!>", " D l%c"],
	"a": ["<button> </button><!><!>", " D l%c"]
});
