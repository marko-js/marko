// tags/grand/index.marko
const $template$1 = "<div><!><button>+</button></div>";
const $walks$1 = "D%b l";
_shells({ c: "c !c0;D%b ;<div><!><button>+</button></div>" });
var grand_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	_html("<div>");
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $wg__input_content);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</div>`);
	_script($scope0_id, "c0");
	_patch_value($scope0_id, "vc2", open, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.content,
		f: open
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "vc1", input.content, !_server_guard($scope0_reason, 0));
});

// tags/child/index.marko
const $template = /*@__PURE__*/ ((_w0) => `<section><h2> </h2>${_w0}</section>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `E l/${_w0}&l`)($walks$1);
_shells({ b: /*@__PURE__*/ (() => `b;${((_w0) => `E l/${_w0}&l`)($walks$1)};${((_w0) => `<section><h2> </h2>${_w0}</section>`)($template$1)}`)() });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<section><h2>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</h2>`);
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	const $childScope = _patch_child($scope0_id, "b");
	grand_default({ content: input.content });
	_html("</section>");
	$scope0_page && _scope($scope0_id, { b: _existing_scope($childScope) });
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !;${((_w0) => `D/${_w0}&l`)($walks)};${((_w0) => `<main>${_w0}</main>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_note = _write_guard($scope0_reason, 1), $wi__input_note = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "a");
	child_default({
		title: input.title,
		content: _content_resume("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_text_resume($scope1_id, "a", input.note, $wg__input_note)}</em>`);
			_subscribe($wi__input_note && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0", $wg__input_note);
			$wg__input_note || _resume_branch($scope1_id);
		}, $scope0_id)
	});
	_html("</main>");
	$scope0_page ? _scope($scope0_id, {
		e: input.note,
		f: $wi__input_note && $input_note__closures,
		a: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "va2", input.note, !_server_guard($scope0_reason, 1));
}, 1);
