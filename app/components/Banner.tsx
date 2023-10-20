export default  function Banner() {
    return (
        <div>
            <div className="md:flex items-center flex-row-reverse">
                <div className="basis-1/2">
                    <img src="/img/banner.svg" alt="Descrição da Imagem" />
                </div>
                <div className="basis-1/2 text-center text-black">
                    <h2>E-Commerce Powerhouse</h2>
                    <h3>Made by UTFPR</h3>
                   
                </div>
            </div>

        </div>
    )
}