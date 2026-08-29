// tags/relay/tags/leaf/index.marko
const $template$1 = "<b> </b><i> </i>";
const $walks$1 = "D lD l";
_shells({ c: "c;D lD ;<b> </b><i> </i>" });
var leaf_default = _template_persisted("c", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<b>${_patch_text($scope0_id, "a", input.text, void 0, $scope0_owned, 0)}</b><i>${_patch_text($scope0_id, "b", input.note, void 0, $scope0_owned, 1)}</i>`);
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// tags/relay/index.marko
const $template = /*@__PURE__*/ ((_w0) => `<section>${_w0}</section>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$1);
_shells({ b: /*@__PURE__*/ ((_w0, _w1) => `b;${_w0};${_w1}`)(((_w0) => `D/${_w0}&l`)($walks$1), ((_w0) => `<section>${_w0}</section>`)($template$1)) });
var relay_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<section>");
	_set_serialize_reason({
		0: _mask_group($scope0_owned, 0),
		1: _mask_group($scope0_owned, 1)
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	leaf_default({
		text: input.label,
		note: input.qty
	});
	_html("</section>");
	$scope0_reason && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 0, () => [leaf_default]);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a !a0;${_w0};${_w1}`)(((_w0) => `D/${_w0}& l`)($walks), ((_w0) => `<main>${_w0}<button>+</button></main>`)($template)) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_serialize_reason({
		0: _mask_group($scope0_owned, 0),
		1: 1
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	relay_default({
		label: input.title,
		qty: count
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason && _scope($scope0_id, {
		f: count,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1, () => [relay_default]);
