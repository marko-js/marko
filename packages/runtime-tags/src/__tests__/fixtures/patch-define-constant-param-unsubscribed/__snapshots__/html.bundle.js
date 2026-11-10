// template.marko
const $E_content__walks = "D%c%l";
const $E_content__template = "<span><!> <!></span>";
const $D_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%c`)($E_content__walks);
const $D_content__template = /*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($E_content__template);
_shells({
	a: `a !a4;${((_w0) => `/${_w0}& b`)($D_content__walks)};${((_w0) => `${_w0}<button>t</button>`)($D_content__template)}`,
	a2: `a2 >a>a1;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($E_content__walks)};${$E_content__template}`
});
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	const D = { content: _content("a3", ({ label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		const l = label + "!";
		const E = { content: _content("a0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html(`<span>${_text_mark($scope2_id, "a", l, 1, $scope1_reason, 0)} ${_text_mark($scope2_id, "b", n, 2)}</span>`);
			_subscribe($n__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a1");
		}, $scope1_id) };
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		E.content({});
		_patch_child_end();
		_for_of([1, 2], (i) => {
			const $scope3_id = _scope_id();
			const $childScope2 = _peek_scope_id($scope3_id, "a", 1, 0, $scope1_id);
			E.content({});
			_patch_child_end();
			_scope($scope3_id, { a: _existing_scope($childScope2) });
		}, 0, $scope1_id, "b", 1, 1, 1, 0, 0, "a2", 0, 0);
		_scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, $scope0_id) };
	_set_scope_reason(0);
	const $childScope3 = _peek_scope_id($scope0_id, "a", 2);
	D.content({ label: "x" });
	_patch_child_end();
	_html(`<button>t</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		c: n,
		d: $n__closures,
		a: _existing_scope($childScope3)
	});
}, 1);
