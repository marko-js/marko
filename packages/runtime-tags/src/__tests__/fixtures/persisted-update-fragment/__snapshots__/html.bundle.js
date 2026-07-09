// data.js
const getSession = typeof window === "undefined" ? (user) => ({
	greeting: `hello ${user}`,
	plan: user === "ada" ? "pro" : "free"
}) : void 0;
const getMetrics = typeof window === "undefined" ? (range) => [
	{
		name: "views",
		value: range === "week" ? 70 : 10
	},
	{
		name: "clicks",
		value: range === "week" ? 21 : 3
	},
	range === "week" && {
		name: "sales",
		value: 7
	}
].filter(Boolean) : void 0;

// tags/store.marko
var store_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = 0;
	const $return = value;
	_script($scope0_id, "c1");
	writeScope($scope0_id, { U: _state_reason() && (_resume(function(next) {
		value = next + $global().step;
	}, "c0", $scope0_id) || void 0) });
	_resume_branch($scope0_id);
	return $return;
});

// tags/widget.marko
var widget_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let clicks = 0;
	_html(`<button class=widget>${_escape(_hole_value($scope0_id, "Qb", input.label, _persisted_reason()))}${_el_resume($scope0_id, "b", _serialize_guard($scope0_reason, 0))} clicked <!>${_escape(clicks)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "d0");
	writeScope($scope0_id, { g: _state_reason() && clicks });
	_resume_branch($scope0_id);
});

// tags/layout.marko
var layout_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<aside><button class=toggle>expand${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}</aside><section>`);
	_dynamic_tag($scope0_id, "c", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0) | _persisted_reason(), "b1");
	_html("</section>");
	_script($scope0_id, "b0");
	writeScope($scope0_id, { g: _state_reason() && open });
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const Home = { content: _content("a2", () => {
		_scope_id();
		_scope_reason();
		_html("<p class=home>welcome home</p>");
	}) };
	const Dashboard = { content: _content("a7", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		const session = getSession?.($global().user);
		_html(`<h2 class=greeting>${_escape(_hole_value($scope2_id, "Qa", session.greeting, _persisted_reason()))}${_el_resume($scope2_id, "a", _persisted_reason())}</h2>`);
		const $childScope = _peek_scope_id();
		let tally = store_default({});
		_var($scope2_id, "c", $childScope, "a3");
		_html(`<button class=bump>tally <!>${_escape(tally)}${_el_resume($scope2_id, "e")}</button>${_el_resume($scope2_id, "d")}`);
		const $childScope2 = _peek_scope_id();
		_set_serialize_reason(_persisted_reason());
		widget_default({ label: session.plan });
		_html("<ul class=metrics>");
		_for_of(getMetrics?.($global().range), (metric) => {
			const $scope3_id = _scope_id();
			_html(`<li${_attr_class(_hole_value($scope3_id, "Nclass:a", metric.name === $global().focus && "focus", _persisted_reason()))}>${_escape(_hole_value($scope3_id, "Qb", metric.name, _persisted_reason()))}${_el_resume($scope3_id, "b", _persisted_reason())}: ${_sep(_persisted_reason())}${_escape(_hole_value($scope3_id, "Qc", metric.value, _persisted_reason()))}${_el_resume($scope3_id, "c", _persisted_reason())}</li>${_el_resume($scope3_id, "a", _persisted_reason())}`);
			_persisted_reason() && writeScope($scope3_id, {});
		}, function(metric) {
			return metric.name;
		}, $scope2_id, "g", _persisted_reason(), _persisted_reason(), _persisted_reason(), "</ul>", 1);
		_if(() => {
			if ($global().admin) {
				const $scope4_id = _scope_id();
				_html("<p class=admin>admin tools enabled</p>");
				_persisted_reason() && writeScope($scope4_id, {});
				return 0;
			}
		}, $scope2_id, "h", _persisted_reason(), _persisted_reason(), _persisted_reason(), 0, 1);
		_script($scope2_id, "a4");
		writeScope($scope2_id, {
			l: _state_reason() && tally,
			b: _existing_scope($childScope),
			f: _persisted_reason() && _existing_scope($childScope2)
		});
	}) };
	const $childScope3 = _peek_scope_id();
	_set_serialize_reason(_persisted_reason());
	layout_default({ content: $global().view === "dashboard" ? Dashboard : Home });
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		d: _state_reason() && count,
		c: _persisted_reason() && _existing_scope($childScope3)
	});
	_resume_branch($scope0_id);
}, 1);
