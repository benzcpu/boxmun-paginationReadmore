
function paginationReadmoreItem(object) {
    var groupObject= $('.'+object.classGroupItem);
    var itemObject= $('.'+object.classGroupItem).find('.'+object.classItem);
    var readmore= $('.'+object.classGroupItem).find('.read-more');
    if(window.screen.width<=812 && object.mobile){
        if(object.mobile.showItemInpage!=""){
            object.showItemInpage= object.mobile.showItemInpage;
        }
        if(object.mobile.showNextPageItem!=""){
            object.showNextPageItem= object.mobile.showNextPageItem;
        }
        if(object.mobile.effect!=""){
            object.effect= object.mobile.effect;
        }
    }

    if(object.effect!=""){
        $(itemObject).css({"display":"none"});
    }else{
        $(itemObject).addClass("ui-hidden");
    }


    $.each(itemObject,function(idx,item){
        if(idx<object.showItemInpage){
            if(object.effect!=""){
                $(item).css({"display":""});
            }else{
                $(item).removeClass('ui-hidden');
            }
        }
    });
    $(readmore).attr({"data-group":object.classGroupItem,"data-item":object.classItem,'data-effect':object.effect,'data-showNextPageItem':object.showNextPageItem,"data-showItem":object.showItemInpage,"data-index":object.showItemInpage});

}
$('.read-more').click(function(){
    var self=this;
    var groupObject= $(self).attr('data-group');
    var itemObject= $('.'+groupObject).find('.'+ $(self).attr('data-item'));
    var dataIndex=$(self).attr('data-index');
    var datashowItem=$(self).attr('data-showItem');
    var datashowNextPageItem=$(self).attr('data-showNextPageItem');
    var effect=$(self).attr('data-effect');
    var nextItem=0;
    if(datashowNextPageItem){
        nextItem=parseInt(dataIndex)+parseInt(datashowNextPageItem);
    }else{
        nextItem=parseInt(dataIndex)+parseInt(datashowItem);
    }
    $.each(itemObject,function(idx,item){
        if(idx>=dataIndex && idx<nextItem){
            $(item).removeClass('ui-hidden');
            $(item).css({"display":""});
            if(effect!=""){
                $(item).addClass('animated '+effect);
            }

            $(self).attr({"showIndexNow":idx+1});
        }

    });
    if(parseInt(itemObject.length)<=parseInt($(self).attr('showIndexNow'))){
        $(self).addClass('ui-hidden');
    }
    $(self).attr({'data-index':nextItem})
});
