// tags/card/index.marko
var card_default = _template_persisted("__tests__/tags/card/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html$1("<section class=card>");
	_dynamic_tag$1($scope0_id, "#text/0", input.content, {}, 0, 0, _source_guard($scope0_reason, 0), "__tests__/tags/card/index.marko0");
	_html$1("</section>");
	$scope0_reason ? writeScope($scope0_id, {}, "__tests__/tags/card/index.marko", 0) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/tags/card/index.marko0", input.content);
}, 0, 0);

// tags/box/index.marko
var box_default = _template_persisted("__tests__/tags/box/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html$1("<div class=box>");
	_dynamic_tag$1($scope0_id, "#text/0", input.content, {}, 0, 0, _source_guard($scope0_reason, 0), "__tests__/tags/box/index.marko0");
	_html$1("</div>");
	$scope0_reason ? writeScope($scope0_id, {}, "__tests__/tags/box/index.marko", 0) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/tags/box/index.marko0", input.content);
}, 0, 0);

// template.marko
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	let open = false;
	_html$1("<main>");
	if ($scope0_reason) _if$1(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope2 = _peek_scope_id();
			box_default({ content: _content$1("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _persisted_reason();
				const $scope2_id = _scope_id();
				_set_serialize_reason(1);
				const $childScope = _peek_scope_id();
				card_default({ content: _content$1("__tests__/template.marko_3*content", () => {
					const $scope3_reason = _persisted_reason();
					const $scope3_id = _scope_id();
					_html$1(`<p>${_escape("t:" + input.title)}${_el_resume($scope3_id, "#text/0", _source_guard($scope0_reason, 0))}</p>`);
					_subscribe(_source_if($scope0_reason, 0) && $input_title__closures, writeScope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "5:8"));
					_resume_branch($scope3_id);
				}, $scope2_id) });
				writeScope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"#childScope/0": _existing_scope($childScope)
				}, "__tests__/template.marko", "4:6");
			}, $scope1_id) });
			writeScope($scope1_id, { "#childScope/0": _existing_scope($childScope2) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_html$1(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script$1($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		input_title: input.title,
		open,
		"ClosureScopes:input_title": $input_title__closures
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		open: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.title);
	_resume_branch($scope0_id);
}, 1, () => [card_default, box_default]);
