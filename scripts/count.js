// JQuery Solution
$.getJSON("https://graph.facebook.com/v11.0/17841403134443963?fields=business_discovery.username(houstontips){followers_count,media_count}&access_token=EAALMiACnWLABAMmahk5uiZBd3IBJZA19ot6siM9mZAlxtOl0JtiZBs878DjPf3t6oOT80diLZCvZCiGpIEiauCQFAvCKLTFRwVgFr5LqbQ6ZBfy7n16ryiQemjskyShkM2bQxeEAgZB8rdnzW5RMHWRRZAljcKcGWzJWUSHVC5Ev48vzPM0v09nSbefD7kLfo6jiinbsSo21nGAZDZD", function(data) {

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

