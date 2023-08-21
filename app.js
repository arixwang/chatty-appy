window.addEventListener('DOMContentLoaded', function (_) {
    var form = document.getElementById("your-form-id");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var username = document.getElementById("input-username");
        var text = document.getElementById("input-text");
        text.value = "";
    });
});
