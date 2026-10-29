// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1",
	a2: "a2;D ;<em> </em>",
	a3: "a3 a9;b%;<!><!><!>",
	a: "a !a5;E l%b ;<main><h1> </h1><!><button>Next</button></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<main><h1>${_text_resume($scope0_id, "a", input.title, 1, $scope0_reason, 0)}</h1>`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", resolveAfter("v0", n), (value) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_text_resume($scope3_id, "a", value)}</em>`);
			_scope($scope3_id, {});
		}, 1, "a0", 2, 1);
		_subscribe($n__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a4", 0);
		_resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, void 0, "a1", void 0, "a3", 1, 0, 2);
	_html(`<button>Next</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a5");
	_scope($scope0_id, {
		g: n,
		h: $n__closures
	});
}, 1);
