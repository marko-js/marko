// template.marko
const $D_content__walks = "b%b D l";
const $D_content__template = "<!><!><button> </button>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($D_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($D_content__walks);
const $setup = [[], []];
_shells({
	"__tests__/template.marko": `__tests__/template.marko;${((_w0) => `b/${_w0}&`)($D_content__walks)};${((_w0) => `<!>${_w0}`)($D_content__template)}`,
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;D ;<span> </span>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = new Set();
	let n = 0;
	const D = { content: _content("__tests__/template.marko_1*content", ({ on }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		const f = function() {
			return "A";
		};
		_if(() => {
			if (on) {
				const $scope2_id = _scope_id();
				_html(`<span>${_text_mark($scope2_id, "#text/0", f(), 1, 0, 0)}</span>`);
				_scope($scope2_id, {}, "__tests__/template.marko", "4:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, _write_guard($scope1_reason, 0), 1, 0, 0, ["__tests__/template.marko_2*shell"], $scope1_reason, 0);
		_html(`<button>${_text_mark($scope1_id, "#text/2", n)}</button>${_el_mark($scope1_id, "#button/1")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_subscribe($n__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2", { f: "3:10" }), "__tests__/template.marko_1_n#0:1/subscribe");
	}, $scope0_id) };
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	D.content({ on: true });
	_patch_child_end();
	_scope($scope0_id, {
		n,
		"ClosureScopes:n/2": $n__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { n: "1:6" });
	_resume_branch($scope0_id);
}, 1);
