// data.ts
let count = typeof process === "undefined" ? 0 : Number(process.env.MARKO_REASONLESS_TAG_COUNT || 0);
function pickTemplate(first, second) {
	return ++count % 2 === 1 ? first : second;
}

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>count <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const Primary = { content: _content("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("<p class=primary>primary</p>");
	}) };
	const Fallback = { content: _content("__tests__/template.marko_2_content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html("<p class=fallback>fallback</p>");
	}) };
	_dynamic_tag($scope0_id, "#text/2", pickTemplate(Primary, Fallback), {}, 0, 0, 0 | _persisted_reason(), "__tests__/template.marko_0/update_dynamic_#text/2");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _seed_fill(_state_reason() && count) }, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_0_update": ["<button>count <!></button><!><!>", " Db%l%c"],
	"__tests__/template.marko": ["<button>count <!></button><!><!>", " Db%l%c"]
});
