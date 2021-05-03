$(document).ready(() => {
  $.ajax({
    url: 'http://192.168.0.101:8000/api/v1/doctor/',
    method: 'GET',
    dataType: 'JSON',
    success: function(response) {
      console.log(response);
      $('#response').text(response);
    }
  });
});
