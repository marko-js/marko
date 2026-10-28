// tags/store.marko
const $setup$1 = [[], []];
_shells({ b: "b !," });
_stateful_return("b");
var store_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let last = 0;
	const $return = {
		last,
		set: _resume(function(next) {
			last = next;
		}, "b0", $scope0_id)
	};
	_patch_fill($scope0_id, "vb1", last, 1);
	return $return;
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `0${_w0}&E lDb%l%l`)("")};${((_w0) => `${_w0}<main><h1> </h1><p>Last <!></p><!></main>`)("")}`)(),
	a3: "a3 a5!a1;Db%l ;<span>Seen <!></span><button>+</button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id($scope0_id, "a", 0, 1);
	let store = store_default({});
	_var($scope0_id, "b", $childScope, "a0");
	_patch_child_end();
	_html(`<main><h1>${_text_resume($scope0_id, "c", input.title, 1, $scope0_reason, 0)}</h1><p>Last ${_text_resume($scope0_id, "d", store.last, 2)}</p>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let count = 0;
			_html(`<span>Seen ${_text_resume($scope1_id, "a", count, 2)}</span><button>+</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "a1");
			const $countChange = store.set || void 0;
			_patch_fill($scope1_id, "va2", count, 1);
			_patch_bind($scope1_id, "wd", $countChange);
			_scope($scope1_id, {
				c: count,
				_: _scope_with_id($scope0_id),
				d: $countChange
			});
			return 0;
		}
	}, $scope0_id, "e", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a3"], $scope0_reason, 1);
	_html("</main>");
	_scope($scope0_id, {
		l: _write_if($scope0_reason, 1) && store?.set,
		a: _existing_scope($childScope)
	});
}, 1);
