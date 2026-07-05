// data.js
const getProfile = typeof window === "undefined" ? (user) => ({
	greeting: `hello ${user}`,
	plan: user === "ada" ? "pro" : "free"
}) : undefined;
function getReports(range) {
	if (typeof window !== "undefined") {
		throw new Error("getReports is server-only");
	}
	return resolveAfter([
		{
			name: "views",
			value: range === "week" ? 70 : 10
		},
		range === "week" && {
			name: "clicks",
			value: 21
		},
		range === "week" && {
			name: "sales",
			value: 7
		}
	].filter(Boolean), 1);
}

// tags/widget.marko
var widget_default = _template("__tests__/tags/widget.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let clicks = 0;
	_html(`<button class=widget>${_escape(_hole_value($scope0_id, "UpdateHole:#text/1", input.label, _persisted_reason()))}${_el_resume($scope0_id, "#text/1", _serialize_guard($scope0_reason, 0))} clicked <!>${_escape(clicks)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/widget.marko_0");
	writeScope($scope0_id, { clicks: _state_reason() && clicks }, "__tests__/tags/widget.marko", 0, { clicks: "1:6" });
	_resume_branch($scope0_id);
});

// tags/layout.marko
var layout_default = _template("__tests__/tags/layout.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<aside><button class=toggle>${open ? "collapse" : "expand"}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}</aside><section>`);
	_dynamic_tag($scope0_id, "#text/2", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0) | _persisted_reason());
	_html("</section>");
	_script($scope0_id, "__tests__/tags/layout.marko_0");
	writeScope($scope0_id, { open: _state_reason() && open }, "__tests__/tags/layout.marko", 0, { open: "1:6" });
	_resume_branch($scope0_id);
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
		_html("<p class=home>welcome home</p>");
	}) };
	const Reports = { content: _content("__tests__/template.marko_2_content", () => {
		const $scope2_id = _scope_id();
		const $Reports_content__profile_plan__closures = new Set();
		const $scope2_reason = _scope_reason();
		const profile = getProfile?.($global().user);
		_html(`<h2 class=greeting>${_escape(_hole_value($scope2_id, "UpdateHole:#text/0", profile.greeting, _persisted_reason()))}${_el_resume($scope2_id, "#text/0", _persisted_reason())}</h2>`);
		_try($scope2_id, "#text/1", _content_resume("__tests__/template.marko_3_content", () => {
			const $scope3_id = _scope_id();
			const $scope3_reason = _scope_reason();
			_await($scope3_id, "#text/0", getReports($global().range), (reports) => {
				const $scope4_id = _scope_id();
				_persisted_reason() && _script($scope4_id, "__tests__/template.marko_4_profile_plan/pending");
				const $childScope = _peek_scope_id();
				_set_serialize_reason(_persisted_reason());
				widget_default({ label: profile.plan });
				_html("<ul class=reports>");
				_for_of(reports, (report) => {
					const $scope6_id = _scope_id();
					_html(`<li${_attr_class(_hole_value($scope6_id, "UpdateAttr:class:#li/0", report.name === $global().focus && "focus", _persisted_reason()))}>${_escape(_hole_value($scope6_id, "UpdateHole:#text/1", report.name, _persisted_reason()))}${_el_resume($scope6_id, "#text/1", _persisted_reason())}: ${_sep(_persisted_reason())}${_escape(_hole_value($scope6_id, "UpdateHole:#text/2", report.value, _persisted_reason()))}${_el_resume($scope6_id, "#text/2", _persisted_reason())}</li>${_el_resume($scope6_id, "#li/0", _persisted_reason())}`);
					_persisted_reason() && writeScope($scope6_id, {}, "__tests__/template.marko", "21:10");
				}, 0, $scope4_id, "#ul/1", _persisted_reason(), _persisted_reason(), _persisted_reason(), "</ul>", 1);
				_persisted_reason() && writeScope($scope4_id, {
					_: _scope_with_id($scope3_id),
					"#childScope/0": _existing_scope($childScope)
				}, "__tests__/template.marko", "16:6");
				_resume_branch($scope4_id);
			}, _persisted_reason());
			_persisted_reason() && writeScope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "12:4");
		}, $scope2_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_5_content", () => {
			_scope_reason();
			const $scope5_id = _scope_id();
			_html("<p class=loading>crunching numbers…</p>");
		}, $scope2_id) }) });
		_html(`<p class=footer>updated ${_sep(_persisted_reason())}${_escape(_hole_value($scope2_id, "UpdateHole:#text/2", $global().stamp, _persisted_reason()))}${_el_resume($scope2_id, "#text/2", _persisted_reason())}</p>`);
		_persisted_reason() && writeScope($scope2_id, { "ClosureScopes:profile_plan": $Reports_content__profile_plan__closures }, "__tests__/template.marko", "9:2", { profile_plan: ["profile.plan", "10:10"] });
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
