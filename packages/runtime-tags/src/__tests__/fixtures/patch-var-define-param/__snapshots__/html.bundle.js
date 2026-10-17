// tags/labeler.marko
const $template = "<span> </span>";
_shells({ b: "b;D ;<span> </span>" });
var labeler_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<span>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</span>`);
	const $return = "[" + input.title + "]";
	$scope0_page && _scope($scope0_id, {});
	return $return;
});

// template.marko
const $Row_content__walks = /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)("D l");
const $Row_content__template = /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template);
_shells({
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0 !;${_w0};${_w1}`)($Row_content__walks, $Row_content__template),
	a: /*@__PURE__*/ (() => `a !a5;${((_w0) => `b/${_w0}& b`)($Row_content__walks)};${((_w0) => `<!>${_w0}<button>+</button>`)($Row_content__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_suffix = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_suffix__closures = /* @__PURE__ */ new Set();
	let n = 0;
	const Row = { content: _content_elide("a0", ({ value }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		_set_scope_reason((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1);
		const $childScope = _patch_child($scope1_id, "a");
		let label = labeler_default({ title: value + input.suffix });
		(_client_guard($scope0_reason, 0) || _client_guard($scope1_reason, 0)) && _var($scope1_id, "b", $childScope, "a1");
		_html(`<p>${_patch_text($scope1_id, "c", label, void 0, (_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0)}</p>`);
		_patch_write($scope1_id, "wf", value, 1);
		_client_guard((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0) && _patch_init($scope1_id, "a3");
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, "a4");
		$scope1_page ? _subscribe(_unfilled_if((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0) && $wi__input_suffix && $input_suffix__closures, _scope($scope1_id, {
			f: $wi__input_suffix && value,
			_: ($wi__input_suffix || _write_if($scope1_reason, 0)) && _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		}), _client_guard((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0) && "a4") : _filled_guard($scope1_reason, 0) && _client_guard($scope0_reason, 0) && _patch_value($scope1_id, "va2", value, !_server_guard($scope1_reason, 0));
	}, $scope0_id) };
	_set_scope_reason(2);
	const $childScope2 = _patch_child($scope0_id, "a");
	Row.content({ value: n });
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a5");
	_patch_value($scope0_id, "va7", n, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.suffix,
		f: n,
		g: $wi__input_suffix && $input_suffix__closures,
		a: _existing_scope($childScope2)
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "va6", input.suffix, !_server_guard($scope0_reason, 0));
}, 1);
