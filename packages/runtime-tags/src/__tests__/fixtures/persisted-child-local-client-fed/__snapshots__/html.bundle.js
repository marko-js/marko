// tags/child.marko
const $template = "<div><!><button id=c>c</button></div>";
const $walks = "D%b l";
_shells({
	b: "b !b2;D%b ;<div><!><button id=c>c</button></div>",
	b0: "b0 b4;D ;<p> </p>"
});
var child_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let c = 0;
	_html("<div>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const l = input.label + "!";
			_owned_guard($scope0_owned, 1) ? _patch_value($scope1_id, "b2", l) : _patch_init($scope1_id, "b1");
			_html(`<p>${_text_resume($scope1_id, "a", l + "#0")}</p>`);
			_scope($scope1_id, {
				b: l,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["b0"], $scope0_owned, 0);
	_html(`<button id=c>c</button>${_el_resume($scope0_id, "b")}</div>`);
	_script($scope0_id, "b2");
	_patch_value($scope0_id, "b1", c, 1);
	$scope0_reason ? _scope($scope0_id, {
		f: input.label,
		g: c
	}) : _owned_guard($scope0_owned, 1) && _client_guard($scope0_owned, 0) && _patch_value($scope0_id, "b0", input.label);
}, 0, 0);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a !a0;${_w0};${_w1}`)(((_w0) => `D/${_w0}& l`)($walks), ((_w0) => `<main>${_w0}<button id=p>p</button></main>`)($template)) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html("<main>");
	_set_serialize_reason({
		0: _mask_group($scope0_owned, 0),
		1: 1
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	child_default({
		show: input.show,
		label: "Y"
	});
	_html(`<button id=p>p</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason && _scope($scope0_id, {
		f: n,
		a: _existing_scope($childScope)
	});
}, 1, () => [child_default]);
