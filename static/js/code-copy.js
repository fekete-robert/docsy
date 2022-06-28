// This is where it all goes :)

window.onload = function() {

  var pre = document.getElementsByClassName('highlight');

  for (var i = 0; i < pre.length; ++ i)
  {
    var element = pre[i];
    if ($(element).parent().prop('className') == 'hl-container') {
      // this is already covered by the include-code shortcode
    } else {
      $( element ).wrap( '<div class="hl-container"></div>' );
      element.insertAdjacentHTML('beforebegin', '<div class="toolbar"><button class="copybtn" aria-label="Copy sample code"></button></div>');
    }
  }

  new ClipboardJS('.copybtn', {
    target: function(trigger) {
      return trigger.parentElement.nextElementSibling;
    }
  });
};
