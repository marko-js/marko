// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $hide__closures = /* @__PURE__ */ new Set();
	let hide = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}<ul>`);
	_for_of(input.head, (item) => {
		const $scope3_id = _scope_id();
		_html(`<i>${_escape(item)}${_el_resume($scope3_id, "a")}</i>`);
		writeScope($scope3_id, {});
	}, 0, $scope0_id, "b", 1, 1, 1, "</ul>", 1);
	_await($scope0_id, "c", resolveAfter(input.mid, 1), (mid) => {
		const $scope1_id = _scope_id();
		_html("<ol>");
		_for_of(mid, (item) => {
			const $scope4_id = _scope_id();
			_html(`<b>${_escape(item)}${_el_resume($scope4_id, "a")}</b>`);
			writeScope($scope4_id, {});
		}, 0, $scope1_id, "a", 1, 1, 1, "</ol>", 1);
		_subscribe($hide__closures, writeScope($scope1_id, {
			c: mid,
			_: _scope_with_id($scope0_id)
		}));
		_resume_branch($scope1_id);
	});
	_await($scope0_id, "d", resolveAfter(input.tail, 5), (tail) => {
		const $scope2_id = _scope_id();
		_html("<ol>");
		_for_of(tail, (item) => {
			const $scope5_id = _scope_id();
			_html(`<em>${_escape(item)}${_el_resume($scope5_id, "a")}</em>`);
			writeScope($scope5_id, {});
		}, 0, $scope2_id, "a", 1, 1, 1, "</ol>", 1);
		_subscribe($hide__closures, writeScope($scope2_id, {
			c: tail,
			_: _scope_with_id($scope0_id),
			Cl: 1
		}));
		_resume_branch($scope2_id);
	});
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		g: input.head,
		j: hide,
		l: $hide__closures
	});
	_resume_branch($scope0_id);
}, 1);
