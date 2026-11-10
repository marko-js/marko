// template.marko
const $D_content__walks = "b%c";
const $D_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button> </button>`)($D_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& D l`)($D_content__walks);
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `b/${_w0}& D l`)($D_content__walks)};${((_w0) => `<!>${_w0}<button> </button>`)($D_content__template)}`,
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;D ;<span> </span>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const D = { content: _content("__tests__/template.marko_1*content", ({ on }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__on = _write_guard($scope1_reason, 0);
		const f = function() {
			return "A";
		};
		_if(() => {
			if (on) {
				const $scope2_id = _scope_id();
				_html(`<span>${_text_mark($scope2_id, "#text/0", f(), 1, 0, 0)}</span>`);
				_scope($scope2_id, {}, "__tests__/template.marko", "3:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__on, 1, 0, 0, ["__tests__/template.marko_2*shell"], $scope1_reason, 0);
	}, $scope0_id) };
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	D.content({ on: true });
	_patch_child_end();
	let n = 0;
	_html(`<button>${_text_mark($scope0_id, "#text/2", n)}</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { n: "6:6" });
}, 1);
