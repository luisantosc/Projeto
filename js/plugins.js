;(function($){
	$.fn.complete = function(series){
		$.each(series,function(i,obj){
					$(".main-series")
						.append($("<div/>").addClass("main_conteudo")
						.append($("<div/>").addClass("serie")
						.append($("<img/>")
							.attr("src",obj.poster)
							.attr("id",obj.id)
							)
						)
					)
				});
	}
})(jQuery);