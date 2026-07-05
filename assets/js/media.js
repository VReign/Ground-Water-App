demo={

showNotification: function(from, align){
    	color = 'danger';

    	$.notify({
        	icon: "fa fa-bell-o",
        	message: "sample text of alert"

        },{
            type: color,
            timer: 100000,
            placement: {
                from: from,
                align: align
            }
        });
	}
}