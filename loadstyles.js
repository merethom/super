//added to import the custom footer to every page
window.onload = function() {

    let customFooter = document.createElement('footer');
    
    fetch('https://raw.githubusercontent.com/merethom/super/main/footer.html')
    .then(res=>res.text())
    .then(data=>{
        customFooter.innerHTML=data
    })
    
    document.body.appendChild(customFooter);
    
}

window.onload = function() {

    let customCSS = document.createElement('link');
    customCSS.setAttribute("rel", "stylesheet");
    customCSS.setAttribute("type", "text/css");
    customCSS.setAttribute("href", "external.css");

    fetch('https://raw.githubusercontent.com/merethom/super/main/brief.css')
    .then(res=>res.text())
    .then(data=>{
        customCSS.innerHTML=data
    })

    document.getElementsByTagName("head")[0].appendChild(customCSS);   
}
    
    