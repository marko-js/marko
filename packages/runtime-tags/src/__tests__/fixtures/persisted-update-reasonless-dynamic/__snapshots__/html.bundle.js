// data.ts
let count = typeof process === "undefined" ? 0 : Number(process.env.MARKO_REASONLESS_TAG_COUNT || 0);
function pickTemplate(first, second) {
	return ++count % 2 === 1 ? first : second;
}

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>count <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "c", pickTemplate({ content: _content("a2", () => {
		_scope_id();
		_scope_reason();
		_html("<p class=primary>primary</p>");
	}) }, { content: _content("a3", () => {
		_scope_id();
		_scope_reason();
		_html("<p class=fallback>fallback</p>");
	}) }), {}, 0, 0, 0 | _persisted_reason(), "a0");
	_script($scope0_id, "a4");
	writeScope($scope0_id, { d: _seed_fill(_state_reason() && count) });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a1": ["<button>count <!></button><!><!>", " Db%l%c"],
	"a": ["<button>count <!></button><!><!>", " Db%l%c"]
});
