function Verficar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.nodeValue.length == 0 || Number(fano.value) > ano) {
        alert('{ERRO} Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'fotobebe-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'fotojovem-m.png') 
                } else if (idade < 50) 
                    img.setAttribute('src', 'fotoadulto-m.png')
                } else {
                    img.setAttribute('src', 'fotoidoso-m.png')
                } 
            } else if (fsex[1].checked) {
                gênero = 'Mulher'
                if (idade >=0 && idade < 10) {
                    img.setAttribute('src', 'fotobbe-f.png')
                } else if (idade < 21) {
                    img.setAttribute('src', 'fotojovem-f.png')
                } else if (idade < 50) {
                    img.setAttribute('src', 'fotoadulto-f.png')
                } else {
                    img.setAttribute('src', 'fotoidoso-f.png')
                }
            }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectmaos ${gênero} com ${idade} anos.`
            res.appendChild(img)
        }
    