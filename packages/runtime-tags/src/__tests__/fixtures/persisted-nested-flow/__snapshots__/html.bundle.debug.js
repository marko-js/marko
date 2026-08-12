// tags/badge.marko
var badge_default = _template_persisted("__tests__/tags/badge.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let seen = 0;
	_html(`<footer><span>${_patch_text($scope0_id, "#text/0", input.label, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")} (<!>${_escape(seen)}${_el_resume($scope0_id, "#text/1")})</span><button>ack</button>${_el_resume($scope0_id, "#button/2")}</footer>`);
	_script($scope0_id, "__tests__/tags/badge.marko_0");
	$scope0_reason && writeScope($scope0_id, { seen }, "__tests__/tags/badge.marko", 0, { seen: "1:6" });
	_resume_branch($scope0_id);
}, 0, 0);

// template.marko
_renderer_shells({
	"__tests__/template.marko_1*shell": ",`__tests__/template.marko_1*shell;D%b%;<section><!><!></section>`",
	"__tests__/template.marko_2*shell": ",`__tests__/template.marko_2*shell;D ;<small> </small>`",
	"__tests__/template.marko_3*shell": ",`__tests__/template.marko_3*shell;D%b%;<li><!><!></li>`",
	"__tests__/template.marko_4*shell": ",`__tests__/template.marko_4*shell,<em>on sale</em>`"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_items = _source_guard($scope0_reason, 1), $sg__input_detail = _source_guard($scope0_reason, 3), $sg__input_summary = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_detail__closures = new Set();
	_html("<main><ul>");
	_for_of(input.items, (item) => {
		const $scope3_id = _scope_id();
		_html(`<li>${_patch_text($scope3_id, "#text/0", item.label, $scope0_owned, 1)}${_el_resume($scope3_id, "#text/0")}`);
		_if(() => {
			if (item.sale) {
				const $scope4_id = _scope_id();
				_html("<em>on sale</em>");
				$scope0_reason && writeScope($scope4_id, {}, "__tests__/template.marko", "6:10");
				return 0;
			}
		}, $scope3_id, "#text/1", 1, $sg__input_items, $sg__input_items, void 0, void 0, ["__tests__/template.marko_4*shell"]);
		_html("</li>");
		writeScope($scope3_id, {}, "__tests__/template.marko", "3:6");
	}, "id", $scope0_id, "#ul/0", 1, $sg__input_items, $sg__input_items, void 0, void 0, "__tests__/template.marko_3*shell");
	_html(`</ul>${_el_resume($scope0_id, "#ul/0", $sg__input_items)}`);
	_if(() => {
		if (input.summary) {
			const $scope1_id = _scope_id();
			_html(`<section>${_patch_text($scope1_id, "#text/0", input.summary, $scope0_owned, 2)}${_el_resume($scope1_id, "#text/0")}`);
			_if(() => {
				if (input.detail) {
					const $scope2_id = _scope_id();
					_html(`<small>${_patch_text($scope2_id, "#text/0", input.detail, $scope0_owned, 3)}${_el_resume($scope2_id, "#text/0")}</small>`);
					_subscribe(_source_if($scope0_reason, 3) && $input_detail__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "15:8"));
					return 0;
				}
			}, $scope1_id, "#text/1", 1, $sg__input_detail, $sg__input_detail, void 0, void 0, ["__tests__/template.marko_2*shell"]);
			_html("</section>");
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "12:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, $sg__input_summary, $sg__input_summary, void 0, void 0, ["__tests__/template.marko_1*shell"]);
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 4) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/2", $childScope);
	badge_default({ label: input.badge });
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, {
		input_summary: input.summary,
		input_detail: input.detail,
		"ClosureScopes:input_detail": $input_detail__closures,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_summary: ["input.summary"],
		input_detail: ["input.detail"]
	});
}, 1, () => [badge_default]);
