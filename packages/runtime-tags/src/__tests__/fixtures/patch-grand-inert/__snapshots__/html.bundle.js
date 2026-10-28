// helper.ts
function stamp() {
	return "stamp";
}

// tags/stamp/index.marko
_shells({ b: "b;D ;<p> </p>" });
var stamp_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p>${_text_resume($scope0_id, "a", stamp(), 1, 0, 0)}</p>`);
	_scope($scope0_id, {});
});

// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_patch_child($scope1_id, "a", 0);
			stamp_default({});
			_patch_child_end();
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { c: show });
}, 1);
