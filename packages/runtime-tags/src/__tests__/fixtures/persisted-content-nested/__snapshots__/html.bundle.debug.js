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

// tags/child/index.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<section><h2> </h2>${_w0}</section>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `E l/${_w0}&l`)("D%l");
var child_default = _template_persisted("__tests__/tags/child/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html$1(`<section><h2>${_patch_text($scope0_id, "#text/0", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}</h2>`);
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 1) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/1", $childScope);
	grand_default({ content: input.content });
	_html$1("</section>");
	$scope0_reason && writeScope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/tags/child/index.marko", 0);
}, 0, () => [grand_default]);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$1);
_shells({ "__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D ;<em> </em>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	_html$1("<main>");
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	child_default({
		title: input.title,
		content: _content_elide("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _persisted_reason();
			const $scope1_id = _scope_id();
			_html$1(`<em>${_patch_text($scope1_id, "#text/0", input.note, $scope0_owned, 1)}${_el_resume($scope1_id, "#text/0")}</em>`);
			_subscribe(_source_if($scope0_reason, 1) && $input_note__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4"));
			_resume_branch($scope1_id);
		}, $scope0_id)
	});
	_html$1("</main>");
	$scope0_reason && writeScope($scope0_id, {
		"ClosureScopes:input_note": $input_note__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0);
}, 1, () => [child_default]);
