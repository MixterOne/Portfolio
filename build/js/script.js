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

function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab_content');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });

    document.getElementById(tabId).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal_body');
    const closeModal = document.querySelector('.modal .close');

    document.querySelectorAll('.open_modal').forEach(button => {
        button.addEventListener('click', (event) => {
            const modalInfo = event.target.closest('.info').querySelector('.modal_info').innerHTML;
            modalContent.innerHTML = modalInfo;
            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
