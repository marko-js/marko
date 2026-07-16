// tags/lineup.marko
var lineup_default = _template("__tests__/tags/lineup.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_performers = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ol class=lineup>");
	_for_of(input.performers, (name) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(_hole_value($scope1_id, "PatchHole:#text/0", name, _persisted_reason()))}${_el_resume($scope1_id, "#text/0", $sg__input_performers)}</li>`);
		$sg__input_performers && writeScope($scope1_id, {}, "__tests__/tags/lineup.marko", "2:4");
	}, function(name) {
		return name;
	}, $scope0_id, "#ol/0", $sg__input_performers, $sg__input_performers, $sg__input_performers, "</ol>", 1, "__tests__/tags/lineup.marko_0/update_for_#ol/0");
	$sg__input_performers && writeScope($scope0_id, {}, "__tests__/tags/lineup.marko", 0);
});

// tags/stage.marko
var stage_default = _template("__tests__/tags/stage.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_performers__OR__input_view = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<section class=stage><h2 class=headline>${_escape(_hole_value($scope0_id, "PatchHole:#text/0", input.performers.length, _persisted_reason()))}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 2))} on stage</h2>`);
	_dynamic_tag($scope0_id, "#text/1", input.view, { performers: input.performers }, 0, 0, $sg__input_performers__OR__input_view | _persisted_reason(), "__tests__/tags/stage.marko_0/update_dynamic_#text/1");
	_html("</section>");
	$sg__input_performers__OR__input_view && writeScope($scope0_id, {
		input_performers: (_serialize_if($scope0_reason, 3) || _patch_reason()) && input.performers,
		input_view: (_serialize_if($scope0_reason, 1) || _patch_reason()) && input.view
	}, "__tests__/tags/stage.marko", 0, {
		input_performers: ["input.performers"],
		input_view: ["input.view"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_performers = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason({
		0: $sg__input_performers,
		1: $sg__input_performers,
		2: $sg__input_performers
	});
	stage_default({
		view: lineup_default,
		performers: input.performers
	});
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count: _state_reason() && count,
		"#childScope/2": $sg__input_performers | _persisted_reason() && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
