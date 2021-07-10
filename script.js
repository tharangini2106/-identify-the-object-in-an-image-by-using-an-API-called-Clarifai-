(() => {
  const form = document.querySelector('form');
  const imgInput = document.querySelector('input');
  const imgTag = document.querySelector('.image img');
  const results = document.querySelector('.results');
  const imgBtn = document.querySelector('.new-image-url');
  let imgUrl = "http://ekladata.com/vT5uQWc9PlUkp-dPFzDzB9TofeY@550x440.jpg";

  form.addEventListener('submit', e => {
    e.preventDefault();
    return getImageTags(form.elements[0].value);
  });

  const app = new Clarifai.App({
    apiKey:
    '39d6c51588344e93b8870354d5ef70b7' });


  const getImageTags = imgSrc => {
    imgTag.src = imgSrc;
    app.models.predict(Clarifai.GENERAL_MODEL, imgSrc).then(prediction => {
      console.log(prediction);
      return prediction.outputs[0].data.concepts.map(
      concept => {
        console.log(results);
        const tag = document.createElement('span');
        tag.innerHTML = concept.name;
        return results.appendChild(tag);
      });
    }).catch(err => console.error(err));
  };
})();


//af3a66ed6eb34599bbbe75d804687d3c