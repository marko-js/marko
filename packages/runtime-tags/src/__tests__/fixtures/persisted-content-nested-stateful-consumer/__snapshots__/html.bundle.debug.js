// tags/grand/index.marko
const $template$2 = "<div><!></div>";
const $walks$2 = "D%l";
var grand_default = _template_persisted("__tests__/tags/grand/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html$1("<div>");
	_patch_dynamic_tag($scope0_id, "#text/0", input.content, $scope0_owned, 0);
	_dynamic_tag$1($scope0_id, "#text/0", input.content, {}, 0, 0, _source_guard($scope0_reason, 0), 1);
	_html$1("</div>");
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/tags/grand/index.marko", 0);
}, 0, 0);

// tags/card/index.marko
const $template$1 = "<section><h2> </h2><!><button>+</button></section>";
const $walks$1 = "E l%b l";
var card_default = _template_persisted("__tests__/tags/card/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html$1(`<section><h2>${_patch_text($scope0_id, "#text/0", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}</h2>`);
	if ($scope0_reason) _if$1(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			grand_default({ content: input.content });
			writeScope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/card/index.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 1, 0, 1);
	_html$1(`<button>+</button>${_el_resume($scope0_id, "#button/2")}</section>`);
	_script$1($scope0_id, "__tests__/tags/card/index.marko_0");
	_patch_value($scope0_id, "__tests__/tags/card/index.marko1", open, 1);
	$scope0_reason ? writeScope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/card/index.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	}) : _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "__tests__/tags/card/index.marko0", input.content);
	_resume_branch($scope0_id);
}, 0, () => [grand_default]);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$1);
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	_html$1("<main>");
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	card_default({
		title: input.title,
		content: _content_resume$1("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _persisted_reason();
			const $scope1_id = _scope_id();
			_html$1(`<em>${_escape(input.note)}${_el_resume($scope1_id, "#text/0")}</em>`);
			_subscribe(_source_if($scope0_reason, 1) && $input_note__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4"));
			_resume_branch($scope1_id);
		}, $scope0_id)
	});
	_html$1("</main>");
	$scope0_reason ? writeScope($scope0_id, {
		input_note: input.note,
		"ClosureScopes:input_note": $input_note__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_note: ["input.note"] }) : _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "__tests__/template.marko0", input.note);
}, 1, () => [card_default]);
