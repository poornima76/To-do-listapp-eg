var QRCode = require('qrcode')

QRCode.toString('Fight club',{type:'terminal'}, function (err, url) {
  console.log(url)
})

