import React from 'react';

export default function RaizesVivasSite() {
  return (
    <div className='font-sans text-gray-800'>
      <nav className='bg-green-700 text-white p-4 flex gap-6 justify-center'>
        <a href='#reservas'>Reservas</a>
        <a href='#casas'>Casas</a>
        <a href='#restaurantes'>Restaurantes</a>
        <a href='#roteiros'>Roteiros</a>
        <a href='#feedback'>Reclamações</a>
      </nav>

      <header className='text-center py-10'>
        <h1 className='text-4xl font-bold text-green-700'>Raízes Vivas</h1>
        <p className='text-lg mt-2'>Raízes que acolhem, tradições que inspiram.</p>
      </header>

      <section id='reservas' className='p-6 bg-gray-50'>
        <h2 className='text-2xl font-semibold mb-4'>Reservas</h2>
        <form className='grid gap-4 max-w-md mx-auto'>
          <input type='text' placeholder='Nome' className='p-2 border rounded' required />
          <input type='email' placeholder='Email' className='p-2 border rounded' required />
          <input type='date' className='p-2 border rounded' required />
          <input type='date' className='p-2 border rounded' required />
          <select className='p-2 border rounded'>
            <option>Escolher Casa</option>
            <option>Casa do Vale</option>
            <option>Monte da Serra</option>
          </select>
          <button type='submit' className='bg-green-600 text-white p-2 rounded'>Enviar Pedido</button>
        </form>
      </section>

      <section id='casas' className='p-6'>
        <h2 className='text-2xl font-semibold mb-4'>Casas Disponíveis</h2>
        <p>Exemplo de casas disponíveis com galeria de fotos futura.</p>
        <ul className='list-disc pl-5'>
          <li>Casa do Vale – Gerês</li>
          <li>Monte da Serra – Alentejo</li>
        </ul>
      </section>

      <section id='restaurantes' className='p-6 bg-gray-50'>
        <h2 className='text-2xl font-semibold mb-4'>Restaurantes em Parceria</h2>
        <p>Lista de recomendações com links para contactos futuros.</p>
        <ul className='list-disc pl-5'>
          <li>Tasca do Zé – Trás-os-Montes</li>
          <li>Sabores da Serra – Peneda</li>
        </ul>
      </section>

      <section id='roteiros' className='p-6'>
        <h2 className='text-2xl font-semibold mb-4'>Exemplo de Roteiros</h2>
        <p>Mostramos como funciona uma experiência típica:</p>
        <ul className='list-decimal pl-5'>
          <li>Chegada à aldeia e check-in</li>
          <li>Visita ao lagar de azeite local</li>
          <li>Almoço tradicional</li>
          <li>Caminhada guiada</li>
        </ul>
      </section>

      <section id='feedback' className='p-6 bg-gray-50'>
        <h2 className='text-2xl font-semibold mb-4'>Reclamações ou Elogios</h2>
        <p>Envia-nos a tua opinião para ajudarmos a melhorar!</p>
        <form className='grid gap-4 max-w-md mx-auto mt-4'>
          <textarea rows='4' placeholder='Escreve aqui a tua mensagem' className='p-2 border rounded' />
          <button type='submit' className='bg-green-600 text-white p-2 rounded'>Submeter</button>
        </form>
      </section>

      <footer className='text-center py-6 text-sm text-gray-600'>
        &copy; 2025 Raízes Vivas. Todos os direitos reservados.
      </footer>
    </div>
  );
}
