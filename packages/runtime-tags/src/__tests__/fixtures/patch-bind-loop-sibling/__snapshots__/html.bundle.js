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
	a4: /*@__PURE__*/ (() => `a4${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `0${_w0}&D%c%l%c`)("")};${/*@__PURE__*/ ((_w0) => `${_w0}<p><!>:<!></p><!><!>`)("")}`)(),
	a5: "a5;b%;<!><!><!>",
	a3: "a3 a9!a1;Db%l ;<span>Seen <!></span><button>+</button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 0), $cg__input_show = _client_guard($scope0_reason, 0), $wi__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_show__closures = /* @__PURE__ */ new Set();
	_for_of(["x", "y"], (name) => {
		const $scope1_id = _scope_id();
		const $for_content__store_set__closures = /* @__PURE__ */ new Set();
		const $childScope = _patch_child($scope1_id, "a", 0, 1);
		let store = store_default({});
		_var($scope1_id, "b", $childScope, "a0");
		_patch_child_end();
		_html(`<p>${_patch_text($scope1_id, "c", name, void 0, 0, 0)}:${_text_resume($scope1_id, "d", store.last, 2)}</p>`);
		_for_of(["y", "x"], (other) => {
			const $scope2_id = _scope_id();
			_if(() => {
				if (input.show && other === name) {
					const $scope3_id = _scope_id();
					let count = 0;
					_html(`<span>Seen ${_text_resume($scope3_id, "a", count, 2)}</span><button>+</button>${_el_resume($scope3_id, "b")}`);
					_script($scope3_id, "a1");
					const $countChange = store.set || void 0;
					_patch_fill($scope3_id, "va2", count, 1);
					_patch_bind($scope3_id, "wd", $countChange);
					$scope0_page && _subscribe($for_content__store_set__closures, _scope($scope3_id, {
						c: count,
						_: _scope_with_id($scope2_id),
						d: $countChange
					}));
					return 0;
				}
			}, $scope2_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a3"], $scope0_reason, 0);
			_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, $cg__input_show ? "a6" : "a7");
			$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_show__closures, _scope($scope2_id, {
				M: _unfilled_if($scope0_reason, 0) && other,
				_: _scope_with_id($scope1_id)
			}), $cg__input_show && "a7", $wg__input_show);
		}, (n) => n, $scope1_id, "e", 1, void 0, void 0, void 0, void 0, "a5", 0, 0);
		$scope0_page && _scope($scope1_id, {
			M: _unfilled_if($scope0_reason, 0) && name,
			i: $wi__input_show && store?.set,
			_: $wi__input_show && _scope_with_id($scope0_id),
			a: _existing_scope($childScope),
			k: $for_content__store_set__closures
		});
	}, (n) => n, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a4", 0, 0);
	$scope0_page && _scope($scope0_id, { e: $wi__input_show && _unfilled_if($scope0_reason, 0) && $input_show__closures });
}, 1);
