// data.js
const getRows = typeof window === "undefined" ? (kind) => [`${kind} one`, `${kind} two`] : void 0;

// tags/sticky.marko
var sticky_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=sticky>s<!>${_escape(n)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b1");
	writeScope($scope0_id, { c: _state_reason() && n });
	_resume_branch($scope0_id);
});
_renderer_shells({
	"b0": ["<button class=sticky>s<!></button>", " Db%l"],
	"b": ["<button class=sticky>s<!></button>", " Db%l"]
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const Alpha = { content: _content("a3", () => {
		_scope_id();
		_scope_reason();
		_html("<section class=a><p>alpha</p></section>");
	}) };
	const Beta = { content: _content("a8", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html("<section class=b><ul>");
		_region(() => {
			forOf(getRows?.($global().kind), (row) => {
				const $scope3_id = _scope_id();
				_html(`<li>${_escape(row)}${_el_resume($scope3_id, "a", _persisted_reason())}</li>`);
				_persisted_reason() && writeScope($scope3_id, {});
			});
		}, $scope2_id, "a");
		_html(`</ul>${_el_resume($scope2_id, "a", _persisted_reason())}`);
		const $childScope = _peek_scope_id();
		sticky_default({});
		_try($scope2_id, "d", _content_resume("a6", () => {
			const $scope4_id = _scope_id();
			_scope_reason();
			_await($scope4_id, "a", resolveAfter(void 0, 1), () => {
				const $scope6_id = _scope_id();
				_html("<div class=reviews>");
				_region(() => {
					forTo(3, 1, 1, (i) => {
						_scope_id();
						_html(`<div class=review>review ${_escape(i)}</div>`);
					});
				}, $scope6_id, "a");
				_html("</div>");
			}, 0, "a4");
		}, $scope2_id), { placeholder: attrTag({ content: _content_resume("a5", () => {
			_scope_reason();
			_scope_id();
			_html("loading…");
		}, $scope2_id) }) }, "a0", "a7");
		_html("</section>");
		_persisted_reason() && writeScope($scope2_id, { b: _existing_scope($childScope) });
	}) };
	_dynamic_tag($scope0_id, "c", $global().view === "b" ? Beta : Alpha, {}, 0, 0, _persisted_reason() | _persisted_reason(), "a1");
	_script($scope0_id, "a9");
	writeScope($scope0_id, { d: _state_reason() && count });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a4": ["<div class=reviews></div>", " b"],
	"a10": ["<div class=reviews></div>", " b"],
	"a7": ["<!><!><!>", "b%c"],
	"a6": ["<!><!><!>", "b%c"],
	"a11": [[
		"<section class=b><ul></ul>",
		["b"],
		"<!><!></section>"
	], [
		"D b/",
		["b"],
		"&%b%l"
	]],
	"a8": [[
		"<section class=b><ul></ul>",
		["b"],
		"<!><!></section>"
	], [
		"D b/",
		["b"],
		"&%b%l"
	]],
	"a2": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"],
	"a": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"]
});
