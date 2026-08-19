// tags/card/index.marko
const $template$1 = "<section><!><button>+</button></section>";
const $walks$1 = "D%b l";
var card_default = _template_persisted("__tests__/tags/card/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let open = true;
	_html("<section>");
	if ($scope0_reason) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.header, {}, 0, 0, _source_guard($scope0_reason, 0));
			writeScope($scope1_id, {}, "__tests__/tags/card/index.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</section>`);
	_script($scope0_id, "__tests__/tags/card/index.marko_0");
	_patch_value($scope0_id, "__tests__/tags/card/index.marko1", open, 1);
	$scope0_reason ? writeScope($scope0_id, {
		input_header: input.header,
		open
	}, "__tests__/tags/card/index.marko", 0, {
		input_header: ["input.header"],
		open: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/tags/card/index.marko0", input.header);
	_resume_branch($scope0_id);
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$1);
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	_html("<main>");
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	card_default({ header: attrTag({ content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _persisted_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_escape(input.note)}${_el_resume($scope1_id, "#text/0")}</em>`);
		_subscribe(_source_if($scope0_reason, 0) && $input_note__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:6"));
		_resume_branch($scope1_id);
	}, $scope0_id) }) });
	_html("</main>");
	$scope0_reason ? writeScope($scope0_id, {
		input_note: input.note,
		"ClosureScopes:input_note": $input_note__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_note: ["input.note"] }) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.note);
}, 1, () => [card_default]);
