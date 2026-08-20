// tags/grand/index.marko
const $template = "<div><!><button>+</button></div>";
const $walks = "D%b l";
_shells({ c: "c !c0;D%b ;<div><!><button>+</button></div>" });
var grand_default = _template_persisted("c", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let open = true;
	_html("<div>");
	if ($scope0_reason) _if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, _source_guard($scope0_reason, 0));
			writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</div>`);
	_script($scope0_id, "c0");
	_patch_value($scope0_id, "c1", open, 1);
	$scope0_reason ? writeScope($scope0_id, {
		e: input.content,
		f: open
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "c0", input.content);
	_resume_branch($scope0_id);
}, 0, 0);

// tags/child/index.marko
_shells({ b: /*@__PURE__*/ ((_w0, _w1) => `b;${_w0};${_w1}`)(((_w0) => `E l/${_w0}&l`)($walks), ((_w0) => `<section><h2> </h2>${_w0}</section>`)($template)) });
var child_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<section><h2>${_patch_text($scope0_id, "a", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "a")}</h2>`);
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 1) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "b", $childScope);
	grand_default({ content: input.content });
	_html("</section>");
	$scope0_reason && writeScope($scope0_id, { b: _existing_scope($childScope) });
}, 0, () => [grand_default]);

// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	child_default({
		title: input.title,
		content: _content_resume("a0", () => {
			_persisted_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_escape(input.note)}${_el_resume($scope1_id, "a")}</em>`);
			_subscribe(_source_if($scope0_reason, 1) && $input_note__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
			_resume_branch($scope1_id);
		}, $scope0_id)
	});
	_html("</main>");
	$scope0_reason ? writeScope($scope0_id, {
		e: input.note,
		f: $input_note__closures,
		a: _existing_scope($childScope)
	}) : _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "a0", input.note);
}, 1, () => [child_default]);
