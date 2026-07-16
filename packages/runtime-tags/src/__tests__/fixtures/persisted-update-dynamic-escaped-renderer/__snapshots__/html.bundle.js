// tags/lineup.marko
var lineup_default = _template("b", (input) => {
	const $sg__input_performers = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	_html("<ol class=lineup>");
	_for_of(input.performers, (name) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(_hole_value($scope1_id, "Qa", name, _persisted_reason()))}${_el_resume($scope1_id, "a", $sg__input_performers)}</li>`);
		$sg__input_performers && writeScope($scope1_id, {});
	}, function(name) {
		return name;
	}, $scope0_id, "a", $sg__input_performers, $sg__input_performers, $sg__input_performers, "</ol>", 1, "b0");
	$sg__input_performers && writeScope($scope0_id, {});
});

// tags/stage.marko
var stage_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_performers__OR__input_view = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<section class=stage><h2 class=headline>${_escape(_hole_value($scope0_id, "Qa", input.performers.length, _persisted_reason()))}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 2))} on stage</h2>`);
	_dynamic_tag($scope0_id, "b", input.view, { performers: input.performers }, 0, 0, $sg__input_performers__OR__input_view | _persisted_reason(), "c0");
	_html("</section>");
	$sg__input_performers__OR__input_view && writeScope($scope0_id, {
		e: (_serialize_if($scope0_reason, 3) || _patch_reason()) && input.performers,
		g: (_serialize_if($scope0_reason, 1) || _patch_reason()) && input.view
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $sg__input_performers = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
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
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		g: _state_reason() && count,
		c: $sg__input_performers | _persisted_reason() && _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
