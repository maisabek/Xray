$(document).ready(function(){
        $(".dropdown").click(function(){
             $(".sub-drop").fadeToggle(); 
        }); 
        $('.front').click(function(){
            $('.back').fadeIn();
        });   
        $('.bars').click(function(){
            $('.dropdown').fadeIn(1000);
        }); 
        $('.fa-long-arrow-left').click(function(){
            $('.back').fadeOut(10);
        });
        $('.ellipsis-h').click(function(){
          $('.dashboard').fadeOut(1000);
      });
        $(".ellipsis").click(function(){
        $(".dashboard").fadeIn(1000);

       
});
        $('.carousel').carousel({interval: 2000}); 
        $(".skitter-large").skitter();
        $('.card-span').countTo();

new Morris.Line({
    element: 'myfirstchart',
    data: [
      { year: '2008', value: 20 },
      { year: '2009', value: 10 },
      { year: '2010', value: 5 },
      { year: '2011', value: 5 },
      { year: '2012', value: 20 }
    ],
    xkey: 'year',
    ykeys: ['value'],
    labels: ['Value']
  });
  Morris.Bar({
    element: 'bar-example',
    data: [
      { y: '2006', a: 100, b: 90 },
      { y: '2007', a: 75,  b: 65 },
      { y: '2008', a: 50,  b: 40 },
      { y: '2009', a: 75,  b: 65 },
      { y: '2010', a: 50,  b: 40 },
      { y: '2011', a: 75,  b: 65 },
      { y: '2012', a: 100, b: 90 }
    ],
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['Series A', 'Series B']
  });
  Morris.Donut({
    element: 'donut-example',
    data: [
      {label: "Download Sales", value: 12},
      {label: "In-Store Sales", value: 30},
      {label: "Mail-Order Sales", value: 20}
    ]
  });
  Morris.Area({
    element: 'area-example',
    data: [
      { y: '2006', a: 100, b: 90 },
      { y: '2007', a: 75,  b: 65 },
      { y: '2008', a: 50,  b: 40 },
      { y: '2009', a: 75,  b: 65 },
      { y: '2010', a: 50,  b: 40 },
      { y: '2011', a: 75,  b: 65 },
      { y: '2012', a: 100, b: 90 }
    ],
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['Series A', 'Series B']
  });});  
var myNav = document.getElementById("header"),
    myDiv = document.getElementById("header"),
    bo = document.getElementById("bo"),
    dashboard= document.getElementById("dashboard")
    ;
// window.onscroll = function say() {
//     "use strict";
    // if (window.scrollY <= myDiv.offsetHeight) {
    //     myNav.classList.remove("pos");
    // }else if (window.scrollY > myDiv.offsetHeight) {
        // myNav.classList.add("pos");
    // }  
// };
bo.addEventListener("click",function(e){
  if(e.target==bo){
    dashboard.classList.add("show");
  }
})
    $(function(){
        $('.mail-navbar ul li').click(function(){
        $(this).addClass('selected').siblings('li').removeClass('selected');
        $('.inbox,.starred,.snoozed,.draft,.sentmail,.trach,.important,.spam').hide();
        $('.'+$(this).data('class')).fadeIn();
        });
    });
    $(function(){
        $('.contact ul li').click(function(){
        $(this).addClass('selected').siblings('li').removeClass('selected');
        $('.chat1,.chat2,.chat3').hide();
        $('.'+$(this).data('class')).fadeIn();
        });
      
    });
    $(function(){
        $('.links ul li').click(function(){
        $(this).addClass('selected').siblings('li').removeClass('selected');
        $('.Personal-Information,.change-pass,.Email-and-SMS,.Manage-Contact').hide();
        $('.'+$(this).data('class')).fadeIn();
        });
    });
    $(function() {  
        $(".dashboard").niceScroll({cursorcolor:"gray",autohidemode: false ,cursorminheight: 7});
        $("html").niceScroll({cursorcolor:"gray",autohidemode: false});
        // $(".doctors-names").niceScroll({cursorcolor:"gray",autohidemode: false});
    });
     /*---------------------------------------------------------------------
        Progress Bar
        -----------------------------------------------------------------------*/
        // jQuery('.iq-progress-bar > span').each(function() {
        //     let progressBar = jQuery(this);
        //     let width = jQuery(this).data('percent');
        //     progressBar.css({
        //         'transition': 'width 2s'
        //     });

        //     setTimeout(function() {
        //         progressBar.appear(function() {
        //             progressBar.css('width', width + '%');
        //         });
        //     }, 100);
        // });

        // jQuery('.progress-bar-vertical > span').each(function() {
        //     let progressBar = jQuery(this);
        //     let height = jQuery(this).data('percent');
        //     progressBar.css({
        //         'transition': 'height 2s'
        //     });

        //     setTimeout(function() {
        //         progressBar.appear(function() {
        //             progressBar.css('height', height + '%');
        //         });
        //     }, 100);
        // });