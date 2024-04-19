
export default function Home() {
  return (
    <div className="w-full bg-gray-200 flex justify-center items-center flex-col">
      <div id="note">
      <h1 className="text-2xl">Dobrodošli u interaktivnu web aplikaciju za učenje osnova programiranja u Javascript jeziku.</h1>
      <p>Sa lijeve strane, imate navigacijsku traku, preko koje možete pristupiti lekcijama, sukladno sa vašim nivoom znanja.</p>

      <br />

      <p>U svakoj lekciji, imate objašnjenje za svaki koncept, kao i primjere. Također imate i dugme, kojeg vas vodi
        u novi tab u vašem browseru, gdje vam otvara javascript code editor u kojem možete probati svoj kod.
      </p>

      <br /> <br />
      <p>Sretno učenje!</p>
      </div>
   </div>
  )
}
