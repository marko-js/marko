// child.marko
const $template = "<button>+</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["a2"]];
_shells({
	a: "a !a2; b%;<button>+</button><!><!>",
	a1: "a1 a5;D%c%;<span><!>:<!></span>"
});
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>+</button>${_el_resume($scope0_id, "a")}`);
	_for_of([1, 2], (i) => {
		const $scope1_id = _scope_id();
		_html(`<span>${_text_resume($scope1_id, "a", input.label, 1, $scope0_reason, 0)}:${_text_resume($scope1_id, "b", count + i, 2)}</span>`);
		_patch_write($scope1_id, "wd", i, 1);
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "a0");
		_scope($scope1_id, {
			d: i,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "b", 1, 1, 1, 0, 0, "a1", 0, 0);
	_script($scope0_id, "a2");
	_patch_fill($scope0_id, "va3", count, 1);
	_scope($scope0_id, { f: count });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "a", flush, "_a");
_shells({
	b: "b !b2; D l bD ;<button class=n> </button><main></main><p> </p>",
	b1: /*@__PURE__*/ (() => `b1${_shell_marker(_shell_setup([[], []], ["b>", $setup]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=n>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}<main>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "b", 0);
			$Child_withLoadAssets({ label: input.label });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "b0");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				b: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "c", 1, $wg__input_show, 1, 0, 0, ["b1"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "c", $wg__input_show)}<p>${_text_resume($scope0_id, "d", input.label, 1, $scope0_reason, 1)}</p>`);
	_script($scope0_id, "b2");
	_scope($scope0_id, {
		h: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		i: n
	}) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb3", input.label, !_server_guard($scope0_reason, 1));
}, 1);
