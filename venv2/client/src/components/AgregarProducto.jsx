import React,{useState} from 'react'

export default function AgregarProducto() {
    const [producto, setProducto] = useState({
        cod_producto: '',
        nombre_producto: '',
        descripcion_producto: '',
        precio_producto: 0,
        stock_producto: 0,
        grado_alcoholico: 0,
        litros: 0
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({
            ...producto,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/productos/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            });

            if (!response.ok) {
                throw new Error('Error al agregar el producto');
            }

            console.log('Producto:', producto);
            // También puedes reiniciar el estado del formulario después de enviar los datos
            setProducto({
                cod_producto: '',
                nombre_producto: '',
                descripcion_producto: '',
                precio_producto: 0,
                stock_producto: 0,
                grado_alcoholico: 0,
                litros: 0
            });
            // Limpiar el mensaje de error si la validación es exitosa
            setError('');
            console.log('Producto agregado exitosamente');
        } catch (error) {
            setError('Error al agregar el producto');
            console.error('Error al agregar el producto:', error);
        }
    };


    return (
        <>
            <div>
                <h1>Agregar Producto</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="cod_producto">Código Producto:</label>
                        <input type="text" id="cod_producto" name="cod_producto" value={producto.cod_producto} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="nombre_producto">Nombre:</label>
                        <input type="text" id="nombre_producto" name="nombre_producto" value={producto.nombre_producto} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="descripcion_producto">Descripción:</label>
                        <textarea id="descripcion_producto" name="descripcion_producto" value={producto.descripcion_producto} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="precio_producto">Precio:</label>
                        <input type="number" id="precio_producto" name="precio_producto" value={producto.precio_producto} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="stock_producto">Stock:</label>
                        <input type="number" id="stock_producto" name="stock_producto" value={producto.stock_producto} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="grado_alcoholico">Grado Alcohólico:</label>
                        <input type="number" id="grado_alcoholico" name="grado_alcoholico" value={producto.grado_alcoholico} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="litros">Litros:</label>
                        <input type="number" id="litros" name="litros" value={producto.litros} onChange={handleChange} />
                    </div>
                    <button type="submit">Agregar Producto</button>
                </form>
            </div>
        </>
    )
}
