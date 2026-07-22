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
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $path__closures = /* @__PURE__ */ new Set();
	const $region__closures = /* @__PURE__ */ new Set();
	const path = $global().params.path;
	const region = $global().params.region;
	let count = 0;
	_html(`<button class=bump>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<nav>`);
	_for_of(getNav(), (section) => {
		const $scope1_id = _scope_id();
		_html(`<div><h4>${_escape(_hole_value($scope1_id, "Qa", section.title, _persisted_reason()))}${_el_resume($scope1_id, "a", _persisted_reason())}</h4>`);
		_for_of(section.pages, (page) => {
			const $scope2_id = _scope_id();
			_html(`<a${_attr_class(_hole_value($scope2_id, "Nclass:a", ["link", { active: path === page.slug }], _persisted_reason()))}>${_escape(_hole_value($scope2_id, "Qb", page.title, _persisted_reason()))}${_el_resume($scope2_id, "b", _persisted_reason())}</a>${_el_resume($scope2_id, "a", _persisted_reason())}`);
			_persisted_reason() && _subscribe($path__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }));
		}, "slug", $scope1_id, "b", _persisted_reason(), _persisted_reason(), _persisted_reason(), 0, 1, "a1");
		_html("</div>");
		_persisted_reason() && writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "c", _persisted_reason(), _persisted_reason(), 0, "</nav>", 1, "a2");
	_if(() => {
		if (REGIONS.length) {
			const $scope3_id = _scope_id();
			_html("<p>");
			_for_of(REGIONS, (r) => {
				const $scope4_id = _scope_id();
				_html(`<b${_attr_class(_hole_value($scope4_id, "Nclass:a", region === r && "on", _persisted_reason()))}>${_escape(_hole_value($scope4_id, "Qb", r, _persisted_reason()))}${_el_resume($scope4_id, "b", _persisted_reason())}</b>${_el_resume($scope4_id, "a", _persisted_reason())}`);
				_persisted_reason() && _subscribe($region__closures, writeScope($scope4_id, { _: _scope_with_id($scope3_id) }));
			}, 0, $scope3_id, "a", _persisted_reason(), _persisted_reason(), 0, "</p>", 1, "a3");
			_persisted_reason() && writeScope($scope3_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "d", _persisted_reason(), _persisted_reason(), 0, 0, 1);
	_script($scope0_id, "a4");
	writeScope($scope0_id, {
		g: _state_reason() && count,
		h: _persisted_reason() && $path__closures,
		i: _persisted_reason() && $region__closures
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a3": ["<b> </b>", " D l"],
	"a5": ["<b> </b>", " D l"],
	"a6": ["<p></p>", " b"],
	"a7": ["<p></p>", " b"],
	"a1": ["<a class=link> </a>", " D l"],
	"a8": ["<a class=link> </a>", " D l"],
	"a2": ["<div><h4> </h4><!></div>", "E l%l"],
	"a9": ["<div><h4> </h4><!></div>", "E l%l"],
	"a0": ["<button class=bump> </button><nav></nav><!><!>", " D l b%c"],
	"a": ["<button class=bump> </button><nav></nav><!><!>", " D l b%c"]
});
