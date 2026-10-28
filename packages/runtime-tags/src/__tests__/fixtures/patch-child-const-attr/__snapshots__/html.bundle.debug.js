// tags/badge/index.marko
const $template$1 = "<div><!><i> </i></div>";
const $walks$1 = "D%bD m";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/badge/index.marko": "__tests__/tags/badge/index.marko;D%bD ;<div><!><i> </i></div>",
	"__tests__/tags/badge/index.marko_1*shell": "__tests__/tags/badge/index.marko_1*shell;D ;<b> </b>"
});
var badge_default = _template("__tests__/tags/badge/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<div>");
	_if(() => {
		if (input.label) {
			const $scope1_id = _scope_id();
			_html(`<b>${_text_resume($scope1_id, "#text/0", input.label, void 0, $scope0_reason, 0)}</b>`);
			_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "__tests__/tags/badge/index.marko_1_input_label#0:4/init");
			_scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/tags/badge/index.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["__tests__/tags/badge/index.marko_1*shell"], $scope0_reason, 0);
	_html(`<i>${_text_resume($scope0_id, "#text/1", input.note, void 0, $scope0_reason, 1)}</i></div>`);
	_scope($scope0_id, {}, "__tests__/tags/badge/index.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button> </button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& D m`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D/${_w0}& D m`)($walks$1)};${((_w0) => `<main>${_w0}<button> </button></main>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	badge_default({
		label: "hi",
		note: input.title
	});
	_patch_child_end();
	_html(`<button>${_text_resume($scope0_id, "#text/2", count)}</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
