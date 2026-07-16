// data.js
function getData(range) {
	if (typeof window !== "undefined") {
		throw new Error("getData is server-only");
	}
	return resolveAfter({ total: range === "week" ? 50 : 10 }, 1);
}

// tags/mounter.marko
var mounter_default = _template("__tests__/tags/mounter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "__tests__/tags/mounter.marko_0_input_onReady");
	writeScope($scope0_id, { input_onReady: input.onReady }, "__tests__/tags/mounter.marko", 0, { input_onReady: ["input.onReady"] });
	_resume_branch($scope0_id);
});

// tags/layout.marko
var layout_default = _template("__tests__/tags/layout.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $sg__input_content | _persisted_reason(), "__tests__/tags/layout.marko_0/update_dynamic_#text/0");
	_html("</section>");
	$sg__input_content && writeScope($scope0_id, {}, "__tests__/tags/layout.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const Home = { content: _content("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("<p class=home>home</p>");
	}) };
	const Reports = { content: _content("__tests__/template.marko_2_content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_try($scope2_id, "#text/0", _content_resume("__tests__/template.marko_3_content", () => {
			const $scope3_id = _scope_id();
			_scope_reason();
			_await($scope3_id, "#text/0", getData($global().range), (data) => {
				const $scope5_id = _scope_id();
				let ready = false;
				const $childScope = _peek_scope_id();
				mounter_default({ onReady: _resume(function() {
					ready = true;
				}, "__tests__/template.marko_5/onReady", $scope5_id) });
				_html(`<p class=status>${ready ? "ready" : "waiting"}${_el_resume($scope5_id, "#text/1")} of ${_sep(_persisted_reason())}${_escape(_hole_value($scope5_id, "PatchHole:#text/2", data.total, _persisted_reason()))}${_el_resume($scope5_id, "#text/2", _persisted_reason())}</p>`);
				writeScope($scope5_id, { "#childScope/0": _persisted_reason() && _existing_scope($childScope) }, "__tests__/template.marko", "14:6");
				_resume_branch($scope5_id);
			}, 1 | _persisted_reason());
		}, $scope2_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_4_content", () => {
			_scope_reason();
			const $scope4_id = _scope_id();
			_html("<p class=loading>loading…</p>");
		}, $scope2_id) }) }, "__tests__/template.marko_2/update_boundary_#text/0");
	}) };
	const $childScope2 = _peek_scope_id();
	_set_serialize_reason(_persisted_reason());
	layout_default({ content: $global().view === "reports" ? Reports : Home });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count: _state_reason() && count,
		"#childScope/2": _persisted_reason() && _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
