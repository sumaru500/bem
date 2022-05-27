 // Toast function
 function toast({
    title = '',
    msg = '',
    type= 'success',
    duration = 3000
  }) {
    const main = document.getElementById('toast')
    if (main) {
      // create toast object
      const toast = document.createElement('div')
      // auto remove toast
      const autoRemoveId = setTimeout(() => {
        main.removeChild(toast)
      }, duration + 1000)
      // force remove toast
      toast.onclick = (event) => {
        if (event.target.closest('.toast__close')) {
          main.removeChild(toast)
          clearTimeout(autoRemoveId)
        }
      }
      const icons = {
        success : "fa-circle-check",
        info : "fa-circle-info",
        warning : "fa-triangle-exclamation",
        error : "fa-circle-exclamation",
      }
      const delay = (duration / 1000).toFixed(2)
      toast.classList.add('toast', `toast--${type}`)
      toast.style.animation = `slideInLeft ease-in .5s, fadeOut linear 1s ${delay}s forwards`
      toast.innerHTML = `
        <div class="toast__icon">
          <i class="fa-solid ${icons[type]}"></i>
        </div>
        <div class="toast__body">
          <h3 class="toast__title">
            ${title}
          </h3>
          <p class="toast__msg">
            ${msg}
          </p>
        </div>
        <div class="toast__close">
          <i class="fa-solid fa-xmark"></i>
        </div>
      `
      main.appendChild(toast)
    }
  }

 