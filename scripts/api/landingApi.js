const base_url = 'https://graph.facebook.com/v11.0/';
const page_id = '17841403134443963';
const access_token = config.ACCESS_TOKEN;

const url = base_url + page_id + '?fields=followers_count,media_count,media&access_token=' + access_token;
console.log(url);

fetch(url)
  .then(response => response.json())
  .then(data =>
    // console.log(data)
    {
      const followers = data.followers_count/1000;

      const landingText = (followers).toFixed(1) + ' K';
      const landingEl = document.getElementsByClassName('followers_count_landing')[0];
      landingEl.innerHTML = landingText;
    }

  );