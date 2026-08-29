// tags/grand/index.marko
const $template$2 = "<div><!><button>+</button></div>";
const $walks$2 = "D%b l";
_shells({ "__tests__/tags/grand/index.marko": "__tests__/tags/grand/index.marko !__tests__/tags/grand/index.marko_0;D%b ;<div><!><button>+</button></div>" });
var grand_default = _template_persisted("__tests__/tags/grand/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let open = true;
	_html("<div>");
	if ($scope0_reason) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, _source_guard($scope0_reason, 0));
			_scope($scope1_id, {}, "__tests__/tags/grand/index.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</div>`);
	_script($scope0_id, "__tests__/tags/grand/index.marko_0");
	_patch_value($scope0_id, "__tests__/tags/grand/index.marko1", open, 1);
	$scope0_reason ? _scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/grand/index.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/tags/grand/index.marko0", input.content);
	_resume_branch($scope0_id);
}, 0, 0);

// tags/child/index.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<section><h2> </h2>${_w0}</section>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `E l/${_w0}&l`)($walks$2);
_shells({ "__tests__/tags/child/index.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/tags/child/index.marko;${_w0};${_w1}`)(((_w0) => `E l/${_w0}&l`)($walks$2), ((_w0) => `<section><h2> </h2>${_w0}</section>`)($template$2)) });
var child_default = _template_persisted("__tests__/tags/child/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<section><h2>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_owned, 0)}</h2>`);
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 1) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/1", $childScope);
	grand_default({ content: input.content });
	_html("</section>");
	$scope0_reason && _scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/tags/child/index.marko", 0);
}, 0, () => [grand_default]);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$1);
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	_html("<main>");
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	child_default({
		title: input.title,
		content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _persisted_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_text_resume($scope1_id, "#text/0", input.note)}</em>`);
			_subscribe(_source_if($scope0_reason, 1) && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4"));
			_resume_branch($scope1_id);
		}, $scope0_id)
	});
	_html("</main>");
	$scope0_reason ? _scope($scope0_id, {
		input_note: input.note,
		"ClosureScopes:input_note": $input_note__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_note: ["input.note"] }) : _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "__tests__/template.marko0", input.note);
}, 1, () => [child_default]);
