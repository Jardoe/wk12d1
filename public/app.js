document.addEventListener('DOMContentLoaded', () => {

  const container = document.querySelector('.container');

  const addCat = function(name, food, img){
    const cat = { name: name,food: food, img: img };
    console.dir(cat);
    let list = document.createElement("ul");

    for (props in cat) {
      let image = document.createElement('img');
      let anchor = document.createElement('li');
      var elem = document.createElement("li");
      if(props === 'img'){
        image.src = cat.img;
        container.appendChild(image);
      } else {
      anchor.innerText = cat[props];
      elem.appendChild(anchor);
      list.appendChild(elem);
    }
  }
    container.appendChild(list)
}

  addCat('Steve', 'salmon', 'http://www.catster.com/wp-content/uploads/2017/11/A-Siamese-cat.jpg')
  addCat('Boba', 'Sock fluff', "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg" )
  addCat('Barnaby', 'tuna', "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg" )
  addCat('Max', 'Whiskas Temptations', "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg")

});
