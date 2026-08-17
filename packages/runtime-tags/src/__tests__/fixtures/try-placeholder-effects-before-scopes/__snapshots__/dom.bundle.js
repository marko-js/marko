// tags/child.marko
const $template$1 = "<section> </section>";
const $walks$1 = " D l";
const $input_workspace_id__script = _script("b0", ($scope) => _lifecycle($scope, {
	onMount: function() {
		console.log("child mounted", $scope.f);
	},
	onDestroy: function() {
		console.log("child destroyed", $scope.f);
	}
}));
const $input_workspace_id = /*@__PURE__*/ _const(5, $input_workspace_id__script);
const $input_active = ($scope, input_active) => _attr_class($scope.a, input_active ? "on" : "off");
const $input_workspace_name = ($scope, input_workspace_name) => _text($scope.b, input_workspace_name);
const $input_workspace = ($scope, input_workspace) => {
	$input_workspace_id($scope, input_workspace?.id);
	$input_workspace_name($scope, input_workspace?.name);
};

// tags/shell.marko
const $template = "<div><a href=#b>open b</a><!></div>";
const $walks = " Db%l";
const $if_content__selectedId__OR__ws_id = /*@__PURE__*/ _or(1, ($scope) => $input_active($scope.a, $scope._.f === $scope._._.g));
const $if_content__selectedId = /*@__PURE__*/ _closure_get(11, $if_content__selectedId__OR__ws_id, ($scope) => $scope._._);
const $if_content__setup = ($scope) => {
	$if_content__selectedId($scope);
	$if_content__ws._($scope);
	$if_content__ws_id._($scope);
};
const $if_content__ws = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_workspace($scope.a, $scope._.e));
const $if_content__ws_id = /*@__PURE__*/ _if_closure(0, 0, $if_content__selectedId__OR__ws_id);
const $for_content__if = /*@__PURE__*/ _if(0, $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $for_content__ws = /*@__PURE__*/ _const(4, ($scope) => {
	$for_content__ws_id($scope, $scope.e?.id);
	$for_content__if($scope, $scope.e ? 0 : 1);
	$if_content__ws($scope);
});
const $for_content__input_workspaces__OR__id = /*@__PURE__*/ _or(3, ($scope) => $for_content__ws($scope, $scope._.f.find((w) => w.id === $scope.c)));
const $for_content__input_workspaces = /*@__PURE__*/ _for_closure(1, $for_content__input_workspaces__OR__id);
const $for_content__setup = $for_content__input_workspaces;
const $for_content__ws_id = /*@__PURE__*/ _const(5, $if_content__ws_id);
const $for_content__id = /*@__PURE__*/ _const(2, $for_content__input_workspaces__OR__id);
const $for_content__$params = ($scope, $params2) => $for_content__id($scope, $params2[0]);
const $selectedId = /*@__PURE__*/ _let(6, /* @__PURE__ */ _closure($if_content__selectedId));
const $input_status__OR__open = /*@__PURE__*/ _or(9, _script("c1", ($scope) => _lifecycle($scope, {
	onMount: function() {
		console.log("shell mounted", $scope.e);
		const abort = new AbortController();
		document.addEventListener("click", (e) => {
			if (e.defaultPrevented) return;
			const a = e.target.closest("a[href]");
			if (!a) return;
			e.preventDefault();
			$scope.i(a.getAttribute("href").slice(1));
		}, {
			capture: true,
			signal: abort.signal
		});
		return { abort };
	},
	onDestroy: function() {
		console.log("shell destroyed", $scope.e);
		this.abort.abort();
	}
})));
const $open2 = /*@__PURE__*/ _const(8, $input_status__OR__open);
const $for = /*@__PURE__*/ _for_of(1, "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $openIds = /*@__PURE__*/ _let(7, ($scope) => {
	$open2($scope, $open($scope));
	$for($scope, [$scope.h, (id) => id]);
});
function $setup($scope) {
	$selectedId($scope, "a");
	$openIds($scope, ["a"]);
}
const $input_status = /*@__PURE__*/ _const(4, ($scope) => {
	_attr($scope.a, "data-status", $scope.e);
	$input_status__OR__open($scope);
});
const $input_workspaces = /*@__PURE__*/ _const(5, $for_content__input_workspaces);
const $open = ($scope) => (id) => {
	$selectedId($scope, id);
	if (!$scope.h.includes(id)) $openIds($scope, $scope.h.concat(id));
};
_resume("c0", $open);

// template.marko
const $placeholder_content__workspaces = /*@__PURE__*/ _closure_get(2, ($scope) => $input_workspaces($scope.a, $scope._.b));
const $placeholder_content__setup = ($scope) => {
	$placeholder_content__workspaces($scope);
	$setup($scope.a);
	$input_status($scope.a, "loading");
};
const $placeholder_content = _content_resume("a0", $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $placeholder_content__setup);
