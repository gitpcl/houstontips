// JQuery Solution
$.getJSON("https://graph.facebook.com/v3.2/17841403134443963?fields=business_discovery.username(houstontips){followers_count,media_count}&access_token=EAALMiACnWLABAFINq9bMFszL1B4k8tW9cFLRMbL7nrA1tSOAxzyiAfjyDdl99ZBssOrnicwCraZAgU41rif87PZALg6cNwfKER3MlwAnv5gZByZCeygOkKGOfbpXmENBu9zfNcosdVkhNMPCVGOiH99zZBKgnTZC29pPMq6z6TcA59kYyw6P4Ck", function(data) {
    console.log(data);

    const followers = data.business_discovery.followers_count;

    const media = data.business_discovery.media_count;

    function commaSeparateNumber(val){
        while (/(\d+)(\d{3})/.test(val.toString())){
          val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
        }
        return val;
    }

    $(".followers_count_landing").append(commaSeparateNumber(followers + ' K'));

    $(".followers_count").append(commaSeparateNumber(followers + 'K' + '<p>Followers</p>'));

    $(".media_count").append(commaSeparateNumber(media + '<p>Media Posted</p>'));

})

