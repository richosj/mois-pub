$(function() {


// 툴팁 영역 밖 클릭 시 닫기
$(document).on('click', function (e) {
  $('.krds-contextual-help').each(function () {
    var $help = $(this);
    var $tooltip = $help.find('.tooltip-popover');
    if ($tooltip.is(':visible')) {
      if (!$help.is(e.target) && $help.has(e.target).length === 0) {
        $help.find('.tooltip-popover').hide();
      }
    }
  });
})
    
  $('.krds-side-navigation .lnb-list .lnb-item > button').on('click', function() {
    $(this).toggleClass('active')
  })
  
    $('.in-page-navigation .foldBtn').on('click', function () {
        const sideNav = $(this).closest('.in-page-navigation');
        sideNav.toggleClass('close');
    });

    function toggleSideNav() {
        if ($('.contents').hasClass('project_write')) {
            const screenWidth = $(window).width();
            const $sideNav = $('.container > .krds-side-navigation:first-child');

            if (screenWidth <= 1439) {
                $sideNav.addClass('close');
            } else {
                $sideNav.removeClass('close');
            }
        }
    }
    toggleSideNav()
    $(window).on('resize', toggleSideNav);


    // 뎁스 2 클릭 이벤트
    $('.lnb-subitem > .lnb-btn').on('click', function() {
      $(this).parent('.lnb-subitem').toggleClass('active')
      console.log('aa')
    })

    // 네비 오픈 버튼
    $('.navigation-wrap .navBtn').on('click', function() {
      var $this = $(this)
      var $warp = $(this).parent('.navigation-wrap');
      $warp.toggleClass('open')

      if($warp.hasClass('open')) {
        $this.find('i').addClass('ico-git-branch-01_solid')
        $this.find('i').removeClass('ico-git-branch-01')
      } else {
        $this.find('i').removeClass('ico-git-branch-01_solid')
        $this.find('i').addClass('ico-git-branch-01')
      }
    })


    // 테이블 체크박스 이벤트
    $('.krds-table-wrap thead #chk_all').on('change', function () {
      var $this = $(this);
      if ($(this).is(':checked')) {
        $this.closest('thead').siblings('tbody').find('input[type="checkbox"]').prop('checked', true);
      } else {
        $this.closest('thead').siblings('tbody').find('input[type="checkbox"]').prop('checked', false);
      }
    });

    $('.krds-table-wrap tbody input[type="checkbox"]').on('change', function () {
      var $wrap = $(this).closest('.krds-table-wrap');
      var $tbody = $wrap.find('tbody');
      var $theadChk = $wrap.find('thead #chk_all');
      var total = $tbody.find('input[type="checkbox"]').length;
      var checked = $tbody.find('input[type="checkbox"]:checked').length;
    
      if (total === checked) {
        $theadChk.prop('checked', true);
      } else {
        $theadChk.prop('checked', false);
      }
    });




    function project_01() {


      $('#modal_project_01_settings .more-btn-wrap').on('click', function() {
        $(this).parent('.more-box').toggleClass('open')
      })
      function updateScopePrivate($checkbox) {
        var $formGroup = $checkbox.closest('.form-group');
        var $formText  = $formGroup.find('.form-conts p');
        var $label     = $('#modal_project_01_settings #scope_private + label');

        if ($checkbox.is(':checked')) {
            $formGroup.find('.form-conts-wrap').removeClass('disabled')
            $formGroup.find('.select-list .krds-form-check input').prop('checked', false).trigger('change');
            $formText.empty().append('<span>비공개 ></span>');
            $label.find('.text').text('비공개');
        } else {
            $formGroup.find('.form-conts-wrap').removeClass('active');
            $formGroup.find('.form-conts-wrap').addClass('disabled');
            $formText.empty().append('<span>공개 > 전체공개</span>');
            $label.find('.text').text('공개');
        }
    }

    $(document).ready(function() {
        var $scopeCheckbox = $('#modal_project_01_settings #scope_private');
        updateScopePrivate($scopeCheckbox);
        $scopeCheckbox.on('change', function() {
            updateScopePrivate($(this));
        });
    });

    // select-list input 체크 시 span 업데이트
    $('#modal_project_01_settings .form-group.scope').each(function() {
        var $formText = $(this).find('.form-conts p');
        if ($formText.find('span').length === 0) {
            $formText.append('<span>비공개 ></span>');
        }
    });

    // select-list input 체크/해제
    $('#modal_project_01_settings .select-list li .krds-form-check input[type="radio"]').on('change', function() {
        var $radio       = $(this);
        var $formGroup   = $radio.closest('.form-group');
        var $formText    = $formGroup.find('.form-conts p');
        var labelText    = $radio.siblings('label').text().trim();

        // #scope_private 체크 여부 확인
        var scopeChecked = $('#modal_project_01_settings #scope_private').is(':checked');
        var prefix = scopeChecked ? '비공개 > ' : '공개 > ';
        var spanLabel = prefix + labelText;

        // 라디오니까 무조건 하나만 표시
        $formText.find("span").remove(); 
        $formText.append('<span data-label="' + spanLabel + '">' + spanLabel + '</span>');
    });



      // 태그 삭제 버튼
      $('#modal_project_01_settings .form-group.tag .tag-deletBtn').on('click', function() {
        $(this).parent('.krds-badge-box').remove()
      })

      
      // $('#modal_project_01_brm .modal-dialog .modal-conts .right-box .krds-table-wrap tbody a').on('click', function() {
      //   if($(this).hasClass('active')) {
      //     $(this).removeClass('active')
      //   } else {
      //     $('#modal_project_01_brm .modal-dialog .modal-conts .right-box .krds-table-wrap tbody a').removeClass('active')
      //     $(this).addClass('active');
      //   }
      // })
          
      $('#modal_project_01_brm .menu-list .list-name .krds-btn').on('click', function () {
        $(this).closest('li').toggleClass('active')
      })

      document.querySelectorAll('#modal_project_01_brm input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('focus', e => {
            e.target.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'auto' });
        });
      });
    
    }
    if($('.contents').hasClass('project_01')) {
        project_01()
    }
    

    function project_write() {
        $('.project_write .editor-box .edit-top .file-box .right .tooltip-btn').on('click', function() {
          const $popover = $(this).closest('.krds-contextual-help').find('.tooltip-popover');
          
          if ($popover.is(':visible')) {
              $popover.hide();
          } else {
              $popover.show();
          }
        });

        function containerHeight() {
            var headerHeight = $('header').outerHeight();
            $('.container').css({'top': headerHeight + 'px', 'height': 'calc(100vh - ' + headerHeight + 'px)'});
        }
        containerHeight();
        $(window).on('resize', function() {
            containerHeight();
        });

        $('.project_write .editor-toolbar-wrap .editor-toolbar .left-box .krds-btn').on('click', function() {
          $(this).toggleClass('active')
        })

        $('.krds-side-navigation.right .list .krds-btn').on('click', function() {
          var $li = $(this).closest('li');
          var index = $li.index();
          $li.siblings().removeClass('active');
          $li.addClass('active');
          var $wrap = $li.closest('.krds-side-navigation.right'); 
          $wrap.find('.cont-wrap .cont').eq(index).addClass('active').siblings().removeClass('active');
        });

        $('.krds-side-navigation.right .foldBtn, .krds-side-navigation.right .cont .closeBtn').on('click', function() {
          $(this).closest('.krds-side-navigation').find('.list-wrap .list li').removeClass('active')
          $(this).closest('.krds-side-navigation').find('.cont-wrap .cont').removeClass('active')
        })

        $('#panel_share_02 .step1 .krds-btn').on('click', function() {
          $(this).closest('.step1').removeClass('active').siblings('.step2').addClass('active')
        })
        $('#panel_share_02 .step2 .cancelBtn').on('click', function() {
          $(this).closest('.step2').removeClass('active').siblings('.step1').addClass('active')
        })

    }
    if($('.contents').hasClass('project_write')) {
        project_write()
    }


    // AI 페이지
    function project_ai() {
        $('.project_ai .krds-table-wrap .tbl.data .col-wrap > .td2').on('click', function() {
          var $li = $(this).parent('.col-wrap').parent('li')
          $li.toggleClass('close')
        });

    }
    if($('.contents').hasClass('project_ai')) {
        project_ai()
    }

    
    // 업무공간 트리 페이지 
    function project_tasktree() {
        $('.project_tasktree .flex-box .border-box .li-name .name-box').on('click', function() {
          var $li = $(this).parent('.li-name').parent('li')
          $li.toggleClass('close')
        });

    }
    if($('.contents').hasClass('project_tasktree')) {
        project_tasktree()
    }


    $('.krds-contextual-help .tooltip-btn').on('click', function() {
      $(this).siblings('.tooltip-popover').show();
    })
    $('.krds-contextual-help .tooltip-close, .krds-contextual-help .tooltip-close-btn').on('click', function() {
      $(this).closest('.krds-contextual-help').find('.tooltip-popover').hide();
    })



 
})