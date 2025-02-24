const url = "https://horaciomanuel26.github.io/_service/noticias.json";
async function chamarApi() {
    const resp = await fetch(url);
    //console.log(resp);
    if (resp.ok) {
        const resposta = await resp.json();
        const noticias = resposta.noticias;

        noticias.forEach(noticia => {
            document.getElementById('noticia').innerHTML += `
            
                <div class="feature-card">
                    <h3>${noticia.title}</h3>
                    <p>${noticia.descricao}</p>
                </div>
            `;
        });

        //console.log(noticia[0].title);

    } else {
        console.log("erro ao caregar dados");
    }
}
chamarApi();