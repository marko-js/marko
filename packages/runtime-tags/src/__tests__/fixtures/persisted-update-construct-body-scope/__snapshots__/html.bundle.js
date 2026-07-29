// data.js
function getData(range) {
	if (typeof window !== "undefined") throw new Error("getData is server-only");
	return resolveAfter({ total: range === "week" ? 50 : 10 }, 1);
}

// tags/mounter.marko
var mounter_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "c1");
	writeScope($scope0_id, { c: input.onReady });
	_resume_branch($scope0_id);
});
_renderer_shells({
	"c0": ["", ""],
	"c": ["", ""]
});

// tags/layout.marko
var layout_default = _template("b", (input) => {
	const $sg__input_content = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $sg__input_content | _persisted_reason(), "b0");
	_html("</section>");
	$sg__input_content && writeScope($scope0_id, {});
});
_renderer_shells({
	"b1": ["<section><!></section>", "D%l"],
	"b": ["<section><!></section>", "D%l"]
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const Home = { content: _content("a3", () => {
		_scope_id();
		_scope_reason();
		_html("<p class=home>home</p>");
	}) };
	const Reports = { content: _content("a8", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_try($scope2_id, "a", _content_resume("a6", () => {
			const $scope3_id = _scope_id();
			_scope_reason();
			_await($scope3_id, "a", getData($global().range), (data) => {
				const $scope5_id = _scope_id();
				let ready = false;
				const $childScope = _peek_scope_id();
				mounter_default({ onReady: _resume(function() {
					ready = true;
				}, "a0", $scope5_id) });
				_html(`<p class=status>${_escape(_hole_value($scope5_id, "Qc", ready ? "ready" : "waiting", _state_reason()))}${_el_resume($scope5_id, "c")} of ${_sep(_persisted_reason())}${_escape(_hole_value($scope5_id, "Qd", data.total, _persisted_reason()))}${_el_resume($scope5_id, "d", _persisted_reason())}</p>`);
				writeScope($scope5_id, {
					h: _seed_fill(_state_reason() && ready),
					a: _persisted_reason() && _existing_scope($childScope)
				});
				_resume_branch($scope5_id);
			}, 0, "a4");
		}, $scope2_id), { placeholder: attrTag({ content: _content_resume("a5", () => {
			_scope_reason();
			_scope_id();
			_html("<p class=loading>loading…</p>");
		}, $scope2_id) }) }, "a1", "a7");
	}) };
	_set_serialize_reason(_persisted_reason());
	const $childScope2 = _peek_scope_id();
	layout_default({ content: $global().view === "reports" ? Reports : Home });
	_script($scope0_id, "a9");
	writeScope($scope0_id, {
		e: _seed_fill(_state_reason() && count),
		c: _persisted_reason() && _existing_scope($childScope2)
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a4": [[["c"], "<!><p class=status><!> of <!></p>"], [
		"/",
		["c"],
		"&%bD%c%l"
	]],
	"a10": [[["c"], "<!><p class=status><!> of <!></p>"], [
		"/",
		["c"],
		"&%bD%c%l"
	]],
	"a7": ["<!><!><!>", "b%c"],
	"a6": ["<!><!><!>", "b%c"],
	"a11": ["<!><!><!>", "b%c"],
	"a8": ["<!><!><!>", "b%c"],
	"a2": [[
		"<button class=count>clicked <!></button>",
		["b"],
		"<!>"
	], [
		" Db%l/",
		["b"],
		"&%b"
	]],
	"a": [[
		"<button class=count>clicked <!></button>",
		["b"],
		"<!>"
	], [
		" Db%l/",
		["b"],
		"&%b"
	]]
});
