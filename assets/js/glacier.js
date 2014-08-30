jQuery(document).ready(function($){
  //ready?
  console.log('here we go!');

  //forms
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
});
