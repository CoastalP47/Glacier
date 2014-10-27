jQuery(document).ready(function($){
  //ready?
  console.log('Glacier v0.5.1 Cheechako - Ready');

  /* ==========
    Variables
  ========== */
  var url = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '');


  /* ==========
    Forms
  ========== */
    //range
    $('input[type="range"]').each(function(){
      rangeUpdate($(this));
    })
    $(document).on('change mousemove','input[type="range"]',function(){
      rangeUpdate($(this));
    });
    function rangeUpdate(elem){
      $val = $(elem).val();
      $(elem).siblings('.gl-input-range-result').html($val);
    }

  /* ==========
    Anchors open in new tab/window
  ========== */
  $('a').each(function(){
    var test = beginsWith( url, $(this).attr('href') );
    //if it's an external link then open in a new tab
    if( test == false && $(this).attr('href') != '#' ){
      $(this).attr('target','_blank');
    }
  });





  /* ==========
    Utilities
  ========== */
  function beginsWith(needle, haystack){
    return (haystack.substr(0, needle.length) == needle);
  }

});
