import Navbar from './Navbar'

function Header() {
  return (
    <header className='bg-[#161b22] h-[10vh] bg-[#161b22]/10 flex justify-center gap-[40rem] text-2xl items-center backdrop-blur-md fixed top-0 w-[100%]'>
      <div>
        <h1 className='text-amber-400'>logo</h1>
      </div>
      <Navbar/>
    </header>
  )
}

export default Header
