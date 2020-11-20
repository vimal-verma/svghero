const svghero = (id,title,text,width,height,x,y) =>
{
    let Uid = document.getElementById(id)

    const Body = document.getElementsByTagName("BODY")[0];
    let svg_hero = document.createElement("div");
    svg_hero.classList.add('svg-hero')
    Body.appendChild(svg_hero)


    let svg = Uid.innerHTML;
    // console.log(svg)

    Uid.addEventListener('mouseover', () => {
        Uid.style.scale = "1.004";
    })
    Uid.addEventListener('mouseout', () => {
        Uid.style.scale = "1";
    })



    let showsvg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(${x},${y})">
        ${svg}
        </g>
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



    
    Uid.addEventListener('click', () => {
        svg_hero.innerHTML = htmlshow

        const canbut = document.getElementById('canbut')
        canbut.addEventListener('click', () => {
            svg_hero.innerHTML = null
        })
    })
};
