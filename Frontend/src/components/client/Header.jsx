const Header = () => {
  return (
    <>
      <header
        aria-label="Page Header"
        className="bg-gradient-to-b from-gray-800 via-gray-900  to-gray-900"
      >
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="inline bg-gradient-to-r bg-clip-text font-display text-5xl font-bold tracking-tight text-transparent from-indigo-200 via-sky-400 to-indigo-200">
                Agenda tu reserva!
              </h1>

              <p class="mt-1.5 text-sm text-gray-200">
                Digita toda la información necesaria, Te esperamos...
              </p>
            </div>

            <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-center">
              <div className="flex gap-4 items-center">
                <span
                  aria-hidden="true"
                  className="block h-6 w-px rounded-full bg-zinc-200"
                ></span>
                <img
                  src="https://cdn.discordapp.com/attachments/1008571051392909393/1088916706556121209/ElvisSP_la_palabra_MAQYA_para_logo_hotel_y_terraza_minimalista__57244e16-fffa-47ff-8db7-883db08fdf5f.png"
                  alt="logo"
                  className="h-20 w-20 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;