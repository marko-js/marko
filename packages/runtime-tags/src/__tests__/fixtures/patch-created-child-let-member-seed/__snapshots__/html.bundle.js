// tags/child.marko
const $template = "<em> </em><button>set</button>";
const $walks = "D l b";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0;D l ;<em> </em><button>set</button>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let user = input.user;
	_html(`<em>${_text_resume($scope0_id, "a", 0, void 0, 0, 0, 1)}</em><button>set</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b0");
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "wh", user?.name?.length, 1);
	_scope($scope0_id, { h: user?.name?.length });
});

// template.marko
_shells({
	a: "a !; ;<main></main>",
	a1: /*@__PURE__*/ ((_w0) => `a1${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			child_default({ user: input.user });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a0");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a1"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.user }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va2", input.user, !_server_guard($scope0_reason, 1));
}, 1);
