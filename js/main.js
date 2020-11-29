$(window).on('popstate', function() {
    $(".modal").modal('hide');
   //$('#accordion .collapse').collapse('hide');
}); //뒤로가기 시 제이쿼리 발생 무르기

$(".modal").on("shown.bs.modal", function()  {
    var urlReplace = "#" + $(this).attr('modal');
    history.pushState(null, null, urlReplace);
});
