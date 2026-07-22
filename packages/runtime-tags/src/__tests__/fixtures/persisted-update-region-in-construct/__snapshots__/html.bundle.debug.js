// data.js
const getRows = typeof window === "undefined" ? (kind) => [`${kind} one`, `${kind} two`] : undefined;

// tags/sticky.marko
var sticky_default = _template("__tests__/tags/sticky.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=sticky>s<!>${_escape(n)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/sticky.marko_0");
	writeScope($scope0_id, { n: _state_reason() && n }, "__tests__/tags/sticky.marko", 0, { n: "1:6" });
	_resume_branch($scope0_id);
});
_renderer_shells({
	"__tests__/tags/sticky.marko_0_update": ["<button class=sticky>s<!></button>", " Db%l"],
	"__tests__/tags/sticky.marko": ["<button class=sticky>s<!></button>", " Db%l"]
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const Alpha = { content: _content("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("<section class=a><p>alpha</p></section>");
	}) };
	const Beta = { content: _content("__tests__/template.marko_2_content", () => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html("<section class=b><ul>");
		_region(() => {
			forOf(getRows?.($global().kind), (row) => {
				const $scope3_id = _scope_id();
				_html(`<li>${_escape(row)}${_el_resume($scope3_id, "#text/0", _persisted_reason())}</li>`);
				_persisted_reason() && writeScope($scope3_id, {}, "__tests__/template.marko", "14:8");
			});
		}, $scope2_id, "#ul/0");
		_html(`</ul>${_el_resume($scope2_id, "#ul/0", _persisted_reason())}`);
		const $childScope = _peek_scope_id();
		sticky_default({});
		_try($scope2_id, "#text/2", _content_resume("__tests__/template.marko_4_content", () => {
			const $scope4_id = _scope_id();
			_scope_reason();
			_await($scope4_id, "#text/0", resolveAfter(undefined, 1), () => {
				const $scope6_id = _scope_id();
				_html("<div class=reviews>");
				_region(() => {
					forTo(3, 1, 1, (i) => {
						const $scope7_id = _scope_id();
						_html(`<div class=review>review ${_escape(i)}</div>`);
					});
				}, $scope6_id, "#div/0");
				_html("</div>");
			}, 0, "__tests__/template.marko_6_update");
		}, $scope2_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_5_content", () => {
			_scope_reason();
			const $scope5_id = _scope_id();
			_html("loading…");
		}, $scope2_id) }) }, "__tests__/template.marko_2/update_boundary_#text/2", "__tests__/template.marko_4_update");
		_html("</section>");
		_persisted_reason() && writeScope($scope2_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", "11:2");
	}) };
	_dynamic_tag($scope0_id, "#text/2", $global().view === "b" ? Beta : Alpha, {}, 0, 0, _persisted_reason() | _persisted_reason(), "__tests__/template.marko_0/update_dynamic_#text/2");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _state_reason() && count }, "__tests__/template.marko", 0, { count: "5:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_6_update": ["<div class=reviews></div>", " b"],
	"__tests__/template.marko_6_content": ["<div class=reviews></div>", " b"],
	"__tests__/template.marko_4_update": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_4_content": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_2_update": [[
		"<section class=b><ul></ul>",
		["__tests__/tags/sticky.marko"],
		"<!></section>"
	], [
		"D b/",
		["__tests__/tags/sticky.marko"],
		"&%l"
	]],
	"__tests__/template.marko_2_content": [[
		"<section class=b><ul></ul>",
		["__tests__/tags/sticky.marko"],
		"<!></section>"
	], [
		"D b/",
		["__tests__/tags/sticky.marko"],
		"&%l"
	]],
	"__tests__/template.marko_0_update": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"],
	"__tests__/template.marko": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"]
});
