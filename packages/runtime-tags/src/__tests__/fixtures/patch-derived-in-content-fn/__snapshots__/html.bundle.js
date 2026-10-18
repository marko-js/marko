// tags/reader.marko
const $template$1 = "<button>read</button>";
_shells({ b: "b !b0; ;<button>read</button>" });
var reader_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<button>read</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	$scope0_page ? _scope($scope0_id, { c: input }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "wc", input, !_server_guard($scope0_reason, 0));
});

// tags/wrapper.marko
const $template = "<div><!></div>";
_shells({ c: "c;D%;<div><!></div>" });
var wrapper_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 0);
	_html("</div>");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	a2: /*@__PURE__*/ ((_w0) => `a2 a6;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b")};${_w0}`)($template$1),
	a: /*@__PURE__*/ (() => `a;${((_w0) => `/${_w0}&D l`)("D%l")};${((_w0) => `${_w0}<p> </p>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let shown = "";
	_set_scope_reason(0);
	const $childScope2 = _patch_child($scope0_id, "a");
	wrapper_default({ content: _content_elide("a2", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const label = input.label;
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope = _patch_child($scope1_id, "a");
		reader_default({
			read: _resume(() => label, "a0", $scope1_id),
			onRead: _resume(function(value) {
				shown = value;
			}, "a1", $scope1_id)
		});
		_patch_write($scope1_id, "wb", label, 1);
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, {
			b: label,
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		}));
	}, $scope0_id) });
	_html(`<p>${_text_resume($scope0_id, "b", shown)}</p>`);
	_patch_value($scope0_id, "va4", shown, 1);
	$scope0_page ? _scope($scope0_id, {
		g: $wi__input_label && $input_label__closures,
		a: _existing_scope($childScope2)
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "va3", input.label, !_server_guard($scope0_reason, 0));
}, 1);
