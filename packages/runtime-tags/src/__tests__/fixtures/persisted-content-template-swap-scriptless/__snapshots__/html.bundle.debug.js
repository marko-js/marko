// tags/body-a/index.marko
const $template$3 = "<em>A</em>";
const $walks$3 = "b";
var body_a_default = _template_persisted("__tests__/tags/body-a/index.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html$1("<em>A</em>");
}, 0, 0);

// tags/body-b/index.marko
const $template$2 = "<strong>B</strong>";
const $walks$2 = "b";
var body_b_default = _template_persisted("__tests__/tags/body-b/index.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html$1("<strong>B</strong>");
}, 0, 0);

// tags/card/index.marko
const $template$1 = "<section><h2> </h2><!></section>";
const $walks$1 = "E l%l";
var card_default = _template_persisted("__tests__/tags/card/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html$1(`<section><h2>${_patch_text($scope0_id, "#text/0", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}</h2>`);
	_patch_dynamic_tag($scope0_id, "#text/1", input.content, $scope0_owned, 1);
	_dynamic_tag$1($scope0_id, "#text/1", input.content, {}, 0, 0, _source_guard($scope0_reason, 1), 1);
	_html$1("</section>");
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/tags/card/index.marko", 0);
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$1);
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html$1("<main>");
	_set_serialize_reason({
		0: _mask_group($scope0_owned, 0),
		1: _mask_group($scope0_owned, 1)
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	card_default({
		title: input.title,
		content: input.alt ? body_b_default : body_a_default
	});
	_html$1("</main>");
	$scope0_reason && writeScope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1, () => [card_default]);
