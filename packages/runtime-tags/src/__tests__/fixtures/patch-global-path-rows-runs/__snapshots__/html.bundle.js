// track.ts
function track(where, value) {
	console.log(where, value);
	return value;
}

// template.marko
_shells({ a: "a !a1; b ;<button>+</button><ul></ul>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let n = 1;
	_html(`<button>+</button>${_el_resume($scope0_id, "a")}<ul>`);
	_for_until(n, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_resume($scope1_id, "a", track("li", $global$1.o.x), $scope0_page)}</li>`);
		_fill_global_subscribe("a0", $scope0_id, 1);
		_scope($scope1_id, {});
	}, 0, $scope0_id, "b", 1, 1, 1, "</ul>", 1);
	_script($scope0_id, "a1");
	_scope($scope0_id, { c: n });
}, 1);
