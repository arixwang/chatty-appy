window.addEventListener('DOMContentLoaded', (_) => {
    const form = document.getElementById("your-form-id") as HTMLFormElement;
    
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      
      const username = document.getElementById("input-username") as HTMLInputElement;
      const text = document.getElementById("input-text") as HTMLInputElement;
      text.value = "";
    });
  });
  