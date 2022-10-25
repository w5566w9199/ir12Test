export let mybutton = document.getElementById("topBtn");
export default window.onscroll = () => { scrollFunction(); };

export function scrollFunction() {
    if ((document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)&&(screen.width >= 768) ){
            mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
