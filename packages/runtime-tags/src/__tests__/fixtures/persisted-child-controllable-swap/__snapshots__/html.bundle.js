// tags/counter/index.marko
const $template = "<!><!><!>";
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

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a;${_w0};${_w1}`)(((_w0) => `E lDb%l/${_w0}&l`)("b%c"), ((_w0) => `<main><h1> </h1><p>Last <!></p>${_w0}</main>`)($template)) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let last = 0;
	const plain = _resume((next) => {
		last = next;
	}, "a0", $scope0_id);
	const tenfold = _resume((next) => {
		last = next * 10;
	}, "a1", $scope0_id);
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_owned, 1)}</h1><p>Last ${_text_resume($scope0_id, "b", last, 2)}</p>`);
	_set_serialize_reason({
		0: _mask_group($scope0_owned, 0),
		1: _mask_group($scope0_owned, 2),
		2: _mask_group($scope0_owned, 3)
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "c", $childScope);
	counter_default({
		show: input.show,
		onCount: input.big ? tenfold : plain
	});
	_html("</main>");
	$scope0_reason && _scope($scope0_id, {
		j: plain,
		k: tenfold,
		c: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1, () => [counter_default]);
