// data.ts
function getNav() {
	return [{
		title: "Start",
		pages: [{
			slug: "intro",
			title: "Intro"
		}, {
			slug: "setup",
			title: "Setup"
		}]
	}, {
		title: "Guides",
		pages: [{
			slug: "routing",
			title: "Routing"
		}, {
			slug: "data",
			title: "Data"
		}]
	}];
}
const REGIONS = [
	"na",
	"eu",
	"apac"
];

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $path__closures = new Set();
	const $region__closures = new Set();
	const path = $global().params.path;
	const region = $global().params.region;
	let count = 0;
	_html(`<button class=bump>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<nav>`);
	_for_of(getNav(), (section) => {
		const $scope1_id = _scope_id();
		_html(`<div><h4>${_escape(_hole_value($scope1_id, "PatchHole:#text/0", section.title, _persisted_reason()))}${_el_resume($scope1_id, "#text/0", _persisted_reason())}</h4>`);
		_for_of(section.pages, (page) => {
			const $scope2_id = _scope_id();
			_html(`<a${_attr_class(_hole_value($scope2_id, "PatchAttr:class:#a/0", ["link", { active: path === page.slug }], _persisted_reason()))}>${_escape(_hole_value($scope2_id, "PatchHole:#text/1", page.title, _persisted_reason()))}${_el_resume($scope2_id, "#text/1", _persisted_reason())}</a>${_el_resume($scope2_id, "#a/0", _persisted_reason())}`);
			_persisted_reason() && _subscribe($path__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "11:8"));
		}, "slug", $scope1_id, "#text/1", _persisted_reason(), _persisted_reason(), _persisted_reason(), 0, 1, "__tests__/template.marko_2_update");
		_html("</div>");
		_persisted_reason() && writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "8:4");
	}, 0, $scope0_id, "#nav/2", _persisted_reason(), _persisted_reason(), 0, "</nav>", 1, "__tests__/template.marko_1_update");
	_if(() => {
		if (REGIONS.length) {
			const $scope3_id = _scope_id();
			_html("<p>");
			_for_of(REGIONS, (r) => {
				const $scope4_id = _scope_id();
				_html(`<b${_attr_class(_hole_value($scope4_id, "PatchAttr:class:#b/0", region === r && "on", _persisted_reason()))}>${_escape(_hole_value($scope4_id, "PatchHole:#text/1", r, _persisted_reason()))}${_el_resume($scope4_id, "#text/1", _persisted_reason())}</b>${_el_resume($scope4_id, "#b/0", _persisted_reason())}`);
				_persisted_reason() && _subscribe($region__closures, writeScope($scope4_id, { _: _scope_with_id($scope3_id) }, "__tests__/template.marko", "19:6"));
			}, 0, $scope3_id, "#p/0", _persisted_reason(), _persisted_reason(), 0, "</p>", 1, "__tests__/template.marko_4_update");
			_persisted_reason() && writeScope($scope3_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "17:2");
			return 0;
		}
	}, $scope0_id, "#text/3", _persisted_reason(), _persisted_reason(), 0, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count: _state_reason() && count,
		"ClosureScopes:path": _persisted_reason() && $path__closures,
		"ClosureScopes:region": _persisted_reason() && $region__closures
	}, "__tests__/template.marko", 0, {
		path: "3:8",
		count: "5:6"
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_4_update": ["<b> </b>", " D l"],
	"__tests__/template.marko_4_content": ["<b> </b>", " D l"],
	"__tests__/template.marko_3_update": ["<p></p>", " b"],
	"__tests__/template.marko_3_content": ["<p></p>", " b"],
	"__tests__/template.marko_2_update": ["<a class=link> </a>", " D l"],
	"__tests__/template.marko_2_content": ["<a class=link> </a>", " D l"],
	"__tests__/template.marko_1_update": ["<div><h4> </h4><!></div>", "E l%l"],
	"__tests__/template.marko_1_content": ["<div><h4> </h4><!></div>", "E l%l"],
	"__tests__/template.marko_0_update": ["<button class=bump> </button><nav></nav><!><!>", " D l b%c"],
	"__tests__/template.marko": ["<button class=bump> </button><nav></nav><!><!>", " D l b%c"]
});
