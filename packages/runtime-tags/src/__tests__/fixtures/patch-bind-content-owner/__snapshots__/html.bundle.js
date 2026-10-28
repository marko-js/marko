// tags/store.marko
const $setup$2 = [[], []];
_shells({ c: "c !," });
_stateful_return("c");
var store_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let last = 0;
	const $return = {
		last,
		set: _resume(function(next) {
			last = next;
		}, "c0", $scope0_id)
	};
	_patch_fill($scope0_id, "vc1", last, 1);
	return $return;
});

// tags/frame.marko
const $template = "<section><!></section>";
const $setup$1 = [[], []];
_shells({ b: "b;D%;<section><!></section>" });
var frame_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$2], ["d>", $setup$1]);
_shells({
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `0${_w0}&D l/${_w1}&`)("", "D%l")};${((_w0, _w1) => `${_w0}<p> </p>${_w1}`)("", $template)}`)(),
	a3: "a3 a7!a1;Db%l ;<span>Seen <!></span><button>+</button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $wi__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $store_set__closures = /* @__PURE__ */ new Set();
	const $input_show__closures = /* @__PURE__ */ new Set();
	const $childScope = _peek_scope_id($scope0_id, "a", 0, 1);
	let store = store_default({});
	_var($scope0_id, "b", $childScope, "a0");
	_patch_child_end();
	_html(`<p>${_text_resume($scope0_id, "c", store.last)}</p>`);
	_set_scope_reason(0);
	const $childScope2 = _peek_scope_id($scope0_id, "d", 1);
	frame_default({ content: _content("a5", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				let count = 0;
				_html(`<span>Seen ${_text_resume($scope2_id, "a", count, 2)}</span><button>+</button>${_el_resume($scope2_id, "b")}`);
				_script($scope2_id, "a1");
				const $countChange = store.set || void 0;
				_patch_fill($scope2_id, "va2", count, 1);
				_patch_bind($scope2_id, "wd", $countChange);
				_subscribe($store_set__closures, _scope($scope2_id, {
					c: count,
					_: _scope_with_id($scope1_id),
					d: $countChange
				}));
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_show, 1, 0, 0, ["a3"], $scope0_reason, 0);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "a4", $wg__input_show);
		$wg__input_show || _resume_branch($scope1_id);
	}, $scope0_id) });
	_patch_child_end();
	_scope($scope0_id, {
		j: $wi__input_show && store?.set,
		a: _existing_scope($childScope),
		l: $store_set__closures,
		k: $wi__input_show && _unfilled_if($scope0_reason, 0) && $input_show__closures,
		d: _existing_scope($childScope2)
	});
}, 1);
