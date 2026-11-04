// template.marko
const $D_content__walks = "b%c";
const $D_content__template = "<!><!><!>";
_shells({
	a: `a !a2;${((_w0) => `b/${_w0}& D l`)($D_content__walks)};${((_w0) => `<!>${_w0}<button> </button>`)($D_content__template)}`,
	a0: "a0;D ;<span> </span>"
});
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const D = { content: _content("a1", ({ on }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__on = _write_guard($scope1_reason, 0);
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
		}, $scope1_id, "a", 1, $wg__on, 1, 0, 0, ["a0"], $scope1_reason, 0);
		_write_if($scope1_reason, 0) && _scope($scope1_id, { e: _unfilled_if($scope1_reason, 0) && f });
	}, $scope0_id) };
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	D.content({ on: true });
	_patch_child_end();
	let n = 0;
	_html(`<button>${_text_mark($scope0_id, "c", n)}</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		d: n,
		a: _existing_scope($childScope)
	});
}, 1);
