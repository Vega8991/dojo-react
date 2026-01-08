import { useState } from 'react'

export default function FormularioNombre() {
    const [nombre, setNombre] = useState('');
    return (
        <div>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <p>{nombre ? `Hola, ${nombre}` : 'Escribe el nombre'}</p>
        </div>
    )
}
