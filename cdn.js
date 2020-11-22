const svghero = (id,title,text,width,height,x,y,scale) =>
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
    <div class="svghero_showdiv">
        <div class="svghero_title"><h1>${title}</h1></div>
        <div id="svghero_canbut">X</div>
        <div class="svghero_imgsec">
            <div id="svg_img_scale" class="svghero_img">${showsvg}</div>
            <div class="svghero_text">${text}</div>
        </div>
    </div>
    `



    
    Uid.addEventListener('click', () => {
        svg_hero.innerHTML = htmlshow
        let Uvid = document.getElementById("svg_img_scale")
        Uvid.style.scale=`${scale}`

        const canbut = document.getElementById('svghero_canbut')
        canbut.addEventListener('click', () => {
            svg_hero.innerHTML = null
        })
        
    })
};
