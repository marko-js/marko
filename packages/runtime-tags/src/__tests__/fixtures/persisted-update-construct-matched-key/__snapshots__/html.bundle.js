// data.js
const getItems = typeof window === "undefined" ? (range) => [
	{
		id: 1,
		name: "alpha"
	},
	{
		id: 2,
		name: "beta"
	},
	range === "wide" && {
		id: 3,
		name: "gamma"
	}
].filter(Boolean) : void 0;

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<ul class=items>`);
	_region(() => {
		forOf(getItems?.($global().range), (item) => {
			const $scope1_id = _scope_id();
			_html(`<li>${_escape(item.name)}${_el_resume($scope1_id, "a", _persisted_reason())}</li>`);
			_persisted_reason() && writeScope($scope1_id, {});
		});
	}, $scope0_id, "c", "a1");
	_html(`</ul>${_el_resume($scope0_id, "c", _persisted_reason())}`);
	_script($scope0_id, "a2");
	writeScope($scope0_id, { d: _seed_fill(_state_reason() && count) });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a0": ["<button class=count>clicked <!></button><ul class=items></ul>", " Db%l b"],
	"a": ["<button class=count>clicked <!></button><ul class=items></ul>", " Db%l b"]
});
