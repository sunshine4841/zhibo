$(function() {
  const host = window.location.origin;
  // const host = 'https://zhibo.duanshipin.com/';
  // const api = host == 'https://zhibo.duanshipin.com' ? 'https://digital-live.ren.duanshipin.com' : 'https://digital-live.dev.ren.duanshipin.com';
  const api = 'https://digital-live.ren.duanshipin.com';
  console.log(host);
  const hostList = ['https://zhibo.duanshipin.com', 'https://zhibotest.duanshipin.com']
  if (!hostList.includes(host)) {
    $.ajax({
      url: `${api}/api/website`,
      type: 'POST',
      data: { host },
      success: function(res) {
        const { data } = res
        $('title').html(data.title)
        $('.bg-custom .btn').eq(0).attr('href', data.cloud)
		$('.bg-custom .btn').eq(1).attr('href', data.manage)
        $('.bg-custom .btn').eq(2).attr('href', data.plug)
        $('link[rel="icon"]').attr('href', data.icon)
        $('.bg-main').attr('src', data.bg_image)
        $('.bg').hide()
        $('.bg-custom-wrap').show()
      }
    })
  } else {
    $('.bg').show()
    $('.bg-custom-wrap').hide()
    $('title').html('创意兔-AI智播')
    $('link[rel="icon"]').attr('href', './img/logo-mini.png')
  }
})