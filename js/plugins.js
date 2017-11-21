;(function($){
	$.fn.add = function(id,obj){
		minhas =[];
		$.each(series,function(i,serie){
			if(series.id == id){
				minhas.push(serie);
				return minhas;
			}
		});
	}
})(jQuery);