// tags/rejecting.marko
if (typeof window !== "undefined") await rejectAfter(/* @__PURE__ */ new Error("stale lazy rejection"));
var rejecting_default = _template("b", (input) => {
	const $sg__input_label = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	_html(`<button class=lazy>rejecting ${_sep($sg__input_label)}${_escape(input.label)}${_el_resume($scope0_id, "a", $sg__input_label)}</button>`);
	$sg__input_label && writeScope($scope0_id, {});
});
_renderer_shells({ "b0": ["<button class=lazy>rejecting <!></button>", "Db%l"] });

// tags/resolving.marko
if (typeof window !== "undefined") await resolveAfter(0);
var resolving_default = _template("c", (input) => {
	const $sg__input_label = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	_html(`<button class=lazy>resolving ${_sep($sg__input_label)}${_escape(input.label)}${_el_resume($scope0_id, "a", $sg__input_label)}</button>`);
	$sg__input_label && writeScope($scope0_id, {});
});
_renderer_shells({ "c0": ["<button class=lazy>resolving <!></button>", "Db%l"] });

// template.marko
const $Rejecting_withLoadAssets = withLoadAssets(rejecting_default, "_b", [{ type: "idle" }]);
const $Resolving_withLoadAssets = withLoadAssets(resolving_default, "_c", [{ type: "idle" }]);
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const Home = { content: _content("a2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<p class=home>${_escape($global().label)}${_el_resume($scope1_id, "a", _persisted_reason())}</p>`);
		_persisted_reason() && writeScope($scope1_id, {});
	}) };
	const Reject = { content: _content("a3", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_set_serialize_reason(_persisted_reason());
		const $childScope = _peek_scope_id();
		$Rejecting_withLoadAssets({ label: $global().label });
		_persisted_reason() && writeScope($scope2_id, { b: _existing_scope($childScope) });
	}) };
	const Resolve = { content: _content("a4", () => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_set_serialize_reason(_persisted_reason());
		const $childScope2 = _peek_scope_id();
		$Resolving_withLoadAssets({ label: $global().label });
		_persisted_reason() && writeScope($scope3_id, { b: _existing_scope($childScope2) });
	}) };
	_dynamic_tag($scope0_id, "c", $global().view === "reject" ? Reject : $global().view === "resolve" ? Resolve : Home, {}, 0, 0, _persisted_reason() | _persisted_reason(), "a0");
	_script($scope0_id, "a5");
	writeScope($scope0_id, { d: _seed_fill(_state_reason() && count) });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a1": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"],
	"a": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"]
});
