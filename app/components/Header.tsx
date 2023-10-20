export default function Header() {
    return (
        <header className="text-center text-black py-8 border-b border-[#000000] md:flex itens-center justify-between">
            <h4>UTFPR</h4>
            <nav>
                <a 
                    className="text-[#C0C0C0] bg-white px-2 py-[4px] rounded hover:bg-[#000000] hover:text-white"
                    href="#"
                >
                    Discover
                </a>
                <a className="hover:text-[#C0C0C0]" href="#cursos">
                    Templates &nbsp;
                </a>
                <a className="hover:text-[#C0C0C0]" href="#contato">
                    Mockups &nbsp;{" "}
                </a>
                <a className="hover:text-[#C0C0C0]" href="#">
                    Graphics &nbsp;
                </a>
            </nav>
        </header>
    )
}