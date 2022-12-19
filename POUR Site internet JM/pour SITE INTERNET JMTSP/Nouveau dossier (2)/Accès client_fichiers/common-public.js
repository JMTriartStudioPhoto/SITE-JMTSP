function sameHeight(group) {
    tallest = 0;
    group.each(function() {
        thisHeight = jQuery(this).height();
        if (thisHeight > tallest) {
            tallest = thisHeight;
        }
    });
    group.height(tallest);
}

jQuery(document).ready(function() {

    // rwd menu
    if (jQuery('#rwd-menu-btn').is(':visible')) {
        jQuery('#rwd-menu-btn').on('click', function() {
            jQuery('.content-nav .nav-pills').addClass('opened');
        });

        jQuery('.content-nav .nav-pills .close-btn').on('click', function() {
            jQuery('.content-nav .nav-pills.opened').removeClass('opened');
        });
    }

    // disable right click
    if(jQuery('[data-drc]').length && jQuery('[data-drc]').data('drc') == 1) {
        jQuery(document).bind('contextmenu', function() {
            return false;
        });
    }

    if (jQuery('#support-page').length) {

        /* toggle fieldsets for contact form */
        jQuery('.hidden-fieldset').hide();
        jQuery('#rubrique').on('change', function(){
            var fieldsetTarget = jQuery(this).find(':selected').data('target');
            jQuery('.hidden-fieldset').hide();
            jQuery('#' + fieldsetTarget).show();
        });

    }

    if (jQuery('#partners-page').length) {
        // direct link to a partner
        var pageUrl = document.URL;
        var split;

        if(pageUrl.indexOf('#part') != "-1") {
            split = pageUrl.split('#part');
            jQuery('html, body').animate({
                scrollTop: jQuery('#part' + split[1]).offset().top - 80
            }, 500);
            jQuery('#collapse' + split[1]).collapse({'toggle': true, 'parent': '#accordion'});
            jQuery('#part' + split[1] + ' a').attr('aria-expanded', 'true');
        }
    }

    if (jQuery('#testimonials-page').length) {

        var currentUrl = document.location.href;
        var url = currentUrl.split('#');

        if(typeof (url[1]) != 'undefined') {
            var tag = url[1].replace('tagLien', '');
            if(jQuery('#interview' + tag).length > 0) {
                jQuery('html, body').animate({ scrollTop: (jQuery('#interview' + tag).offset().top - 180) }, 500);
                setTimeout(function() {
                    jQuery('#interview' + tag).trigger('click');
                }, 500);
            }
            // else if(jQuery('#collapse'+tag).length > 0) {
            //     console.log('url2');
            //     jQuery("html, body").animate({ scrollTop: (jQuery('#collapse'+tag).offset().top-80) }, 500);
            //     jQuery('#collapse'+tag).click();
            // }
        }

        /* toggle interviews */
        // if(jQuery('#collapse1').length) {
        //     jQuery('#collapse1').collapse('toggle');
        // }
        jQuery('.toggle-panel').on('click', function() {
            var target = jQuery(this).data('index');
            jQuery(this).parent().toggleClass('toggled');
            jQuery('#' + target).collapse('toggle');
        });
    }

    if (jQuery('#toggleAPEblock').length) {
        // toggle infos page inscription photographe modale
        jQuery('#toggleAPEblock').on('click', function() {
            jQuery(this).slideUp();
            jQuery('#toggleAPE').slideDown();
        });
    }

    if (jQuery('#search-results').length) {
        /* toggle search album filters */
        jQuery('.edit-search').on('click', function() {
            jQuery(this).fadeOut();
            jQuery('#search-album').slideToggle();
        });
    }

    if (jQuery('#acces-client-page').length) {
        jQuery('#need-help').on('click', function() {
            jQuery('#help-needed').slideDown();
            jQuery(this).fadeOut();
        });
        jQuery('#close-help').on('click', function() {
            jQuery('#help-needed').slideUp();
            jQuery('#need-help').fadeIn();
        });
    }

    if(jQuery('#auth').length) {
        jQuery('#auth').on('submit', function (e) {
            e.preventDefault();

            var form = jQuery('#auth');
            form.parsley().validate();

            if (form.parsley().isValid()) {
                jQuery('#loginError').addClass('hidden-block');

                jQuery.ajax({
                    type: 'POST',
                    dataType: 'JSON',
                    url: '/api/login.php',
                    data: form.serialize()
                }).done(function(response) {
                    if(!response.actionIsOK && response.error) {
                        jQuery('#loginError').removeClass('hidden-block');
                    } else if(response.actionIsOK) {
                        jQuery(location).attr('href', response.url);
                    }
                });
            }
        });
    }
});

jQuery(window).load(function() {
    if (jQuery('#search-results').length) {

        sameHeight(jQuery('.same-height-0'));
        sameHeight(jQuery('.same-height-1'));
        sameHeight(jQuery('.same-height-2'));

    }
});
