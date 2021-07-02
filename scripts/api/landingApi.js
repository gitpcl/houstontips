fetch('https://graph.facebook.com/v11.0/17841403134443963?fields=business_discovery.username(houstontips)%7Bfollowers_count%2Cmedia_count%7D&access_token=EAALMiACnWLABAGXFhwlSBY464JGIiN14g6q7JB9SAB6RflieSfaajtRmIZASN6bUZAL0IFFaf5O5owFZA8ri2Gtp1ZC3sW1paHZCKQHFHzpDCHr2jI1kgFwCTZBZAzoAR7rNPzTzDZBll3UWMIsBYP0sLpES6W6jxGTDL4z8NVCUSHXZBWN44ZBnvu')
  .then(response => response.json())
  .then(data => {

    const followers = data.business_discovery.followers_count/1000;
      
    const landingText = (followers).toFixed(1) + ' K';
    const landingEl = document.getElementsByClassName('followers_count_landing')[0];
    landingEl.innerHTML = landingText;

  });