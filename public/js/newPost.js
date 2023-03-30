document.querySelector('#newFormPost').addEventListener('submit', async function(event) {
    event.preventDefault();
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;
    await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
        title,
        body,
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    document.location.replace('/profile');
});