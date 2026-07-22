// data.js
const CELLS = [{ id: "only" }];

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<p>root</p><button>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_region(() => {
		forOf($global().items, (item) => {
			const $scope1_id = _scope_id();
			_html("<article>");
			_for_of(CELLS, (cell) => {
				const $scope2_id = _scope_id();
				_html(`<span>${_escape(item.id)}${_el_resume($scope2_id, "a", _persisted_reason())}:${_sep(_persisted_reason())}${_escape(item.view)}${_el_resume($scope2_id, "b", _persisted_reason())}:${_escape(cell.id)}</span>`);
				_persisted_reason() && writeScope($scope2_id, { _: _scope_with_id($scope1_id) });
			}, "id", $scope1_id, "a", _persisted_reason(), 0, 0, 0, 1);
			_html("</article>");
			_persisted_reason() && writeScope($scope1_id, {});
		});
	}, $scope0_id, "c");
	_script($scope0_id, "a1");
	writeScope($scope0_id, { d: _state_reason() && count });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a0": ["<p>root</p><button> </button><!><!>", "b D l%c"],
	"a": ["<p>root</p><button> </button><!><!>", "b D l%c"]
});
