document.getElementById('blogForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const image = document.getElementById('image').value;
    const category = document.getElementById('category').value;
    const message = document.getElementById('message');
  
    const token = localStorage.getItem('token');
    if (!token) {
      message.textContent = 'Please login first.';
      return;
    }
  
    try {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ title, content, image, category })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        message.style.color = 'green';
        message.textContent = 'Blog posted successfully!';
       
        // window.location.href = '/blogs';
      } else {
        message.textContent = data.message || 'Failed to post blog';
      }
    } catch (error) {
      console.error('Error:', error);
      message.textContent = 'Something went wrong.';
    }
  });
  