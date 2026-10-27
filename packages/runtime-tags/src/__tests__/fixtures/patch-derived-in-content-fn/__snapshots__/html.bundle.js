// tags/reader.marko
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
const $setup$1 = [[], []];
_shells({ c: "c;D%;<div><!></div>" });
var wrapper_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</div>");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&D l`)("D%l")};${((_w0) => `${_w0}<p> </p>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let shown = "";
	_set_scope_reason(0);
	const $childScope2 = _patch_child($scope0_id, "a", 1);
	wrapper_default({ content: _content("a3", () => {
		_scope_reason();
		const $scope1_page = _page_render();
		const $scope1_id = _scope_id();
		const label = input.label;
		_filled_guard($scope0_reason, 0) && _patch_write($scope1_id, "xb", label, !_server_guard($scope0_reason, 0));
		_set_scope_reason(($scope0_page ? _mask_group($scope0_reason, 0) : 0) << 1);
		const $childScope = _patch_child($scope1_id, "a", 0);
		reader_default(_patch_live($childScope, {
			read: _bind_resume(() => label, "a0", $scope1_id),
			onRead: _resume(function(value) {
				shown = value;
			}, "a1", $scope1_id)
		}, $scope1_id, "b"));
		_patch_child_end();
		$scope1_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, {
			b: label,
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		}), _client_guard($scope0_reason, 0) && "a2");
	}, $scope0_id) });
	_patch_child_end();
	_html(`<p>${_text_resume($scope0_id, "b", shown)}</p>`);
	$scope0_page && _scope($scope0_id, {
		g: _write_if($scope0_reason, 0) && _unfilled_if($scope0_reason, 0) && $input_label__closures,
		a: _existing_scope($childScope2)
	});
}, 1);
