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
	_region(() => {
		forOf(getNav(), (section) => {
			const $scope1_id = _scope_id();
			_html(`<div><h4>${_escape(section.title)}</h4>`);
			forOf(section.pages, (page) => {
				const $scope2_id = _scope_id();
				_html(`<a class=${path === page.slug ? "\"link active\"" : "link"}>${_escape(page.title)}</a>${_el_resume($scope2_id, "a", _persisted_reason())}`);
				_persisted_reason() && _subscribe($path__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }));
			});
			_html("</div>");
			_persisted_reason() && writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
		});
	}, $scope0_id, "c", "a2");
	_html("</nav>");
	_if(() => REGIONS.length ? 0 : void 0, $scope0_id, "d", 1 | _persisted_reason(), 1, 0, 0, 1, "a0", [() => {
		const $scope3_id = _scope_id();
		_html("<p>");
		forOf(REGIONS, (r) => {
			const $scope4_id = _scope_id();
			_html(`<b${region === r ? " class=on" : ""}>${_escape(r)}</b>${_el_resume($scope4_id, "a", _persisted_reason())}`);
			_persisted_reason() && _subscribe($region__closures, writeScope($scope4_id, { _: _scope_with_id($scope3_id) }));
		});
		_html("</p>");
		_persisted_reason() && writeScope($scope3_id, { _: _scope_with_id($scope0_id) });
	}], [0], "a3");
	_script($scope0_id, "a4");
	writeScope($scope0_id, {
		g: _seed_fill(_state_reason() && count),
		h: _persisted_reason() && $path__closures,
		i: _persisted_reason() && $region__closures
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a1": ["<button class=bump> </button><nav></nav><!><!>", " D l b%c"],
	"a": ["<button class=bump> </button><nav></nav><!><!>", " D l b%c"]
});
