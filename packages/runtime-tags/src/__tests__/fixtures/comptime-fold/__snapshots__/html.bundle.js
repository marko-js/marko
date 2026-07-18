// template.marko
const site = {
	name: "Marko",
	tagline: void 0,
	counts: [
		10,
		20,
		30
	],
	nested: { deep: null }
};
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<h1>Marko at 20</h1><p>no tagline yet</p><p>none</p><p>${_escape(site.counts.join("/"))}</p><button>mark seen</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {});
}, 1);
