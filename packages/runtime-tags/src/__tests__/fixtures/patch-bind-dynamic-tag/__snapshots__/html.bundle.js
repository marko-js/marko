// tags/child.marko
const $template = "<!><!><!>";
_shells({
	b: "b !;b%;<!><!><!>",
	b0: "b0 !b2;Db%l ;<span>Seen <!></span><button>+</button>"
});
var child_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let count = 0;
			input.on && _filled_guard($scope0_reason, 2) && _patch_value($scope1_id, "b1", count);
			_html(`<span>Seen ${_text_resume($scope1_id, "a", count, 2)}</span><button>+</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "b2");
			_patch_value($scope1_id, "b1", count, 1);
			_patch_bind($scope1_id, "d", input.on || void 0);
			_scope($scope1_id, {
				c: count,
				_: _scope_with_id($scope0_id),
				d: input.on || void 0
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b0"], $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, { e: input.on }) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "b3", input.on);
});

// tags/store.marko
_shells({ c: "c !," });
var store_default = _template_patch("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let last = 0;
	const $return = {
		last,
		set: _resume(function(next) {
			last = next;
		}, "c0", $scope0_id)
	};
	_patch_value($scope0_id, "c1", last, 1);
	return $return;
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a;${((_w0, _w1) => `0${_w0}&D l/${_w1}&b`)("", "b%c")};${((_w0, _w1) => `${_w0}<p> </p>${_w1}<!>`)("", $template)}`)() });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	let store = store_default({});
	_var($scope0_id, "b", $childScope, "a0");
	_html(`<p>${_text_resume($scope0_id, "c", store.last)}</p>`);
	_set_scope_reason(38 | _mask_group($scope0_reason, 0) << 3);
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "d", $childScope2);
	child_default({
		show: input.show,
		on: store.set
	});
	$scope0_page && _scope($scope0_id, {
		a: _existing_scope($childScope),
		d: _existing_scope($childScope2)
	});
}, 1);
