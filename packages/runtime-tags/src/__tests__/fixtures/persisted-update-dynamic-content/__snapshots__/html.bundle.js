// tags/layout.marko
var layout_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<aside><button class=toggle>expand${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}</aside><section>`);
	_dynamic_tag($scope0_id, "c", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0) | _persisted_reason());
	_html("</section>");
	_script($scope0_id, "b0");
	writeScope($scope0_id, { g: _state_reason() && open });
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _serialize_guard($scope0_reason, 2), $sg__input_summary = _serialize_guard($scope0_reason, 3), $sg__input_specs = _serialize_guard($scope0_reason, 4), $si__input_view = _serialize_if($scope0_reason, 5), $sg__input_view = _serialize_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const $input_summary__closures = /* @__PURE__ */ new Set();
	const $input_specs__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<h1>${_escape(_hole_value($scope0_id, "Qa", input.title, _persisted_reason()))}${_el_resume($scope0_id, "a", $sg__input_title)}</h1><button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "b")}`);
	const Overview = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<p>Overview of ${_sep($sg__input_title)}${_escape(_hole_value($scope1_id, "Qa", input.title, _persisted_reason()))}${_el_resume($scope1_id, "a", $sg__input_title)}: ${_sep($sg__input_summary)}${_escape(_hole_value($scope1_id, "Qb", input.summary, _persisted_reason()))}${_el_resume($scope1_id, "b", $sg__input_summary)}</p>`);
		_serialize_guard($scope0_reason, 1) && _subscribe($sg__input_summary && $input_summary__closures, _subscribe($sg__input_title && $input_title__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) })));
		_resume_branch($scope1_id);
	}, $scope0_id) };
	const Specs = { content: _content_resume("a1", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html("<ul>");
		_for_of(input.specs, (spec) => {
			const $scope3_id = _scope_id();
			_html(`<li>${_escape(_hole_value($scope3_id, "Qa", spec.name, _persisted_reason()))}${_el_resume($scope3_id, "a", $sg__input_specs)} is ${_sep($sg__input_specs)}${_escape(_hole_value($scope3_id, "Qb", spec.value, _persisted_reason()))}${_el_resume($scope3_id, "b", $sg__input_specs)}</li>`);
			$sg__input_specs && writeScope($scope3_id, {});
		}, function(spec) {
			return spec.name;
		}, $scope2_id, "a", $sg__input_specs, $sg__input_specs, $sg__input_specs, "</ul>", 1);
		_serialize_guard($scope0_reason, 0) && _subscribe($sg__input_specs && $input_specs__closures, writeScope($scope2_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope2_id);
	}, $scope0_id) };
	const $childScope = _peek_scope_id();
	_set_serialize_reason($sg__input_view);
	layout_default({ content: input.view === "specs" ? Specs : Overview });
	_script($scope0_id, "a2");
	writeScope($scope0_id, {
		g: ($si__input_view || _update_reason()) && input.title,
		h: ($si__input_view || _update_reason()) && input.summary,
		i: ($si__input_view || _update_reason()) && input.specs,
		k: _state_reason() && count,
		l: ($si__input_view || _update_reason()) && Overview,
		m: ($si__input_view || _update_reason()) && Specs,
		Bg: $sg__input_title && $input_title__closures,
		Bh: $sg__input_summary && $input_summary__closures,
		Bi: $sg__input_specs && $input_specs__closures,
		d: ($sg__input_view || _persisted_reason()) && _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
