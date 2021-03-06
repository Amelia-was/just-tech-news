async function editFormHandler(event) {
    event.preventDefault();

    const url = document.location.href;

    const id = url.split('/').pop();
    const title = document.querySelector('input[name="post-title"]').value;

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title
        }),
        headers: {
            'Content-type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    };
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);