window.onload = function () {
    const step_01_content = document.getElementById('step-01-content');
    const step_02_content = document.getElementById('step-02-content');
    const step_03_content = document.getElementById('step-03-content');

    document.getElementById('step-01-button').onclick = () => {
        show(step_01_content);
        hide(step_02_content);
        hide(step_03_content);
    }

    document.getElementById('step-02-button').onclick = () => {
        hide(step_01_content);
        show(step_02_content);
        hide(step_03_content);
    }

    document.getElementById('step-03-button').onclick = () => {
        hide(step_01_content);
        hide(step_02_content);
        show(step_03_content);
    }

    //files
    document.getElementById('file-upload').onchange = () => {
        console.log(document.getElementById('file-upload').files[0]);
        show(document.getElementById('file-name'));
        document.getElementById('file-name').innerHTML = document.getElementById('file-upload').files[0].name;
    }
}

function hide(div) {
    if (!div.classList.contains('display-none')) {
        div.classList.add('display-none');
    }
}

function show(div) {
    if (div.classList.contains('display-none')) {
        div.classList.remove('display-none');
    }
}