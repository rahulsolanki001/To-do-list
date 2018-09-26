// Check Off specific todo's by clicking

$('ul').on('click','li',function(){
	$(this).toggleClass('completed')
	
});

$('ul').on('click','span',function(event){
	$(this).parent().fadeOut('slow',function(){
		$(this).remove()
	});
	event.stopPropagation();
})

$('input[type="text"').keypress(function(event){
	if(event.which===13){
		//grabbing new text from input
		var text= $(this).val()
		$(this).val('')
		$('ul').append('<li><span><I class="fa fa-trash"></i> </span>'+text+'</li>')
	}
})

$('.fa-plus').click(function(){
	$('input[type="text"').fadeToggle('slow')

})