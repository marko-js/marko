// tags/rejecting.marko
if (typeof window !== "undefined") {
	await rejectAfter(new Error("stale lazy rejection"));
}
var rejecting_default = _template("__tests__/tags/rejecting.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<button class=lazy>rejecting ${_sep($sg__input_label)}${_escape(input.label)}${_el_resume($scope0_id, "#text/0", $sg__input_label)}</button>`);
	$sg__input_label && writeScope($scope0_id, {}, "__tests__/tags/rejecting.marko", 0);
});

// tags/resolving.marko
if (typeof window !== "undefined") {
	await resolveAfter(0);
}
var resolving_default = _template("__tests__/tags/resolving.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<button class=lazy>resolving ${_sep($sg__input_label)}${_escape(input.label)}${_el_resume($scope0_id, "#text/0", $sg__input_label)}</button>`);
	$sg__input_label && writeScope($scope0_id, {}, "__tests__/tags/resolving.marko", 0);
});

// template.marko
const $Rejecting_withLoadAssets = withLoadAssets(rejecting_default, "ready:__tests__/tags/rejecting.marko", [{ type: "idle" }]);
const $Resolving_withLoadAssets = withLoadAssets(resolving_default, "ready:__tests__/tags/resolving.marko", [{ type: "idle" }]);
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const Home = { content: _content("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<p class=home>${_escape($global().label)}${_el_resume($scope1_id, "#text/0", _persisted_reason())}</p>`);
		_persisted_reason() && writeScope($scope1_id, {}, "__tests__/template.marko", "7:2");
	}) };
	const Reject = { content: _content("__tests__/template.marko_2_content", () => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		const $childScope = _peek_scope_id();
		_set_serialize_reason(_persisted_reason());
		$Rejecting_withLoadAssets({ label: $global().label });
		_persisted_reason() && writeScope($scope2_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", "10:2");
	}) };
	const Resolve = { content: _content("__tests__/template.marko_3_content", () => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		const $childScope2 = _peek_scope_id();
		_set_serialize_reason(_persisted_reason());
		$Resolving_withLoadAssets({ label: $global().label });
		_persisted_reason() && writeScope($scope3_id, { "#childScope/1": _existing_scope($childScope2) }, "__tests__/template.marko", "13:2");
	}) };
	_dynamic_tag($scope0_id, "#text/2", $global().view === "reject" ? Reject : $global().view === "resolve" ? Resolve : Home, {}, 0, 0, _persisted_reason() | _persisted_reason(), "__tests__/template.marko_0/update_dynamic_#text/2");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _state_reason() && count }, "__tests__/template.marko", 0, { count: "4:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_0_update": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"],
	"__tests__/template.marko": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"]
});
