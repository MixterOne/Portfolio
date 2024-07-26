var subtitle = document.querySelector('.subtitle_text');
var text = subtitle.innerHTML;
var index = 0; //percorrer os caracteres do texto armazenado em 'text'.

const write = () => {
    subtitle.innerHTML = subtitle.innerHTML.replace('|', '')

    if (text.length > index) {
        if(index == 0){
            subtitle.innerHTML = text.charAt(index);
        } else {
            subtitle.innerHTML += text.charAt(index);
        }
        subtitle.innerHTML += '|';

        index++
        setTimeout(write, 100)
    } else {
        setTimeout(() => {
            index = 0;
            subtitle.innerHTML = ''; 
            write();
        }, 1000);
    }
}

write();
