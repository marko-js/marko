// tags/counter/index.marko
const $template$1 = "<!><!><!>";
_shells({
	b: "b !;b%;<!><!><!>",
	b0: "b0 !b1;Db%l ;<span>Seen <!></span><button>+</button>"
});
var counter_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let count = 0;
			_html(`<span>Seen ${_text_resume($scope1_id, "a", count, 2)}</span><button>+</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "b1");
			_patch_value($scope1_id, "b1", count, 1);
			_patch_bind($scope1_id, "d", input.onCount || void 0);
			_scope($scope1_id, {
				c: count,
				_: _scope_with_id($scope0_id),
				d: input.onCount || void 0
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["b0"], $scope0_owned, 1);
	$scope0_reason ? _scope($scope0_id, { e: input.onCount }) : _owned_guard($scope0_owned, 2) && _client_guard($scope0_owned, 1) && _patch_value($scope0_id, "b0", input.onCount);
}, 0, 0);

// tags/middle/index.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
_shells({ c: /*@__PURE__*/ ((_w0, _w1) => `c;${_w0};${_w1}`)(((_w0) => `b/${_w0}&b`)("b%c"), ((_w0) => `<!>${_w0}<!>`)($template$1)) });
var middle_default = _template_persisted("c", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_set_serialize_reason({
		0: _mask_group($scope0_owned, 0),
		1: _mask_group($scope0_owned, 1),
		2: _mask_group($scope0_owned, 2)
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	counter_default({
		show: input.show,
		onCount: input.onCount
	});
	$scope0_reason && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 0, () => [counter_default]);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a;${_w0};${_w1}`)(((_w0) => `E lDb%l/${_w0}&l`)($walks), ((_w0) => `<main><h1> </h1><p>Last <!></p>${_w0}</main>`)($template)) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let last = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_owned, 0)}</h1><p>Last ${_text_resume($scope0_id, "b", last, 2)}</p>`);
	_set_serialize_reason({
		0: _mask_group($scope0_owned, 1),
		1: _mask_group($scope0_owned, 1)
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "c", $childScope);
	middle_default({
		show: input.show,
		onCount: _resume(function(next) {
			last = next;
		}, "a0", $scope0_id)
	});
	_html("</main>");
	$scope0_reason && _scope($scope0_id, { c: _existing_scope($childScope) });
}, 1, () => [middle_default]);
