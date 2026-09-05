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
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `0${_w0}&D%c%l%c`)(""), /*@__PURE__*/ ((_w0) => `${_w0}<p><!>:<!></p><!><!>`)("")),
	a1: "a1;b%;<!><!><!>",
	a2: "a2 a6!a4;Db%l ;<span>Seen <!></span><button>+</button>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_show__closures = /* @__PURE__ */ new Set();
	_for_of(["x", "y"], (name) => {
		const $scope1_id = _scope_id();
		const $for_content__store_set__closures = /* @__PURE__ */ new Set();
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "a", $childScope);
		let store = store_default({});
		_var($scope1_id, "b", $childScope, "a3");
		_owned_guard(0, 0) && _patch_write($scope1_id, "h", store, 1);
		_html(`<p>${_patch_text($scope1_id, "c", name)}:${_text_resume($scope1_id, "d", store.last, 2)}</p>`);
		_for_of(["y", "x"], (other) => {
			const $scope2_id = _scope_id();
			_if(() => {
				if (input.show && other === name) {
					const $scope3_id = _scope_id();
					let count = 0;
					_html(`<span>Seen ${_text_resume($scope3_id, "a", count, 2)}</span><button>+</button>${_el_resume($scope3_id, "b")}`);
					_script($scope3_id, "a4");
					_patch_value($scope3_id, "a0", count, 1);
					_patch_bind($scope3_id, "d", store.set || void 0);
					_subscribe($for_content__store_set__closures, _scope($scope3_id, {
						c: count,
						_: _scope_with_id($scope2_id),
						d: store.set || void 0
					}));
					return 0;
				}
			}, $scope2_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a2"], $scope0_owned, 0);
			_subscribe(_source_if($scope0_reason, 0) && $input_show__closures, _scope($scope2_id, {
				c: other,
				_: _scope_with_id($scope1_id)
			}));
		}, (n) => n, $scope1_id, "e", 1, 1, 0, void 0, void 0, "a1", 0, 0);
		_scope($scope1_id, {
			g: name,
			j: store?.set,
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope),
			l: $for_content__store_set__closures
		});
	}, (n) => n, $scope0_id, "a", 1, 1, 0, void 0, void 0, "a0", 0, 0);
	$scope0_reason && _scope($scope0_id, { e: $input_show__closures });
}, 1, () => [store_default]);
