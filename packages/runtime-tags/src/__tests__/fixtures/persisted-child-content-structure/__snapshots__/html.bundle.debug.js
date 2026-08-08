// tags/box/index.marko
var box_default = _template_persisted("__tests__/tags/box/index.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<div class=box>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, _source_guard($scope0_reason, 0));
	_html("</div>");
	input.content && _patch_poison($scope0_id);
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/tags/box/index.marko", 0);
}, 0, 0);

// template.marko
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	const $input_show__closures = new Set();
	let open = false;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			box_default({ content: _content("__tests__/template.marko_2_content", () => {
				const $scope2_reason = _persisted_reason();
				const $scope2_id = _scope_id();
				if ($scope0_reason) _if(() => {
					if (input.show) {
						const $scope3_id = _scope_id();
						_html(`<p>${_escape("t:" + input.title)}${_el_resume($scope3_id, "#text/0", _source_guard($scope0_reason, 1))}</p>`);
						_subscribe(_source_if($scope0_reason, 1) && $input_title__closures, writeScope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "5:8"));
						return 0;
					}
				}, $scope2_id, "#text/0", $sg__input_show, $sg__input_show, $sg__input_show, 0, 1);
				_subscribe(_source_if($scope0_reason, 0) && $input_show__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:6"));
				_resume_branch($scope2_id);
			}) });
			writeScope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		input_show: input.show,
		input_title: input.title,
		open,
		"ClosureScopes:input_title": $input_title__closures,
		"ClosureScopes:input_show": $input_show__closures
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		input_title: ["input.title"],
		open: "1:6"
	}) : (_owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.show), _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "__tests__/template.marko1", input.title));
	_resume_branch($scope0_id);
}, 1, () => [box_default]);
