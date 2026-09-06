// tags/store.marko
_shells({ b: "b !," });
var store_default = _template_persisted("b", (input) => {
	_persisted_reason();
	const $scope0_id = _scope_id();
	let last = 0;
	const $return = {
		last,
		set: _resume(function(next) {
			last = next;
		}, "b0", $scope0_id)
	};
	_patch_value($scope0_id, "b0", last, 1);
	return $return;
}, 0, 0);

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0 !a2;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `0${_w0}&D lDb%l b`)(""), /*@__PURE__*/ ((_w0) => `${_w0}<p> </p><span>Seen <!></span><button>+</button>`)(""))
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope);
			let store = store_default({});
			_var($scope1_id, "b", $childScope, "a1");
			_owned_guard(0, 0) && _patch_write($scope1_id, "f", store, 1);
			let count = 0;
			_html(`<p>${_text_resume($scope1_id, "c", store.last)}</p><span>Seen ${_text_resume($scope1_id, "d", count, 2)}</span><button>+</button>${_el_resume($scope1_id, "e")}`);
			_script($scope1_id, "a2");
			_patch_value($scope1_id, "a0", count, 1);
			_patch_bind($scope1_id, "j", store.set || void 0);
			_scope($scope1_id, {
				i: count,
				a: _existing_scope($childScope),
				j: store.set || void 0
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"], $scope0_owned, 0);
	$scope0_reason && _scope($scope0_id, {});
}, 1, () => [store_default]);
