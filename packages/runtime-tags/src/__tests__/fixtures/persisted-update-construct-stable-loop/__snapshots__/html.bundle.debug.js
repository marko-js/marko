// data.js
const ITEMS = [{ id: "one" }, { id: "two" }];

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const PanelA = { content: _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("<strong>A</strong>");
	}, $scope0_id) };
	const PanelB = { content: _content_resume("__tests__/template.marko_4_content", () => {
		const $scope4_id = _scope_id();
		_scope_reason();
		_html("<strong>B</strong>");
	}, $scope0_id) };
	let count = 0;
	_html(`<button>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_for_of($global().groups, (group) => {
		const $scope2_id = _scope_id();
		_html("<ul>");
		_for_of(ITEMS, (item) => {
			const $scope3_id = _scope_id();
			_html(`<li>${_escape(_hole_value($scope3_id, "PatchHole:#text/0", item.id, _persisted_reason()))}${_el_resume($scope3_id, "#text/0", _persisted_reason())}: `);
			_dynamic_tag($scope3_id, "#text/1", group.views[item.id] === "b" ? PanelB : PanelA, {}, 0, 0, _persisted_reason() | _persisted_reason(), "__tests__/template.marko_3/update_dynamic_#text/1");
			_html("</li>");
			_persisted_reason() && writeScope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "14:6");
		}, "id", $scope2_id, "#ul/0", _persisted_reason(), _persisted_reason(), 0, "</ul>", 1, "__tests__/template.marko_3_update");
		_persisted_reason() && writeScope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "12:2");
	}, "id", $scope0_id, "#text/2", _persisted_reason(), _persisted_reason(), _persisted_reason(), 0, 1, "__tests__/template.marko_2_update");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _state_reason() && count }, "__tests__/template.marko", 0, {
		PanelA: "3:9",
		PanelB: "6:9",
		count: "10:6"
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_3_update": ["<li><!>: <!></li>", "D%c%l"],
	"__tests__/template.marko_3_content": ["<li><!>: <!></li>", "D%c%l"],
	"__tests__/template.marko_2_update": ["<ul></ul>", " b"],
	"__tests__/template.marko_2_content": ["<ul></ul>", " b"],
	"__tests__/template.marko_0_update": ["<button> </button><!><!>", " D l%c"],
	"__tests__/template.marko": ["<button> </button><!><!>", " D l%c"]
});
