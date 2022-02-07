console.log('Starting up');
gProjs = [
    {
        id: makeid(),
        name: "Minesweeper",
        title: "Minesweeper game",
        desc: "This game has created at CaJan22 studies",
        codeUrl: "https://github.com/OphirNaor/mineSweeper.git",
        playUrl: 'https://ophirnaor.github.io/mineSweeper',
        publishedAt: '27/01/2022',

    },
    {
        id: makeid(),
        name: "Packman",
        title: "Packman game",
        desc: "This game has created at CaJan22 studies",
        codeUrl: "https://github.com/OphirNaor/pacman1.git",
        playUrl: "https://ophirnaor.github.io/pacman1/",
        publishedAt: '20/01/2022',

    },
    {
        id: makeid(),
        name: "GuessMe",
        title: "GuessMe game",
        desc: "This game has created at CaJan22 studies",
        codeUrl: "https://github.com/OphirNaor/GuessMe.git",
        playUrl: "https://ophirnaor.github.io/GuessMe/",
        publishedAt: '06/02/2022',

    },



]


function onInit() {
    renderProjs()
}


function renderProjs() {
    var strHTML = '';
    for (var i = 0; i < gProjs.length; i++) {
        strHTML += `
            <div class="col-md-4 col-sm-6 portfolio-item">
              <a class="portfolio-link" data-toggle="modal" href="#portfolioModal">
                <div class="portfolio-hover" onClick ="displayProj(${i})">
                  <div class="portfolio-hover-content">
                    <i class="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt="">
              </a>
              <div class="portfolio-caption">
                <h4>${gProjs[i].name}</h4>
                <p class="text-muted">Illustration</p>
              </div>
            </div>
          
        `
    }

    $('.proj-list').html(strHTML)




}




{/* <a href="https:exmp.com" "></a> // adding url of proj */ }



function displayProj(projIdx) {

    $('#modal-proj-name').text(gProjs[projIdx].name)
    $('#modal-proj-title').text(gProjs[projIdx].title)
    $('#modal-proj-desc').text(gProjs[projIdx].desc)
    $('#modal-proj-desc').text(gProjs[projIdx].desc)
    $('#modal-proj-url-code').text('code')
    $('#modal-proj-url-code').attr('href', gProjs[projIdx].codeUrl)
    $('#modal-proj-url-play').text('play')
    $('#modal-proj-url-play').attr('href', gProjs[projIdx].playUrl)
    $('#modal-proj-date').text(gProjs[projIdx].publishedAt)


}



function makeid(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}