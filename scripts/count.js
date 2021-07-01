// JQuery Solution
$.getJSON("https://graph.facebook.com/v10.0/17841403134443963?fields=business_discovery.username(houstontips)%7Bfollowers_count%2Cmedia_count%7D&access_token=EAALMiACnWLABAIuYvvm0GQIkhpV1ZBxfv8UlRrTLffnfl2IpGuRHYLvColXbIZAWsrCJfZBLBHKf4IFtL3WIEEw6t5qfT9ZBZBFhXRIDyiXZB4pDi5wtvoBQz0Ihy8foYXMTpbmMezCILVnrJbibu0CUjbIhsJMpZC3mWzkTMIPqoJ4cmXNBLr4ZABp9DesUBhXdl1OXIxdqsBPSJSoJeFsf", function(data) {

    const followers = data.business_discovery.followers_count/1000;
    const media = data.business_discovery.media_count;

    function commaSeparateNumber(val){
        while (/(\d+)(\d{3})/.test(val.toString())){
          val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
        }
        return val;
    }

    $(".followers_count_landing").append((followers).toFixed(1) + ' K');

    $(".followers_count").append((followers).toFixed(1) + 'K' + '<p>Followers</p>');

    $(".media_count").append(commaSeparateNumber(media + '<p>Media Posted</p>'));

})

// FB.api(
//   '/17841403134443963',
//   'GET',
//   {"fields":"business_discovery.username(houstontips){followers_count,media_count}"},
//   function(response) {
//       console.log(response);
//   }
// );
