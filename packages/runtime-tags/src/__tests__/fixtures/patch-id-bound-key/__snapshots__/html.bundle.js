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
	a: "a !;b%;<!><!><!>",
	a4: /*@__PURE__*/ (() => `a4${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `0${_w0}& D l bD%c%l%c`)("")};${/*@__PURE__*/ ((_w0) => `${_w0}<label> </label><input><p><!>:<!></p><!><!>`)("")}`)(),
	a5: "a5;b%;<!><!><!>",
	a3: "a3 a11!a1;Db%l ;<span>Seen <!></span><button>+</button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 2), $wi__input_keys__OR__input_show = _write_if($scope0_reason, 0), $cg__input_keys = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_show__closures = /* @__PURE__ */ new Set();
	_for_of(input.keys, (name) => {
		const $scope1_id = _scope_id();
		const $for_content__store_set__closures = /* @__PURE__ */ new Set();
		const $childScope = _peek_scope_id($scope1_id, "a", 0, 1);
		let store = store_default({});
		_var($scope1_id, "b", $childScope, "a0");
		_patch_child_end();
		const uid = _id("A");
		_html(`<label${_attr("for", uid, $scope1_id, "ac$for", 0, 0)}>${_text_resume($scope1_id, "d", name, 1, $scope0_reason, 1)}</label>${_el_resume($scope1_id, "c", 0)}<input${_attr("id", uid, $scope1_id, "ae$id", 0, 0)}>${_el_resume($scope1_id, "e", 0)}<p>${_text_resume($scope1_id, "f", name, 1, $scope0_reason, 1)}:${_text_resume($scope1_id, "g", store.last, 2)}</p>`);
		_for_of(input.keys.toReversed(), (other) => {
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
					_subscribe($for_content__store_set__closures, _scope($scope3_id, {
						c: count,
						_: _scope_with_id($scope2_id),
						d: $countChange
					}));
					return 0;
				}
			}, $scope2_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a3"], $scope0_reason, 0);
			_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, $cg__input_show ? "a6" : "a7");
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _scope($scope2_id, {
				M: _unfilled_if($scope0_reason, 2) && other,
				_: _scope_with_id($scope1_id)
			}), $cg__input_show && "a7", $wg__input_show);
		}, (n) => n, $scope1_id, "h", 1, void 0, void 0, void 0, void 0, "a5", $scope0_reason, 1);
		$cg__input_keys && _patch_init($scope1_id, "a8");
		_scope($scope1_id, {
			M: _unfilled_if($scope0_reason, 2) && name,
			l: $wi__input_keys__OR__input_show && store?.set,
			_: $wi__input_keys__OR__input_show && _scope_with_id($scope0_id),
			a: _existing_scope($childScope),
			o: $for_content__store_set__closures
		});
	}, (n) => n, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a4", $scope0_reason, 1);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.show,
		g: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_show__closures
	}) || _filled_guard($scope0_reason, 2) && $cg__input_keys && _patch_fill($scope0_id, "va9", input.show, !_server_guard($scope0_reason, 2));
}, 1);
