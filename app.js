document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita recarga
  
    // Obtener valores del formulario
    const nombre = document.getElementById('taskName').value.trim();
    const fecha = document.getElementById('dueDate').value;
    const descripcion = document.getElementById('description').value.trim();
    const tipo = document.getElementById('taskType').value;
    const prioridadRadio = document.querySelector('input[name="priority"]:checked');
  
    // Validar campos obligatorios
    if (!nombre || !fecha || !tipo || !prioridadRadio) {
      alert('¡Por favor completa todos los campos son obligatorios!');
      return;
    }
  
    // Crear objeto tarea
    const tarea = {
      nombre,
      fecha,
      descripcion,
      tipo,
      prioridad: prioridadRadio.value
    };
  
    agregarTareaEnDOM(tarea);
  
    // Resetear formulario y select
    this.reset();
    document.getElementById('taskType').selectedIndex = 0;
  });
  
  function agregarTareaEnDOM(tarea) {
    const lista = document.getElementById('listaTareas');
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarea';
  
    tarjeta.innerHTML = `
      <h3>${tarea.nombre}</h3>
      <p><strong>Fecha de entrega:</strong> ${tarea.fecha}</p>
      <p><strong>Descripción:</strong> ${tarea.descripcion || 'Sin descripción'}</p>
      <p><strong>Tipo:</strong> ${tarea.tipo}</p>
      <p><strong>Prioridad:</strong> ${tarea.prioridad}</p>
    `;
  
    lista.appendChild(tarjeta);
  }
  