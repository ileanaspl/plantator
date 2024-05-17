import "ai-taxonomist";
import "./imgIdentification.scss";

function ImgIdentification() {
    return (
        <div className="identification">
            <div className="titres">
                <h1>Identifier une plante grâce à une image</h1>
                <h2>Vous souhaitez identifier une plante que vous avez prise en photo ?</h2>
            </div>
            <div className="cadre">
                <p>Cliquez sur le cadre ci-dessous ou glissez-y l'image en question pour procéder à l'identification</p>
                <ai-taxonomist apiKey="2b10wtCkWvuiK6AXaYfGyEKV" ></ai-taxonomist>
            </div>
        </div>
    )
}

export default ImgIdentification