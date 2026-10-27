// tags/card.marko
const $template$1 = "<p> </p>";
const $setup$1 = [[], []];
_shells({ b: "b;D ;<p> </p>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const f = input.opts.fn;
	_html(`<p>${_patch_text($scope0_id, "a", f(), void 0, (_mask_group($scope0_reason, 0) & 1) << 1, 0)}</p>`);
	$scope0_page && _scope($scope0_id, {});
});

// tags/outer.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ c: /*@__PURE__*/ ((_w0) => `c${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template$1) });
var outer_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "a", 0);
	card_default(input);
	_patch_child_end();
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a1: /*@__PURE__*/ ((_w0) => `a1${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _patch_child($scope1_id, "a", 0);
			outer_default({ opts: _patch_live($childScope, { fn() {
				return "f:" + input.label;
			} }, $scope1_id, ">e") });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a0");
			$scope0_page && _scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a1"], $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, { e: _write_if($scope0_reason, 0) && input.label }) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va2", input.label, !_server_guard($scope0_reason, 1));
}, 1);
