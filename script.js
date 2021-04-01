const marvel = {
    render:()=> {
        const urlAPI = 'http://gateway.marvel.com/v1/public/characters?ts=1617130975&apikey=506f764f80d827f57672285f01d34535&hash=6a25c1448f7cc0abd841f72b16183049&';
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';

        fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
            for(const hero of json.data.results){
                let urlHero = hero.urls[0].url;
                contentHTML+= `
                    <div class="col-md-4">
                        <a href="${urlHero}" target="_blank">
                            <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                        </a>
                        <h3 class="title">${hero.name}</h3>
                    </div>`;
            }
            container.innerHTML = contentHTML;
        })
    }
};
marvel.render();