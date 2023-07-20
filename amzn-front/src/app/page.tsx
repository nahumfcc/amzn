import Image from 'next/image'

const menu = [
  {
    header:'Lista',
    link:'/list',
    description:'Lista de productos que han salido al mercado'
  },
  {
    header:'Reseñas',
    link:'/review',
    description:'Reseñas de las figuras más chingonas'
  },
  {
    header:'Recomendaciones',
    link:'/recomendations',
    description:'Recomendaciones de los mejores lugares para obtener tus monos'
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" 
    style={{backgroundImage:'url(https://ingenero.blob.core.windows.net/front/banner.svg)', width:'100%', height:'100%'}}>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">

        
       {menu?.map((item, index)=>
       <a key={index}
       href={item.link}
       className="border-gray-100 bg-gray-300 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
       >
       <h2 className={`mb-3 text-2xl font-semibold`}>
         {item.header}{' '}
         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
           -&gt;
         </span>
       </h2>
       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
         {item.description}
       </p>
     </a>
       )}
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">

      <a target="_blank" href="https://amzn.to/3Q675zY">Lo nuevo en McFarlane</a>
        {/*          */}

      </div>
    </main>
  )
}
