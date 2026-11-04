// template.marko
const $E_content__walks = "D%c%l";
const $E_content__template = "<span><!> <!></span>";
const $D_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%c`)($E_content__walks);
const $D_content__template = /*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($E_content__template);
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>t</button>`)($D_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)($D_content__walks);
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `/${_w0}& b`)($D_content__walks)};${((_w0) => `${_w0}<button>t</button>`)($D_content__template)}`,
	"__tests__/template.marko_3*shell": `__tests__/template.marko_3*shell >#childScope/0>__tests__/template.marko_2_n#0:2/subscribe;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($E_content__walks)};${$E_content__template}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = new Set();
	let n = 0;
	const D = { content: _content("__tests__/template.marko_1*content", ({ label }) => {
		const $scope1_id = _scope_id();
		const $D_content__l__closures = new Set();
		const $scope1_reason = _scope_reason();
		const l = label + "!";
		const E = { content: _content("__tests__/template.marko_2*content", () => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_html(`<span>${_text_mark($scope2_id, "#text/0", l, 1, $scope1_reason, 0)} ${_text_mark($scope2_id, "#text/1", n, 2)}</span>`);
			_subscribe($n__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:4"), "__tests__/template.marko_2_n#0:2/subscribe");
		}, $scope1_id) };
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		E.content({});
		_patch_child_end();
		_for_of([1, 2], (i) => {
			const $scope3_id = _scope_id();
			const $childScope2 = _peek_scope_id($scope3_id, "#childScope/0", 1, 0, $scope1_id);
			E.content({});
			_patch_child_end();
			_scope($scope3_id, { "#childScope/0": _existing_scope($childScope2) }, "__tests__/template.marko", "6:4");
		}, 0, $scope1_id, "#text/1", 1, 1, 1, 0, 0, "__tests__/template.marko_3*shell", 0, 0);
		_scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "2:2");
	}, $scope0_id) };
	_set_scope_reason(0);
	const $childScope3 = _peek_scope_id($scope0_id, "#childScope/0", 2);
	D.content({ label: "x" });
	_patch_child_end();
	_html(`<button>t</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"ClosureScopes:n/3": $n__closures,
		"#childScope/0": _existing_scope($childScope3)
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
