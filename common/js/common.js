$(function() {

	$(document).ready(function () {
    $('select').niceSelect();
  });

  function setNavigationTop() {
    var headerHeight = $('header').outerHeight();
    $('.container .krds-side-navigation').css({'top': headerHeight + 'px', 'height': 'calc(100vh - ' + headerHeight + 'px)'});
  }
  setNavigationTop();
  $(window).on('resize', function() {
      setNavigationTop();
  });

  $('.krds-side-navigation .bot-setting .foldBtn').on('click', function () {
    const sideNav = $(this).closest('.krds-side-navigation');
    const screenWidth = $(window).width();
    sideNav.off('click');

    if (screenWidth <= 1023) {
      sideNav.toggleClass('open');
    } else {
      sideNav.removeClass('open')
      sideNav.toggleClass('close');
    }
  });

  
  // form-flex 안에 있는 select 선택 시 input 에 뿌려지기
  $(document).on('change', '.form-flex select', function () {
    const val = $(this).val();
    const $wrap = $(this).closest('.form-flex');
    const $input = $wrap.find('input[type="text"]');
  
    $input.val(val);
  });
  

  // textarea 글자 수
  function updateTextCount($wrap) {
    const $textarea = $wrap.find('textarea.krds-input');
    const $countNow = $wrap.find('.textarea-count .count-now');
    const maxLength = parseInt($wrap.find('.textarea-count .count-total').text(), 10);
  
    let length = $textarea.val().length;
    if (length > maxLength) {
      length = maxLength;
      $textarea.val($textarea.val().substring(0, maxLength));
    }
  
    $countNow.text(length);
  }
  $(document).on('input', '.textarea-wrap textarea.krds-input', function () {
    const $wrap = $(this).closest('.textarea-wrap');
    updateTextCount($wrap);
  });
  $(function () {
    $('.textarea-wrap').each(function () {
      updateTextCount($(this));
    });
  });
  

  // 리셋 버튼
  $('.resetBtn').on('click', function() {
    var $this = $(this);
  
    if ($('section').hasClass('krds-modal')) {
      var $modal = $this.closest('.krds-modal');
      $modal.find('input').each(function() {
        var $el = $(this);
        if (!$el.prop('readonly') && !$el.prop('disabled')) {
          $el.val('');
        }
      });
      $modal.find('textarea').each(function() {
        var $el = $(this);
        if (!$el.prop('readonly') && !$el.prop('disabled')) {
          $el.val('');
        }
      });
      $modal.find('select').each(function() {
        var $el = $(this);
        if (!$el.prop('disabled')) {
          $el.prop('selectedIndex', 0);
        }
      });
    }
  });

    // 수정 버튼 누르면
    $('.krds-modal .modal-content > .modal-btn .editBtn').on('click', function() {
        var modal = $(this).closest('.krds-modal');

        modal.addClass('edit')
        modal.find('input, textarea').prop('readonly', false);
    })

    $('.krds-modal:has(.edit) .modal-content > .modal-btn .saveBtn, .krds-modal:has(.edit) .close-modal').on('click', function() {
        $(this).closest('.krds-modal').removeClass('edit')
    })

    // 토글 버튼 
    $(function() {
      function updateLabelText($input) {
        const $label = $input.siblings('label');
        $label.contents().filter(function() {
          return this.nodeType === 3;
        }).first().replaceWith($input.is(':checked') ? '활성' : '비활성화');
      }
    
      $('.krds-form-toggle-switch:not(.noChange) input').each(function() { 
        updateLabelText($(this)); 
      }).on('change', function() { updateLabelText($(this)); });
    });

    // selct 체크박스 선택 이벤트
    $('.form-group .form-conts-wrap .form-conts').on('click', function() {
      $(this).parents('.form-conts-wrap').toggleClass('active')
    })

    
    $('.menu-list.list li > button').on('click', function () {
      $(this).parent('li').toggleClass('active')
    })


    
    // 조직도 모달
    $('.organization_modal .result-box .changeBtn').on('click', function() {
      var $btn = $(this);
      var $wrap = $btn.closest(".box-wrap");
      var $resultList = $wrap.find(".border-box .result-list");
    
      // 선택된 체크박스들만 처리
      $(".left-wrap .select-box table tbody input[type='checkbox']:checked").each(function () {
        var $tr = $(this).closest("tr");
    
        var td2 = $tr.find("td").eq(0).html();
        var td3 = $tr.find("td").eq(1).html();
        var td4 = $tr.find("td").eq(2).html();
    
        var li = `
          <li>
            <div class="name-box">
              <p>${td2}</p>
              <p>${td3}</p>
              <p>${td4}</p>
            </div>
            <button type="button" class="krds-btn icon xsmall deletBtn">
              <i class="svg-icon ico-close"></i> 
              <p class="sr-only">삭제</p>
            </button>
          </li>
        `;
    
        $resultList.append(li);
      });
    
      $resultList.off("click", ".deletBtn").on("click", ".deletBtn", function () {
        $(this).closest("li").remove();
      });
    });
    
    $('.organization_modal .result-box .result-list .deletBtn').on("click", function () {
      $(this).closest("li").remove();
    });

    

     // 테이블 체크박스 이벤트
     $('.krds-table-wrap thead input').on('change', function () {
      var $this = $(this);
      if ($(this).is(':checked')) {
        $this.closest('thead').siblings('tbody').find('.krds-form-check input[type="checkbox"]').prop('checked', true);
      } else {
        $this.closest('thead').siblings('tbody').find('.krds-form-check input[type="checkbox"]').prop('checked', false);
      }
    });

    $('.krds-table-wrap tbody .krds-form-check input[type="checkbox"]').on('change', function () {
      var $wrap = $(this).closest('.krds-table-wrap');
      var $tbody = $wrap.find('tbody');
      var $theadChk = $wrap.find('thead input');
      var total = $tbody.find('.krds-form-check input[type="checkbox"]').length;
      var checked = $tbody.find('.krds-form-check input[type="checkbox"]:checked').length;
    
      if (total === checked) {
        $theadChk.prop('checked', true);
      } else {
        $theadChk.prop('checked', false);
      }
    });
      
})


