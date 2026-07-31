// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason(), $si__input_show = _serialize_if($scope0_reason, 4), $si__input_show__OR__input_detail = _serialize_if($scope0_reason, 0), $si__input_text = _serialize_if($scope0_reason, 6), $si__input_summary = _serialize_if($scope0_reason, 7);
	const $scope0_id = _scope_id();
	const $input_text__closures = /* @__PURE__ */ new Set();
	const $input_summary__closures = /* @__PURE__ */ new Set();
	_html("<div>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<section${_patch_attr($scope1_id, "a", "title", input.kind)}${_attr("title", input.kind)}>`);
			_if(() => {
				if (input.detail) {
					const $scope2_id = _scope_id();
					_html(`<p>${_patch_text($scope2_id, "a", input.text)}${_escape(input.text)}${_el_resume($scope2_id, "a", _serialize_guard($scope0_reason, 6))}</p>`);
					_subscribe($si__input_text && $input_text__closures, writeScope($scope2_id, { _: _serialize_if($scope0_reason, 1) && _scope_with_id($scope1_id) }));
					return 0;
				} else {
					const $scope3_id = _scope_id();
					_html(`<em>${_patch_text($scope3_id, "a", input.summary)}${_escape(input.summary)}${_el_resume($scope3_id, "a")}</em>`);
					_subscribe($si__input_summary && $input_summary__closures, writeScope($scope3_id, { _: _serialize_if($scope0_reason, 2) && _scope_with_id($scope1_id) }));
					return 1;
				}
			}, $scope1_id, "a", 1, 1, _serialize_guard($scope0_reason, 5));
			_html(`</section>${_el_resume($scope1_id, "a")}`);
			writeScope($scope1_id, { _: _serialize_if($scope0_reason, 3) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, 1, _serialize_guard($scope0_reason, 4));
	_html(`</div>${_el_resume($scope0_id, "a")}`);
	writeScope($scope0_id, {
		e: $si__input_show && input.kind,
		f: $si__input_show && input.detail,
		g: $si__input_show__OR__input_detail && input.text,
		h: $si__input_show__OR__input_detail && input.summary,
		k: $si__input_text && $input_text__closures,
		l: $si__input_summary && $input_summary__closures
	});
}, 1);
