// tags/l1/tags/l2/tags/l3/index.marko
const $template$1 = "<em> </em>";
_shells({ d: "d;D ;<em> </em>" });
var l3_default = _template_persisted("d", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_patch_text($scope0_id, "a", input.note, $scope0_owned, 0)}${_el_resume($scope0_id, "a")}</em>`);
	$scope0_reason && writeScope($scope0_id, {});
}, 0, 0);

// tags/l1/tags/l2/index.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=n> </button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&`)("D l");
_shells({ c: /*@__PURE__*/ ((_w0, _w1) => `c !c0;${_w0};${_w1}`)(((_w0) => ` D l/${_w0}&`)("D l"), ((_w0) => `<button class=n> </button>${_w0}`)($template$1)) });
var l2_default = _template_persisted("c", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=n>${_escape(n)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "c", $childScope);
	l3_default({ note: input.note });
	_script($scope0_id, "c0");
	_patch_value($scope0_id, "c0", n, 1);
	$scope0_reason && writeScope($scope0_id, {
		g: n,
		c: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 0, () => [l3_default]);

// tags/l1/index.marko
_shells({ b: /*@__PURE__*/ ((_w0, _w1) => `b;${_w0};${_w1}`)(((_w0) => `/${_w0}&`)($walks), $template) });
var l1_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	l2_default({ note: input.note });
	$scope0_reason && writeScope($scope0_id, { a: _existing_scope($childScope) });
}, 0, () => [l2_default]);

// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button class=t>t</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		{
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			l1_default({ note: input.note });
			writeScope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button class=t>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason ? writeScope($scope0_id, {
		e: input.note,
		f: show
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.note);
	_resume_branch($scope0_id);
}, 1, () => [l1_default]);
