$(document).ready(async function () {
  $('#like').click(async () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true
    })
    let { isConfirmed } = await swalWithBootstrapButtons.fire({
      title: '¿Confrimas la votacíon?',
      text: "No podrás votar en las proximas 12 horas.",
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Yes, Like'
    })
    if (!isConfirmed) return;
    let botid = location.href.split(location.host)[1].replace('/bots/like/', '').replace('/', '');
    let req = await fetch(`/api/like/${botid}`, {
      method: "PATCH",
      headers: { 'Content-Type': 'application/json' }
    })
    req = await req.json()
    if (req.success) {
      await swalWithBootstrapButtons.fire({
        title: '¡Completado!',
        text: '¡Has votado!',
        icon: 'success'
      })
      location.href = `/bots/${botid}`
    } else {
      let hours = 11 - Math.floor(req.time / 3600000);
      let minutes = 60 - Math.ceil((req.time  / 60000) % 60);
      await swalWithBootstrapButtons.fire({
        title: 'Error',
        text: `Podras votar de nuevo en ${hours} horas y ${minutes} minutos`,
        icon: 'error'
      })
      location.href = `/bots/${botid}`
    }
  })
})
