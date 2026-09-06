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
	a: /*@__PURE__*/ ((_w0, _w1) => `a;${_w0};${_w1}`)(((_w0) => `0${_w0}&E lDb%l%l`)(""), ((_w0) => `${_w0}<main><h1> </h1><p>Last <!></p><!></main>`)("")),
	a0: "a0 a4!a2;Db%l ;<span>Seen <!></span><button>+</button>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	let store = store_default({});
	_var($scope0_id, "b", $childScope, "a1");
	_owned_guard(0, 0) && _patch_write($scope0_id, "j", store, 1);
	_html(`<main><h1>${_patch_text($scope0_id, "c", input.title, void 0, $scope0_owned, 0)}</h1><p>Last ${_text_resume($scope0_id, "d", store.last, 2)}</p>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let count = 0;
			_html(`<span>Seen ${_text_resume($scope1_id, "a", count, 2)}</span><button>+</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "a2");
			_patch_value($scope1_id, "a0", count, 1);
			_patch_bind($scope1_id, "d", store.set || void 0);
			_scope($scope1_id, {
				c: count,
				_: _scope_with_id($scope0_id),
				d: store.set || void 0
			});
			return 0;
		}
	}, $scope0_id, "e", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"], $scope0_owned, 1);
	_html("</main>");
	$scope0_reason && _scope($scope0_id, {
		l: store?.set,
		a: _existing_scope($childScope)
	});
}, 1, () => [store_default]);
