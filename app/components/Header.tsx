export default function Header() {
    return (
        <header className="text-center text-white py-8 border-b border-[#4d4d4d] md:flex itens-center justify-between">
            <h4>UTFPR</h4>
            <nav>
                <a 
                    className="text-[#C0C0C0] bg-white px-2 py-[4px] rounded hover:bg-[#000000] hover:text-white"
                    href="#"
                >
                    Discover
                </a>
                <a className="hover:text-[#00e77f]" href="#cursos">
                    Templates &nbsp;
                </a>
                <a className="hover:text-[#00e77f]" href="#contato">
                    Mockups &nbsp;{" "}
                </a>
                <a className="hover:text-[#00e77f]" href="#">
                    Graphics &nbsp;
                </a>
            </nav>
        </header>
    )
}