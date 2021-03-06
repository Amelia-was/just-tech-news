async function deleteFormHandler(event) {
    event.preventDefault();

    const url = document.location.href;
    
    const id = url.split('/').pop();

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    };
};

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);