import { Header } from "../../components/Header";

export default function Galeria() {
    const images = [
        "/image/banda1.jpg",
        "/image/banda2.jpg",
        "/image/banda3.jpg",
        "/image/banda4.jpg",
        "/image/banda5.jpg",
        "/image/banda6.jpg",
        "/image/construcao1.jpg",
        "/image/construcao2.jpg",
        "/image/desfile1.jpg",
        "/image/desfile2.jpg",
        "/image/desfile3.jpg",
        "/image/desfile4.jpg",
        "/image/desfile5.jpg",
        "/image/informatica1.jpg",
        "/image/informatica2.jpg",
        "/image/informatica3.jpg",
        "/image/karate1.jpg",
        "/image/karate2.jpg",
        "/image/karate3.jpg",
        "/image/karate4.jpg",
        "/image/karate5.jpg",
    ];
    return (
        <Header>
            <h1>/n</h1>
            <div className="container page-content my-5">
                <h1 className="fw-bold text-success text-center">Galeria</h1>
                <p className="text-center mt-3">
                    Veja algumas fotos dos eventos e atividades realizados pela Casa da Paz.
                </p>

                <div className="row g-3 mt-4">
                    {images.map((src, index) => (
                        <div className="col-12 col-sm-6 col-md-4" key={index}>
                            <div className="card border-0">
                                <img
                                    src={src}
                                    alt={`Imagem ${index + 1}`}
                                    className="img-fluid rounded shadow-sm"
                                    style={{ maxHeight: "300px", objectFit: "cover" }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Header>
    );
}
