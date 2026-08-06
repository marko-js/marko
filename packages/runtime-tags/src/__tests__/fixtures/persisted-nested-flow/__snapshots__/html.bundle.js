// tags/badge.marko
var badge_default = _template_persisted("b", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let seen = 0;
	_html(`<footer><span>${_patch_text($scope0_id, "a", input.label)}${_el_resume($scope0_id, "a")} (<!>${_escape(seen)}${_el_resume($scope0_id, "b")})</span><button>ack</button>${_el_resume($scope0_id, "c")}</footer>`);
	_script($scope0_id, "b0");
	$scope0_reason && writeScope($scope0_id, { g: seen });
	_resume_branch($scope0_id);
});

// template.marko
_renderer_shells({
	a0: ",`a0;D%b%;<li><!><!></li>`",
	a1: ",`a1,<em>on sale</em>`",
	a2: ",`a2;D%b%;<section><!><!></section>`",
	a3: ",`a3;D ;<small> </small>`"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason(), $sg__input_items = _serialize_guard($scope0_reason, 1), $sg__input_detail = _serialize_guard($scope0_reason, 3), $sg__input_summary = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_detail__closures = /* @__PURE__ */ new Set();
	_html("<main><ul>");
	_for_of(input.items, (item) => {
		const $scope3_id = _scope_id();
		_html(`<li>${_patch_text($scope3_id, "a", item.label)}${_el_resume($scope3_id, "a")}`);
		_if(() => {
			if (item.sale) {
				const $scope4_id = _scope_id();
				_html("<em>on sale</em>");
				_serialize_if($scope0_reason, 1) && writeScope($scope4_id, {});
				return 0;
			}
		}, $scope3_id, "b", $sg__input_items, $sg__input_items, $sg__input_items, void 0, void 0, ["a1"]);
		_html("</li>");
		writeScope($scope3_id, {});
	}, "id", $scope0_id, "a", $sg__input_items, $sg__input_items, $sg__input_items, void 0, void 0, "a0");
	_html(`</ul>${_el_resume($scope0_id, "a", $sg__input_items)}`);
	_if(() => {
		if (input.summary) {
			const $scope1_id = _scope_id();
			_html(`<section>${_patch_text($scope1_id, "a", input.summary)}${_el_resume($scope1_id, "a")}`);
			_if(() => {
				if (input.detail) {
					const $scope2_id = _scope_id();
					_html(`<small>${_patch_text($scope2_id, "a", input.detail)}${_el_resume($scope2_id, "a")}</small>`);
					_subscribe(_serialize_if($scope0_reason, 3) && $input_detail__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }));
					return 0;
				}
			}, $scope1_id, "b", $sg__input_detail, $sg__input_detail, $sg__input_detail, void 0, void 0, ["a3"]);
			_html("</section>");
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", _serialize_guard($scope0_reason, 0), $sg__input_summary, $sg__input_summary, void 0, void 0, ["a2"]);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "c", $childScope);
	badge_default({ label: input.badge });
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, {
		g: input.summary,
		h: input.detail,
		k: $input_detail__closures,
		c: _existing_scope($childScope)
	});
}, 1);
