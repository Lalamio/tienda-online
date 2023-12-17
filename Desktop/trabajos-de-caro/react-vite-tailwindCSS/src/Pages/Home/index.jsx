import { useState, useEffect } from 'react' /* cuando pensamos en consumir APIs, es obligatorio usar los efectos */

import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from '../../Components/ProductDetail';

function Home() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json()) /* la información que da como resultado del fetch viene como promesa, por lo que tenemos que resolverla, pasándola a un objeto json  */
    .then(data => {
      setProducts(data)
    }) /* guardamos la info que solicitamos de la API en el actualizador de estado */
  }, []) /* importantísimo el array al final de la función. sirve para mandar la información que queremos por defecto o, en este caso, indicarle que no queremos nada. si no lo escribimos nos va a mandar un error */
  return (
      <Layout>
        Home
        {/* <Card /> */}
          <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
            {
              /* el signo ? indica una pregunta hacia la presencia del estado, de si está presente o no. en caso de que sí: */
              products?.map(product => {
                return (
                  /* una forma silenciosa de indicar un return es usando paréntesis en vez de llaves */
                  /* por cada uno de los elementos que estén dentro de .map, queremos que nos renderice un producto con la información que obtuvimos de la API */
                  <Card data={product} key={product?.id}/> /* recibimos la info que pasó previamente por el componente Card y el identificador de cada producto por petición de react */
                  )
              })
            }
        </div>
        <ProductDetail />
      </Layout>
  )
}

export default Home
