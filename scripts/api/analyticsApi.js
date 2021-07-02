// JQuery Solution
// $.getJSON("https://graph.facebook.com/v11.0/17841403134443963?fields=business_discovery.username(houstontips)%7Bfollowers_count%2Cmedia_count%7D&access_token=EAALMiACnWLABAGXFhwlSBY464JGIiN14g6q7JB9SAB6RflieSfaajtRmIZASN6bUZAL0IFFaf5O5owFZA8ri2Gtp1ZC3sW1paHZCKQHFHzpDCHr2jI1kgFwCTZBZAzoAR7rNPzTzDZBll3UWMIsBYP0sLpES6W6jxGTDL4z8NVCUSHXZBWN44ZBnvu", function(data) {

//     const followers = data.business_discovery.followers_count/1000;
//     const media = data.business_discovery.media_count;

//     function commaSeparateNumber(val){
//         while (/(\d+)(\d{3})/.test(val.toString())){
//           val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
//         }
//         return val;
//     }

//     $(".followers_count_landing").append((followers).toFixed(1) + ' K');

//     $(".followers_count").append((followers).toFixed(1) + 'K' + '<p>Followers</p>');

//     $(".media_count").append(commaSeparateNumber(media + '<p>Media Posted</p>'));

// })


// Javascript Solution
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
      const media = data.media_count;
        
      function commaSeparateNumber(val){
          while (/(\d+)(\d{3})/.test(val.toString())){
            val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
          }
          return val;
      }

      const analyticsText = (followers).toFixed(1) + 'K' + '<p>Followers</p>';
      const mediaText = commaSeparateNumber(media + '<p>Media Posted</p>');

      const analyticsEl = document.getElementsByClassName('followers_count')[0];
      const mediaEl = document.getElementsByClassName('media_count')[0];

      analyticsEl.innerHTML = analyticsText;
      mediaEl.innerHTML = mediaText;
    }

  );