// template.marko
const $D_content__walks = "b%b D l";
const $D_content__template = "<!><!><button> </button>";
_shells({
	a: `a;${((_w0) => `b/${_w0}&`)($D_content__walks)};${((_w0) => `<!>${_w0}`)($D_content__template)}`,
	a0: "a0;D ;<span> </span>"
});
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	const D = { content: _content("a1", ({ on }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		const f = function() {
			return "A";
		};
		_if(() => {
			if (on) {
				const $scope2_id = _scope_id();
				_html(`<span>${_text_mark($scope2_id, "a", f(), 1, 0, 0)}</span>`);
				_scope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "a", 1, _write_guard($scope1_reason, 0), 1, 0, 0, ["a0"], $scope1_reason, 0);
		_html(`<button>${_text_mark($scope1_id, "c", n)}</button>${_el_mark($scope1_id, "b")}`);
		_script($scope1_id, "a2");
		_subscribe($n__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a3");
	}, $scope0_id) };
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	D.content({ on: true });
	_patch_child_end();
	_scope($scope0_id, {
		b: n,
		c: $n__closures,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
