export default function Header() {
    return (
        <header 
        className="text-center text-black py-8 border-b border-[#000000] md:flex itens-center justify-between">
            <div className="flex items-center">
    <div className="mr-4" style={{ fontSize: '25px' }}>
    <h4>&nbsp;{" "}&nbsp;{" "}&nbsp;{" "}&nbsp;{" "}&nbsp;{" "}&nbsp;{" "}&nbsp;{" "}&nbsp;{" "}UTFPR</h4>
      
    </div>
    </div>
            
            <nav>
                <a 
                    className="text-[#C0C0C0] bg-black px-2 py-[4px] rounded hover:bg-[#000000] hover:text-white"
                    href="#Discover"
                >
                    Discover 
                </a>
                <a className="hover:text-[#C0C0C0]" href="#cursos">
                &nbsp;{" "} Templates &nbsp;{" "}
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