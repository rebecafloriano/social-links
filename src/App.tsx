import fotoAvatar from './assets/images/rebeca-500.png'
import Link, { type LinkProps } from './components/Link'

const myLinks: LinkProps[] = [
  {
    title: 'GitHub',
    url: 'https://github.com/rebecafloriano',
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rebeca-erdman-dev/',
  },
  {
    title: 'FrontEnd Mentor',
    url: 'https://www.frontendmentor.io/profile/rebecafloriano',
  },
  {
    title: 'rebecadev.com',
    url: 'https://rebecadev.com',
  },
]
function App() {
  return (
    <div className=" font-inter min-h-screen bg-grey-900 flex justify-center items-center p-4">
      <div className="flex flex-col items-center text-white w-93 bg-grey-800 p-8 rounded-lg">
        <header className="flex flex-col items-center justify-center gap-2 py-8">
          <img
            className="w-32 h-32 rounded-full pb-2"
            src={fotoAvatar}
            alt="Foto de Rebeca Erdman"
          />
          <h1 className="text-2xl font-semibold">Rebeca Erdman</h1>
          <p className="pb-3 text-green font-bold text-md">Lisbon, Portugal</p>
          <h2 className="font-light">"Front-end Developer and avid reader"</h2>
        </header>

        <main className="min-w-full flex flex-col gap-3">
          {myLinks.map((link) => (
            <Link key={link.title} title={link.title} url={link.url} />
          ))}
        </main>
      </div>
    </div>
  )
}

export default App
