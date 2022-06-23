(function($){
    $(document).ready(function(){
        $(document).on('click', '#btn_calc', function() {

            if($('[name="logg"]').val() == '') {
                alert('Please Input Logg');
                $('[name="logg"]').focus();
                return;
            }

            if($('[name="teff"]').val() == '') {
                alert('Please Input Teff');
                $('[name="teff"]').focus();
                return;
            }

            if($('[name="logz"]').val() == '') {
                alert('Please Input [Fe/H]');
                $('[name="logz"]').focus();
                return;
            }

            $('#res_message .alert').hide();

            $.ajax({
                //url: 'http://localhost:5002/calculate/?logg=5.00&teff=8500&logz=-1.6',
                // url: 'http://localhost:5000/calculate/',
                url: 'http://18.234.227.2:5000/calculate/',
                data: {
                    logg: $('[name="logg"]').val(),
                    teff: $('[name="teff"]').val(),
                    logz: $('[name="logz"]').val()
                },
                dataType: 'json',
                success: function(res) {
                    if(res.success) {
                        $('#res_message .alert-success').html('<b>u1: </b>' + res.u1 + '<b style="margin-left: 20px">u2: </b>' + res.u2);
                        $('#res_message .alert-success').show();
                    }
                    else {
                        $('#res_message .alert-danger').text(res.message);
                        $('#res_message .alert-danger').show();
                    }
                }
            })
        })
    })
})(jQuery)