// data.js
const getProfile = typeof window === "undefined" ? (user) => ({
	greeting: `hello ${user}`,
	plan: user === "ada" ? "pro" : "free"
}) : void 0;
function getReports(range) {
	if (typeof window !== "undefined") throw new Error("getReports is server-only");
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
var widget_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let clicks = 0;
	_html(`<button class=widget>${_escape(_hole_value($scope0_id, "Qb", input.label, _persisted_reason()))}${_el_resume($scope0_id, "b", _serialize_guard($scope0_reason, 0))} clicked <!>${_escape(clicks)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "c1");
	writeScope($scope0_id, { g: _state_reason() && clicks });
	_resume_branch($scope0_id);
});

// tags/layout.marko
var layout_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<aside><button class=toggle>expand${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}</aside><section>`);
	_dynamic_tag($scope0_id, "c", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0) | _persisted_reason(), "b0");
	_html("</section>");
	_script($scope0_id, "b2");
	writeScope($scope0_id, { g: _state_reason() && open });
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const Home = { content: _content("a1", () => {
		_scope_id();
		_scope_reason();
		_html("<p class=home>welcome home</p>");
	}) };
	const Reports = { content: _content("a2", () => {
		const $scope2_id = _scope_id();
		const $Reports_content__profile_plan__closures = /* @__PURE__ */ new Set();
		_scope_reason();
		const profile = getProfile?.($global().user);
		_html(`<h2 class=greeting>${_escape(_hole_value($scope2_id, "Qa", profile.greeting, _persisted_reason()))}${_el_resume($scope2_id, "a", _persisted_reason())}</h2>`);
		_try($scope2_id, "b", _content_resume("a3", () => {
			const $scope3_id = _scope_id();
			_scope_reason();
			_await($scope3_id, "a", getReports($global().range), (reports) => {
				const $scope4_id = _scope_id();
				_persisted_reason() && _script($scope4_id, "a9");
				const $childScope = _peek_scope_id();
				_set_serialize_reason(_persisted_reason());
				widget_default({ label: profile.plan });
				_html("<ul class=reports>");
				_for_of(reports, (report) => {
					const $scope6_id = _scope_id();
					_html(`<li${_attr_class(_hole_value($scope6_id, "Nclass:a", report.name === $global().focus && "focus", _persisted_reason()))}>${_escape(_hole_value($scope6_id, "Qb", report.name, _persisted_reason()))}${_el_resume($scope6_id, "b", _persisted_reason())}: ${_sep(_persisted_reason())}${_escape(_hole_value($scope6_id, "Qc", report.value, _persisted_reason()))}${_el_resume($scope6_id, "c", _persisted_reason())}</li>${_el_resume($scope6_id, "a", _persisted_reason())}`);
					_persisted_reason() && writeScope($scope6_id, {});
				}, 0, $scope4_id, "b", _persisted_reason(), _persisted_reason(), _persisted_reason(), "</ul>", 1, "a8");
				_persisted_reason() && writeScope($scope4_id, {
					_: _scope_with_id($scope3_id),
					a: _existing_scope($childScope)
				});
				_resume_branch($scope4_id);
			}, _persisted_reason());
			_persisted_reason() && writeScope($scope3_id, { _: _scope_with_id($scope2_id) });
		}, $scope2_id), { placeholder: attrTag({ content: _content_resume("a5", () => {
			_scope_reason();
			_scope_id();
			_html("<p class=loading>crunching numbers…</p>");
		}, $scope2_id) }) }, "a0");
		_html(`<p class=footer>updated ${_sep(_persisted_reason())}${_escape(_hole_value($scope2_id, "Qc", $global().stamp, _persisted_reason()))}${_el_resume($scope2_id, "c", _persisted_reason())}</p>`);
		_persisted_reason() && writeScope($scope2_id, { g: $Reports_content__profile_plan__closures });
	}) };
	const $childScope2 = _peek_scope_id();
	_set_serialize_reason(_persisted_reason());
	layout_default({ content: $global().view === "reports" ? Reports : Home });
	_script($scope0_id, "a10");
	writeScope($scope0_id, {
		d: _state_reason() && count,
		c: _persisted_reason() && _existing_scope($childScope2)
	});
	_resume_branch($scope0_id);
}, 1);
