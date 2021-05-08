function hideall(){
    $('.Android').hide();
    $('.Web').hide();
    $('.Game').hide();
    console.log("hide");
}
function rmAll(){
    $('.android').find('a').removeClass('active');
    $('.web').find('a').removeClass('active');
    $('.game').find('a').removeClass('active');
}
function setActive(c){
    rmAll();
    if(c==1){
        $('.android').find('a').addClass('active');
    }
    if(c==2){
        $('.web').find('a').addClass('active');
    }
    if(c==3){
        $('.game').find('a').addClass('active');
    }
}
$('.android').on('click',function(){
    hideall();
    setActive(1);
    $('.Android').show();
    console.log('android');
});

$('.web').on('click',function(){
    hideall();
    setActive(2);
    $('.Web').show();
    console.log('web');
});

$('.game').on('click',function(){
    hideall();
    setActive(3);
    $('.Game').show();
    console.log('game');
});