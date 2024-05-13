const createBtn = document.getElementById('create-btn');
const dialog = document.getElementById('create');
const cancelBtn = document.getElementById('cancel');

createBtn.addEventListener('click',() => {
    dialog.showModal();
})

cancelBtn.addEventListener('click', () => {
    dialog.close();
    console.log('pula');
})