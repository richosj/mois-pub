$(function() {

    $('.container > .krds-side-navigation:first-child .lnb-list .lnb-item').on('click', function() {
      if ($(this).closest('.krds-side-navigation').hasClass('close')) {
          $(this).toggleClass('click');
          if ($(this).hasClass('click')) {
              $(this).addClass('active');
              let itemTop = $(this).offset().top;
              $(this).find('.lnb-submenu').css('top', itemTop + 'px');
          } else {
              $(this).removeClass('active');
              $(this).find('.lnb-submenu').css('top', '');
          }
      }
    });


    $('.krds-side-navigation .lnb-list .lnb-item > a').on('click', function() {
      $(this).parent().toggleClass('active')
    })

    // 모두 선택
     $('.select-list .all input').on('change', function () {
      var $li = $(this).closest('li');
      if ($(this).is(':checked')) {
        $li.find('ul input[type="checkbox"]').prop('checked', true);
      } else {
        $li.find('ul input[type="checkbox"]').prop('checked', false);
      }
    });

    $('.select-list ul input[type="checkbox"]').on('change', function () {
      var $wrap = $(this).closest('li').parent('ul').closest('li');
      var $allInput = $wrap.find('.all input');
      var total = $wrap.find('ul input[type="checkbox"]').length;
      var checked = $wrap.find('ul input[type="checkbox"]:checked').length;
    
      if (total === checked) {
        $allInput.prop('checked', true);
      } else {
        $allInput.prop('checked', false);
      }
    });


    $('.select-list .dep1 > li > .krds-form-check input').on('change', function () {
      var $li = $(this).closest('li');
      if ($(this).is(':checked')) {
        $li.find('ul input[type="checkbox"]').prop('checked', true);
      } else {
        $li.find('ul input[type="checkbox"]').prop('checked', false);
      }
    });

    $('.select-list .dep2 input[type="checkbox"]').on('change', function () {
      var $wrap = $(this).closest('li').parent('ul').closest('li');
      var $parentInput = $wrap.children('.krds-form-check').find('input[type="checkbox"]');
      
      var total = $wrap.find('ul input[type="checkbox"]').length;
      var checked = $wrap.find('ul input[type="checkbox"]:checked').length;
    
      if (total === checked) {
        $parentInput.prop('checked', true);
      } else {
        $parentInput.prop('checked', false);
      }
    });

    $('.fieldset .select-list-result li .delet').on('click', function() {
      $(this).parent('li').remove();
    })


      

    $('.admin_02_02 .flex-box .box:first-child .krds-table-wrap tbody tr td:not(:last-child)').on('click', function() {
      $(this).toggleClass('active').siblings().removeClass('active')
      $(this).closest('.box').siblings('.box').find('.krds-table-wrap').toggleClass('no-click')
    })

    $('.admin_02_02 .flex-box .krds-table-wrap .krds-form-toggle-switch input').on('change', function() {
      var $tr = $(this).closest('tr');
      if ($(this).is(':checked')) {
          $tr.removeClass('disabled');
      } else {
          $tr.addClass('disabled');
      }
  });

  $('#modal_admin_03_department .modal-dialog .modal-conts .menu-list li button').on('click', function () {
    $('#modal_admin_03_department .modal-dialog .modal-conts .menu-list li button').removeClass('active')
    $(this).addClass('active')
  })
})


