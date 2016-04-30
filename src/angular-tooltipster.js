(function(angular) {
	angular.module("tooltipster",[]).directive('tooltipTitle', function() {
	    return {
            restrict: 'A',
            scope: {
                tooltipTitle: '@',
                tooltipOptions: "="
            },
            link: function(scope, element, attrs) {

                if (!scope.tooltipTitle) {
                    return;
                }
                
                var tooltipOptions = scope.tooltipOptions || {};
                var message = scope.tooltipTitle;
                attrs.$observe("tooltipTitle", function (value) {
                    element.tooltipster('content', value);
                    if (!value) {
                        element.tooltipster('disable');
                    } else {
                        element.tooltipster('enable');
                    }
                });

                tooltipOptions.content = message;
                element.tooltipster(tooltipOptions);

                scope.$on("$destroy", function () {
                    element.tooltipster('destroy');
                })
            }
	    }	
	});
})(angular);
