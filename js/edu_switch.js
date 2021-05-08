function hideallelem(){
    $('.clg').hide();
    $('.hsc').hide();
    $('.ssc').hide();
}
function rmAlle(){
    $('.study-list-item').find('a').removeClass('active');
    $('.study-list-item').find('span').removeClass('active-span');
}
function setActiven(c){
    rmAlle();
    if(c==1){
        $('.Clg').addClass('active');
        $('.Clg').prev().addClass('active-span');
    }
    if(c==2){
        $('.Hsc').addClass('active');
        $('.Hsc').prev().addClass('active-span');
    }
    if(c==3){
        $('.Ssc').addClass('active');
        $('.Ssc').prev().addClass('active-span');
    }
}
$('.Clg').on('click',function(){
    hideallelem();
    setActiven(1);
    $('.clg').show();
    console.log('clg');
});

$('.Hsc').on('click',function(){
    hideallelem();
    setActiven(2);
    $('.hsc').show();
    console.log('hsc');
});

$('.Ssc').on('click',function(){
    hideallelem();
    setActiven(3);
    $('.ssc').show();
    console.log('ssc');
});