// tags/store.marko
const $setup = [[], []];
_shells({ b: "b !," });
_stateful_return("b");
var store_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let last = 0;
	const $return = {
		last,
		set: _resume(function(next) {
			last = next;
		}, "b0", $scope0_id)
	};
	_patch_fill($scope0_id, "vb1", last, 1);
	return $return;
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a3: /*@__PURE__*/ (() => `a3${_shell_marker(_shell_setup([[], ["a1"]], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `0${_w0}&D lDb%l b`)("")};${/*@__PURE__*/ ((_w0) => `${_w0}<p> </p><span>Seen <!></span><button>+</button>`)("")}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _patch_child($scope1_id, "a", 1);
			let store = store_default({});
			_var($scope1_id, "b", $childScope, "a0");
			let count = 0;
			_html(`<p>${_text_resume($scope1_id, "c", store.last)}</p><span>Seen ${_text_resume($scope1_id, "d", count, 2)}</span><button>+</button>${_el_resume($scope1_id, "e")}`);
			_script($scope1_id, "a1");
			const $countChange = store.set || void 0;
			_patch_fill($scope1_id, "va2", count, 1);
			_patch_bind($scope1_id, "wj", $countChange);
			$scope0_page && _scope($scope1_id, {
				i: count,
				a: _existing_scope($childScope),
				j: $countChange
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a3"], $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {});
}, 1);
