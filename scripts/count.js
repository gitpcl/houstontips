// JQuery Solution
$.getJSON("https://graph.facebook.com/v11.0/17841403134443963?fields=business_discovery.username(houstontips){followers_count,media_count}&access_token=EAALMiACnWLABABlgVbNDdZAk5E6PM80ZCZCtJKIctLxuJ17rEcPoBubYYlmO4EULfctJGMJMCuK1bMMhft6TLDS5ZC6WW6ccd5jnXZCpTBnIICKSF6qbhfOxfhoXiGFFGqf4VAty5OPFLzTvxZAWMAcco5a6y5BCohLWPyjAxIHaZALIHyKBcA1Q4ZBvOAZCMt39tjoe0TZAVYBQsD3AixUbLK", function(data) {
    
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

