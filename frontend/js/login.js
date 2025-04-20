document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
  
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        localStorage.setItem('token', data.token);
        alert('Login successful!');
        window.location.href = '/blogs_form'; 
      } else {
        errorMessage.textContent = data.message || 'Login failed';
      }
    } catch (error) {
      console.error('Login error:', error);
      errorMessage.textContent = 'Something went wrong!';
    }
  });
  