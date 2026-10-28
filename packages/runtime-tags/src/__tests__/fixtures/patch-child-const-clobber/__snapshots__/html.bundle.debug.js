// tags/card/index.marko
const $template$1 = "<section><h2> </h2><p> </p></section>";
const $walks$1 = " E lD m";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko; E lD ;<section><h2> </h2><p> </p></section>" });
var card_default = _template("__tests__/tags/card/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<section${_attr_class(input.klass, $scope0_id, "PatchAttr:#section/0 class", $scope0_reason, 0)}><h2>${_text_resume($scope0_id, "#text/1", input.title, 1, $scope0_reason, 1)}</h2><p>${_text_resume($scope0_id, "#text/2", input.note, 1, $scope0_reason, 2)}</p></section>${_el_resume($scope0_id, "#section/0", _mask_group($scope0_reason, 0))}`);
	_scope($scope0_id, {}, "__tests__/tags/card/index.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D/${_w0}& l`)($walks$1)};${((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let note = input.note;
	_html("<main>");
	_set_scope_reason(32);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	card_default({
		title: "fixed",
		klass: "c",
		note
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
