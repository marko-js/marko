// template.marko
const site = {
	name: "Marko",
	tagline: undefined,
	counts: [
		10,
		20,
		30
	],
	nested: { deep: null }
};
const flags = { seen: false };
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<h1>Marko at 20</h1><p>no tagline yet</p><p>none</p><p>${_escape(site.counts.join("/"))}</p><button>mark seen</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
