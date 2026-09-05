// tags/store.marko
_shells({ c: "c !," });
var store_default = _template_persisted("c", (input) => {
	_persisted_reason();
	const $scope0_id = _scope_id();
	let last = 0;
	const $return = {
		last,
		set: _resume(function(next) {
			last = next;
		}, "c0", $scope0_id)
	};
	_patch_value($scope0_id, "c0", last, 1);
	return $return;
}, 0, 0);

// tags/child.marko
const $template = "<!><!><!>";
_shells({
	b: "b !;b%;<!><!><!>",
	b0: "b0 !b1;Db%l ;<span>Seen <!></span><button>+</button>"
});
var child_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let count = 0;
			_html(`<span>Seen ${_text_resume($scope1_id, "a", count, 2)}</span><button>+</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "b1");
			_patch_value($scope1_id, "b1", count, 1);
			_patch_bind($scope1_id, "d", input.on || void 0);
			_scope($scope1_id, {
				c: count,
				_: _scope_with_id($scope0_id),
				d: input.on || void 0
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["b0"], $scope0_owned, 1);
	$scope0_reason ? _scope($scope0_id, { e: input.on }) : _owned_guard($scope0_owned, 2) && _client_guard($scope0_owned, 1) && _patch_value($scope0_id, "b0", input.on);
}, 0, 0);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a;${_w0};${_w1}`)(((_w0, _w1) => `0${_w0}&D l/${_w1}&b`)("", "b%c"), ((_w0, _w1) => `${_w0}<p> </p>${_w1}<!>`)("", $template)) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	let store = store_default({});
	_var($scope0_id, "b", $childScope, "a0");
	_owned_guard(0, 0) && _patch_write($scope0_id, "h", store, 1);
	_html(`<p>${_text_resume($scope0_id, "c", store.last)}</p>`);
	_set_serialize_reason({
		0: 3,
		1: _mask_group($scope0_owned, 0),
		2: 1
	});
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "d", $childScope2);
	child_default({
		show: input.show,
		on: store.set
	});
	$scope0_reason && _scope($scope0_id, {
		a: _existing_scope($childScope),
		d: _existing_scope($childScope2)
	});
}, 1, () => [store_default, child_default]);
