// JQuery Solution
$.getJSON("https://graph.facebook.com/v3.2/17841403134443963?fields=business_discovery.username(houstontips){followers_count,media_count}&access_token=EAALMiACnWLABACYtKWV355ERbqBsgfFDTMjWswRI5i4ZBKkJ1X9NhJYtQoX6Mtn1MFPkVcZCfCjy0A3MXV6AvKrbkAvXVynDOswctH7mcZAe7cSl3VuZA6KjoSHtIZAX71bdGGC6vtXdJ3SSuAV89hXb8Nay2ZB51CJENSdhTgBZB01g6tufVv8", function(data) {

    const followers = data.business_discovery.followers_count;

    const media = data.business_discovery.media_count;

    function commaSeparateNumber(val){
        while (/(\d+)(\d{3})/.test(val.toString())){
          val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
        }
        return val;
    }

    $(".followers_count_landing").append((followers/1000).toFixed(1) + ' K');

    $(".followers_count").append((followers/1000).toFixed(1) + 'K' + '<p>Followers</p>');

    $(".media_count").append(commaSeparateNumber(media + '<p>Media Posted</p>'));

})

