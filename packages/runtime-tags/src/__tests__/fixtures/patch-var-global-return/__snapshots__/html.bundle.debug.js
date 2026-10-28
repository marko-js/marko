// tags/tagger/index.marko
const $template$1 = "<span>t</span>";
const $walks$1 = "b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/tagger/index.marko": "^__tests__/tags/tagger/index.marko,<span>t</span>" });
var tagger_default = _template("__tests__/tags/tagger/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const g = $global$1.locale + "!";
	_html("<span>t</span>");
	const $return = g;
	_fill_global_subscribe("__tests__/tags/tagger/index.marko_0_$global_locale#4", $scope0_id);
	return $return;
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<p> </p></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D0${_w0}&D m`)("b");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D0${_w0}&D m`)("b")};${((_w0) => `<main>${_w0}<p> </p></main>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	let tag = tagger_default({});
	_patch_child_end();
	_html(`<p>${_text_resume($scope0_id, "#text/2", tag, 1, 4, 0)}</p></main>`);
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
