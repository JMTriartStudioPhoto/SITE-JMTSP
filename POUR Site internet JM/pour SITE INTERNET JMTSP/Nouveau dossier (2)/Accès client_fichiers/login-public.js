// FOR RESET CLIENT PASSWORD
function valideEnvoiMdpTwig() {

    jQuery('#renvoiMdpForm').parsley().validate();

    if(jQuery('#renvoiMdpForm').parsley().isValid()) {
        jQuery('#AttenteAjax').modal('show');
        jQuery('#changePass').modal('hide');

        jQuery.ajax({
            url: '/javascripts/ajaxaccount/change_mdp.php',
            dataType: 'JSON',
            type: 'POST',
            data: {email: jQuery('#emailPass').val()},
        }).done(function(transport) {
            responseChangePassword(transport);
        });
        // .fail(function(transport) {
        //     jQuery('#AttenteAjax').modal('hide');
        // });
    }
}
function responseChangePassword(json) {
    var msgNewMdpSent = jQuery('#msg-success')[0].outerHTML;
    var msgMailNotExist = jQuery('#msg-warning')[0].outerHTML;
    if(json.returnvalue) {
        jQuery('#txtEmailMdp').html(msgNewMdpSent);
        jQuery('#txtEmailMdp .msg-to-show').show();
        jQuery('.double-mail').hide();
        jQuery('#finMdp').show();
        jQuery('#changePass').modal('show');
        jQuery('#AttenteAjax').modal('hide');
    } else {
        jQuery('#txtEmailMdp').html(msgMailNotExist);
        jQuery('#txtEmailMdp .msg-to-show').show();
        jQuery('#emailPass, #emailPass2').addClass('parsley-error');
        jQuery('#changePass').modal('show');
        jQuery('#AttenteAjax').modal('hide');
    }
}

jQuery(document).ready(function() {

    // login
    jQuery('.login-btn').popover({
        html: true,
        content: function() {
            return jQuery(this).siblings('.popover-login-content').html();
        },
        container: '.top-nav',
        placement: 'bottom'
    });

    jQuery('.login-btn').on('shown.bs.popover', function() {
        jQuery('.home-login-form').parsley();
    });

    if(jQuery('#formAuth').length) {
        jQuery(document).on('submit', "#formAuth", function(e) {
            e.preventDefault();

            var form = jQuery(this);

            form.find('#error-pro-login').addClass('hidden-block');

            jQuery.ajax({
                type: 'POST',
                dataType: 'JSON',
                url: '/api/login.php',
                data: form.serialize()
            }).done(function(response) {
                if(!response.actionIsOK && response.error) {
                    form.find('#error-pro-login').removeClass('hidden-block');
                } else if(response.actionIsOK) {
                    jQuery(location).attr('href', response.url);
                }
            });

        });
    }
});