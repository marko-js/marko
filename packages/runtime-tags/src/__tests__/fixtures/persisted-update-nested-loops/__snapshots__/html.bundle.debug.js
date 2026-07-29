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
	_region(() => {
		forOf(getNav(), (section) => {
			const $scope1_id = _scope_id();
			_html(`<div><h4>${_escape(section.title)}</h4>`);
			forOf(section.pages, (page) => {
				const $scope2_id = _scope_id();
				_html(`<a class=${path === page.slug ? "\"link active\"" : "link"}>${_escape(page.title)}</a>${_el_resume($scope2_id, "#a/0", _persisted_reason())}`);
				_persisted_reason() && _subscribe($path__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "11:8", { page_slug: ["page.slug", "11:12"] }));
			});
			_html("</div>");
			_persisted_reason() && writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "8:4");
		});
	}, $scope0_id, "#nav/2", "__tests__/template.marko_r0");
	_html("</nav>");
	_if(() => REGIONS.length ? 0 : undefined, $scope0_id, "#text/3", 1 | _persisted_reason(), 1, 0, 0, 1, "__tests__/template.marko_0/update_if_#text/3", [() => {
		const $scope3_id = _scope_id();
		_html("<p>");
		forOf(REGIONS, (r) => {
			const $scope4_id = _scope_id();
			_html(`<b${region === r ? " class=on" : ""}>${_escape(r)}</b>${_el_resume($scope4_id, "#b/0", _persisted_reason())}`);
			_persisted_reason() && _subscribe($region__closures, writeScope($scope4_id, { _: _scope_with_id($scope3_id) }, "__tests__/template.marko", "19:6", { r: "19:10" }));
		});
		_html("</p>");
		_persisted_reason() && writeScope($scope3_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "17:2");
	}], [0], "__tests__/template.marko_r1");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count: _seed_fill(_state_reason() && count),
		"ClosureScopes:path": _persisted_reason() && $path__closures,
		"ClosureScopes:region": _persisted_reason() && $region__closures
	}, "__tests__/template.marko", 0, { count: "5:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_0_update": ["<button class=bump> </button><nav></nav><!><!>", " D l b%c"],
	"__tests__/template.marko": ["<button class=bump> </button><nav></nav><!><!>", " D l b%c"]
});
