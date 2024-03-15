interface Props {
  image: string;
  tittle: string;
  para: string;
  button: string;
}
const Boxsection = ({ image, tittle, para, button }: Props) => {
  return (
    <>
      <div className="col-lg-3">
        <div className="card">
          <img className="card-img-top" src={image} />
          <div className="card-body">
            <h4 className="card-title">{tittle}</h4>
            <p className="card-text">{para}</p>
            <a href="#" className="btn btn-primary">
              {button}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Boxsection;
