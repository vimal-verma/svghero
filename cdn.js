const svghero = (id,title,text) =>
{

    const x = document.getElementsByTagName("BODY")[0];
    let svg_hero = document.createElement("div");
    svg_hero.classList.add('svg-hero')
    x.appendChild(svg_hero)


    let svg = id.innerHTML;
    // console.log(svg)

    id.addEventListener('mouseover', () => {
        id.style.scale = "1.004";
    })
    id.addEventListener('mouseout', () => {
        id.style.scale = "1";
    })



    let showsvg = `
    <svg width="1152" height="700" viewBox="0 0 1152 700" fill="none" xmlns="http://www.w3.org/2000/svg">
        ${svg}
    </svg>

    `

    let htmlshow= `
    <div class="showdiv">
        <div class="title"><h1>${title}</h1></div>
        <div id="canbut">X</div>
        <div class="imgsec">
            <div class="img">${showsvg}</div>
            <div class="text">${text}</div>
        </div>
    </div>
    `



    
    id.addEventListener('click', () => {
        svg_hero.innerHTML = htmlshow

        const canbut = document.getElementById('canbut')
        canbut.addEventListener('click', () => {
            svg_hero.innerHTML = null
        })
    })
};
