function filter(){
    var options = {
        valueNames: [ 'name', 'cost', 'category' ]
    };

    var featureList = new List('list_feed', options);

    $('#filter-skirt').click(function() {
        console.log("skirt");
        featureList.filter(function(item) {
            if (item.values().category == "skirt") {                
                return true;
            } else {
                return false;
            }
        });
        return false;
    });

    $('#filter-dress').click(function() {
        console.log("dress");
        featureList.filter(function(item) {
            if (item.values().category == "dress") {                
                return true;
            } else {
                return false;
            }
        });
        return false;
    });

    $('#filter-pants').click(function() {
        console.log("pants");
        featureList.filter(function(item) {
            if (item.values().category == "pants") {                
                return true;
            } else {
                return false;
            }
        });
        return false;
    });    

    $('#filter-none').click(function() {
        featureList.filter();
        console.log("none");
        return false;
    });            
};

function slider(){
    var options={
       vertical:false, // page up/down
       horizontal:true, // page left/right
       // pagingDiv:null, // div to hold the dots for paging
       // pagingCssName:"carousel_paging", //classname for the paging dots
       // pagingCssNameSelected: "carousel_paging_selected", //classname for the selected page dots
       wrap:false //Creates a continuous classnamearousel
    }
    var carousel = $(".slide_main").carousel(options);              
}; 

slider();  
filter();        
