// JQuery Solution
$.getJSON("https://graph.facebook.com/v11.0/17841403134443963?fields=business_discovery.username(houstontips)%7Bfollowers_count%2Cmedia_count%7D&access_token=EAALMiACnWLABAKJblK5u7EVzmAJB8HVPZBvhwDbUlRWVMz9XVz1hlZBi8ctD4hBKHCGvATUEIkhp2nxCG8CDXj9eVjubWt0TvM9jlNSfX2e3u5O46cPTOqD9SjkdLMbwRRUkpU3pRa0Yg7OPQevRFhWxIzxuTRhyZBTpBZATqwZDZD", function(data) {

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


// let requestURL = 'https://graph.facebook.com/v11.0/17841403134443963?fields=business_discovery.username(houstontips)%7Bfollowers_count%2Cmedia_count%7D&access_token=EAALMiACnWLABAEQA9db4ve5gV5pkEPboxnnZAOivv2YZBm5y4PepGmZCWcyOzrZBPEeOrp2yOAc6ZAZA77rVjp9C0dlkRI3g3WZA4Pu9e5tRObwtDsna3yAytD0hCc2vR2JzIAVyEsTLjAwbjGl3pdgPUZAeHDoUTCmRkOPk2mH4cSua3evgfqVPosok5OwIwullycpI5wGaUZA83Rtj7rtD7';
// let request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();

// // Begin accessing JSON data here
// var data = JSON.parse(this.response)

// console.log(data)