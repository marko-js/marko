// data.ts
const view = { get current() {
	return typeof process === "undefined" ? "primary" : process.env.MARKO_OPAQUE_IF_VIEW || "primary";
} };

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>count <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => view.current === "primary" ? 0 : 1, $scope0_id, "#text/2", 1 | _persisted_reason(), 1, 0, 0, 1, "__tests__/template.marko_0/update_if_#text/2", [() => {
		const $scope1_id = _scope_id();
		_html("<p class=primary>primary</p>");
	}, () => {
		const $scope2_id = _scope_id();
		_html("<p class=fallback>fallback</p>");
	}], [0, 0], "__tests__/template.marko_r0");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _seed_fill(_state_reason() && count) }, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_0_update": ["<button>count <!></button><!><!>", " Db%l%c"],
	"__tests__/template.marko": ["<button>count <!></button><!><!>", " Db%l%c"]
});
