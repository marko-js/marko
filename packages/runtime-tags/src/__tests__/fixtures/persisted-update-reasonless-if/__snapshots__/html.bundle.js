// data.ts
let count = typeof process === "undefined" ? 0 : Number(process.env.MARKO_REASONLESS_IF_COUNT || 0);
function showPrimary() {
	return ++count % 2 === 1;
}

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>count <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => showPrimary() ? 0 : 1, $scope0_id, "c", 1 | _persisted_reason(), 1, 0, 0, 1, "a0", [() => {
		_scope_id();
		_html("<p class=primary>primary</p>");
	}, () => {
		_scope_id();
		_html("<p class=fallback>fallback</p>");
	}], [0, 0], "a2");
	_script($scope0_id, "a3");
	writeScope($scope0_id, { d: _seed_fill(_state_reason() && count) });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a1": ["<button>count <!></button><!><!>", " Db%l%c"],
	"a": ["<button>count <!></button><!><!>", " Db%l%c"]
});
