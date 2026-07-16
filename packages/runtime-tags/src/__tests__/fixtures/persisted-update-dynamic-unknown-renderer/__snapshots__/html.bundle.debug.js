// tags/ticker.marko
var ticker_default = _template("__tests__/tags/ticker.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_entries = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ol class=ticker>");
	_for_of(input.entries, (entry) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(_hole_value($scope1_id, "PatchHole:#text/0", entry, _persisted_reason()))}${_el_resume($scope1_id, "#text/0", $sg__input_entries)}</li>`);
		$sg__input_entries && writeScope($scope1_id, {}, "__tests__/tags/ticker.marko", "2:4");
	}, function(entry) {
		return entry;
	}, $scope0_id, "#ol/0", $sg__input_entries, $sg__input_entries, $sg__input_entries, "</ol>", 1, "__tests__/tags/ticker.marko_0/update_for_#ol/0");
	$sg__input_entries && writeScope($scope0_id, {}, "__tests__/tags/ticker.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<h1>${_escape(_hole_value($scope0_id, "PatchHole:#text/2", input.title, _persisted_reason()))}${_el_resume($scope0_id, "#text/2", _serialize_guard($scope0_reason, 1))}</h1>`);
	_dynamic_tag($scope0_id, "#text/3", input.view === "ticker" ? ticker_default : "div", { entries: input.entries }, 0, 0, _serialize_guard($scope0_reason, 0) | _persisted_reason(), "__tests__/template.marko_0/update_dynamic_#text/3");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		input_view: (_serialize_if($scope0_reason, 3) || _patch_reason()) && input.view,
		input_entries: (_serialize_if($scope0_reason, 2) || _patch_reason()) && input.entries,
		count: _state_reason() && count
	}, "__tests__/template.marko", 0, {
		input_view: ["input.view"],
		input_entries: ["input.entries"],
		count: "3:6"
	});
	_resume_branch($scope0_id);
}, 1);
