    const menuPlaceholder = document.getElementById('menu-placeholder');
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        menuPlaceholder.innerHTML = xhr.responseText;
      }
    };
    xhr.open('GET', 'menu.html', true);
    xhr.send();