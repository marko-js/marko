// tags/relay/tags/leaf/index.marko
const $template$2 = "<b> </b>";
const $walks$2 = "D l";
var leaf_default = _template_persisted("__tests__/tags/relay/tags/leaf/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<b>${_patch_text($scope0_id, "#text/0", input.text, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}</b>`);
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/tags/relay/tags/leaf/index.marko", 0);
}, 0, 0);

// tags/relay/index.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<section>${_w0}</section>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("D l");
var relay_default = _template_persisted("__tests__/tags/relay/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<section>");
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	leaf_default({ text: input.val });
	_html("</section>");
	$scope0_reason && writeScope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/relay/index.marko", 0);
}, 0, () => [leaf_default]);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)($walks$1);
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_serialize_reason(6);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	relay_default({ val: input.base + count });
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		input_base: input.base,
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_base: ["input.base"],
		count: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.base);
	_resume_branch($scope0_id);
}, 1, () => [relay_default]);
