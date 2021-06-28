// JQuery Solution
$.getJSON("https://graph.facebook.com/v11.0/17841403134443963?fields=business_discovery.username(houstontips){followers_count,media_count}&access_token=EAALMiACnWLABADDKHEESdAix3r2GOFVjHpzWiZBMdY1zOmC5a6DH000xfM55ZA9C0n5dGHwXILCy5cNmV3ICSX5eeEmD5qPg5KyTFZCoFYKH7h6VZCFu0HJGHVlfxbLOhZBXRSA5uZBGzfQhdeTXU8RlY80RdSZAZAvadfFzq3h4eG3RUOr2Adnb7rw0f6GqxGX7ZAnhWUZCnxlZCiycOZBnOZA30", function(data) {
    
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

