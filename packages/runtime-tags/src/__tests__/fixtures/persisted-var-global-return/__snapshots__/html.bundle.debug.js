// tags/tagger/index.marko
const $template$1 = "<span>t</span>";
const $walks$1 = "b";
_shells({ "__tests__/tags/tagger/index.marko": "__tests__/tags/tagger/index.marko,<span>t</span>" });
var tagger_default = _template_persisted("__tests__/tags/tagger/index.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const g = $global$1.locale + "!";
	_html("<span>t</span>");
	const $return = g;
	_global_subscribe("__tests__/tags/tagger/index.marko_0_$global_locale#1/global", $scope0_id);
	return $return;
}, 0, 1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<p> </p></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D0${_w0}&D m`)("b");
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko;${_w0};${_w1}`)(((_w0) => `D0${_w0}&D m`)("b"), ((_w0) => `<main>${_w0}<p> </p></main>`)($template$1)) });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	let tag = tagger_default({});
	_html(`<p>${_patch_text($scope0_id, "#text/2", tag)}</p></main>`);
	$scope0_reason && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1, () => [tagger_default]);
