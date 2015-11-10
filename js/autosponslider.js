var spon_len,curr=1,prev_curr=1;
$(function(){
	var ori = $('#tp').html(),edit='';
	$('#tp').prepend(ori.replace(/spons_head/g, "sh_cirl"));
	$('#tp').append(ori.replace(/spons_head/g, "sh_cirr"));
	spon_len = $('.spons_head').length;
	$('.spons_head:nth-child('+(spon_len+curr)+')').trigger( "click" );
	setInterval(function(){
		if(prev_curr!=curr||$(window).width()<550||$(document).scrollTop()<($('#sponsors').offset().top-($(window).height())/2))
		{
			prev_curr = curr;
		}
		else
		{
			curr++;
			if(curr>spon_len)
			{
				curr=1;
			}
			prev_curr=curr;
			$('.spons_head:nth-child('+(spon_len+curr)+')').trigger( "click" );
		}
	},3000);
});
$('.spons_head').click(function() {
	var elewid = $(this).width();
	var mid = $('#spons').width();
	mid = mid/2;
	var leftpos = $(this).position().left;
	var leftdivpos = $('#spons').offset().left;
	var shift = mid -  leftpos  - 30 - (elewid/2) ;
	$('#tp').animate({'left':shift},300);
	curr = $(this).index()-spon_len+1;
});
$(document).on("click", ".sh_cirl", function() {
	var index = $(this).index();
	var cont_left =$('#tp').position().left,
	diff_left = $(this).position().left-$('.spons_head:nth-child('+(spon_len+1+index)+')').position().left;
	$('#tp').css('left',(cont_left + diff_left));
	$('.spons_head:nth-child('+(spon_len+1+index)+')').trigger( "click" );
});
$(document).on("click", ".sh_cirr", function() {
	var index = $(this).index()-(2*spon_len);
	var cont_left =$('#tp').position().left,
	diff_left = $(this).position().left-$('.spons_head:nth-child('+(spon_len+1+index)+')').position().left;
	$('#tp').css('left',(cont_left + diff_left)+'px');
	$('.spons_head:nth-child('+(spon_len+1+index)+')').trigger( "click" );
});
